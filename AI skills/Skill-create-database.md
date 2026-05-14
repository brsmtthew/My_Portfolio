---
name: database-creation-engineer
description: Use this skill when designing, planning, creating, or restructuring database systems including PostgreSQL, MySQL, SQLite, MongoDB, Firebase Firestore, Supabase, Redis-backed data flows, and cloud database architectures. Use it for schemas, relationships, indexes, migrations, security rules, query planning, seed data, and production-ready data modeling.
---

# Database Creation Engineer

Use this skill to design database structures from workflow and query needs — never from isolated field lists. Schema decisions must be driven by how the application reads, writes, and secures data.

## Output Instructions

When activated:

- **Ask about access patterns first** if not provided — the schema must serve the queries.
- **Produce a complete design artifact** using the Output Format at the end of this skill.
- **Justify every structural decision**: why embed vs. reference, why index a field, why use a junction table.
- **Flag risks**: missing indexes, unbounded arrays, missing soft deletes, insecure rules.
- **Include seed data examples** for the core entities when building a new schema from scratch.

---

## Creation Workflow

1. **Understand the domain:**
   - Users and roles (who reads and writes what?)
   - Core workflows (what are the primary CRUD operations?)
   - Data ownership (which user or org owns each record?)
   - Reporting needs (what aggregations must be fast?)
   - Retention and audit requirements (what must be logged or recoverable?)

2. **Identify entities:**
   - Tables or collections
   - Fields and data types
   - Required vs. optional values
   - Status fields (use enums or check constraints)
   - Timestamps: `created_at`, `updated_at`, `deleted_at` (soft delete)
   - Ownership fields: `user_id`, `org_id`, `created_by`

3. **Model relationships:**
   - One-to-one: embed or foreign key depending on query pattern
   - One-to-many: foreign key on the child (SQL) or reference field (NoSQL)
   - Many-to-many: junction table (SQL) or array of references with bounded size (NoSQL)
   - Self-referencing: parent `id` on the same table (categories, threads, org hierarchy)

4. **Plan operations:**
   - Create, read, update, delete — for each entity and role
   - Filtering, sorting, pagination on list views
   - Dashboard aggregations and report queries
   - Search (full-text or prefix)
   - Bulk actions and cascade deletes

5. **Add production safeguards:**
   - Constraints (unique, not null, check, foreign key)
   - Indexes (see Indexing Rules below)
   - Validation at database layer + server layer
   - Security rules / Row Level Security
   - Migrations (never manual schema edits in production)
   - Backup strategy and retention policy

---

## SQL Rules (PostgreSQL / MySQL / SQLite)

**Primary Keys:**

- Use `UUID` for distributed systems, public APIs, or when IDs must not be guessable
- Use `SERIAL` / `BIGSERIAL` for internal high-write tables where sequential IDs are fine

**Foreign Keys:**

- Always define foreign keys for real relationships — enforce at the database level
- Add `ON DELETE CASCADE` only when child records have no independent meaning
- Use `ON DELETE SET NULL` when preserving child records without a parent is valid
- Use `ON DELETE RESTRICT` (default) when orphan records would be a bug

**Constraints:**

- `NOT NULL` on every field where null is not semantically meaningful
- `UNIQUE` for business uniqueness: email, username, slug, order number
- `CHECK` for enumerated status fields: `CHECK (status IN ('active', 'inactive', 'archived'))`
- Default values for common fields: `created_at DEFAULT NOW()`, `status DEFAULT 'active'`

**Normalization:**

- Normalize by default — separate entity = separate table
- Denormalize only with a measured reason: avoid joining 5 tables for a frequent read
- Document every denormalization decision so future developers know it is intentional

**Indexing Rules:**

- Index all foreign key columns (not automatic in PostgreSQL)
- Index frequent `WHERE` filter columns
- Index `ORDER BY` columns for sorted list queries
- Composite indexes: put the most selective / most filtered column first
- Partial indexes for filtered subsets: `CREATE INDEX ON orders (status) WHERE deleted_at IS NULL`
- Never index every column — write performance degrades with excess indexes

**Example SQL Schema (Users + Posts):**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  body TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_status ON posts(status) WHERE deleted_at IS NULL;
```

---

## NoSQL Rules (MongoDB / Firestore)

**Embed when:**

- Data is always read with its parent (address inside a user profile)
- Data is bounded and small (max ~20 items)
- Data is not shared with other documents

**Reference when:**

- Data is large, grows unbounded, or is read independently
- Data is shared across multiple parent documents
- Data has its own permission scope

**Avoid:**

- Unbounded arrays in documents (they grow without limit and cause read cost issues)
- Deeply nested sub-documents (3+ levels become hard to query and update)
- Duplicating data without a synchronization plan

**NoSQL Document Shape Example (Firestore):**

```
users/{userId}
  - id: string
  - email: string
  - name: string
  - role: 'user' | 'admin'
  - createdAt: timestamp
  - updatedAt: timestamp

posts/{postId}
  - id: string
  - authorId: string        ← reference to users/{userId}
  - authorName: string      ← denormalized for display (sync on name change)
  - title: string
  - slug: string
  - body: string
  - status: 'draft' | 'published'
  - publishedAt: timestamp | null
  - createdAt: timestamp
  - updatedAt: timestamp
```

---

## Firestore-Specific Design

**Common top-level collections:**

- `users` — profile, role, preferences
- `organizations` / `teams` — multi-tenant root
- Domain collections: `orders`, `products`, `posts`, `reports`, `patients`
- `notifications`
- `auditLogs`
- `settings` (single document per org or global)

**Always plan:**

- Document paths and sub-collection depth
- User ownership checks in security rules
- Role-based access in security rules
- Composite indexes for multi-field queries (required before deploying queries using them)
- Listener scope — avoid listening to entire large collections from the client
- Read/write cost per user action

**Security Rules skeleton:**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAuth() { return request.auth != null; }
    function isOwner(userId) { return request.auth.uid == userId; }
    function userRole() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role;
    }

    match /posts/{postId} {
      allow read: if isAuth();
      allow create: if isAuth();
      allow update, delete: if isAuth() && (
        isOwner(resource.data.authorId) || userRole() == 'admin'
      );
    }
  }
}
```

---

## Supabase (PostgreSQL + Row Level Security)

```sql
-- Enable RLS on every exposed table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Authenticated users can read published posts
CREATE POLICY "read_published_posts" ON posts FOR SELECT
USING (status = 'published' OR auth.uid() = user_id);

-- Users can only update their own posts
CREATE POLICY "update_own_posts" ON posts FOR UPDATE
USING (auth.uid() = user_id);

-- Admins can do everything
CREATE POLICY "admin_full_access" ON posts
USING (
  EXISTS (SELECT 1 FROM users WHERE users.id = auth.uid() AND users.role = 'admin')
);
```

---

## Seed Data Guidelines

Always include seed data when creating a new schema:

- At least 2–3 example records per entity
- Cover all status values (active, draft, archived, etc.)
- Include at least one admin user and one regular user
- Cover edge cases: empty relationship, null optional fields
- Use realistic values, not "test1", "test2"

---

## Security And Compliance

- Never rely on frontend validation alone — enforce at server + database
- Keep secrets (connection strings) in environment variables
- Define role-based access at the database layer (RLS or security rules)
- Log important administrative and destructive actions to an audit log
- Avoid storing sensitive data (SSN, payment details) unless required — use a vault or third-party (Stripe)
- Define data retention and deletion behavior for personal or regulated data (GDPR, HIPAA)
- Enable SSL/TLS for all production database connections

---

## Output Format

When producing a database design, always include:

1. **Entity list** — name, description, owner, and key fields for each entity
2. **Schema definitions** — full SQL DDL or NoSQL document shapes
3. **Relationship map** — table describing entity relationships and cardinality
4. **Index plan** — which indexes, on which columns, and why
5. **Security model** — RLS policies, Firestore rules, or RBAC definition
6. **Query examples** — the 3–5 most important queries with expected performance
7. **Seed data** — example records for core entities
8. **Migration notes** — how to apply safely, zero-downtime considerations
9. **Risks and scaling considerations** — what breaks at 10x data or concurrent users
10. **Verification steps** — how to confirm the schema works correctly before production
