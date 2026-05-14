---
name: universal-database-engineer
description: Use this skill when working with any database system including SQL, NoSQL, cloud databases, realtime databases, cache layers, and scalable backend architectures. Use it for data modeling, query design, security, performance, migrations, indexing, debugging, and production readiness across PostgreSQL, MySQL, SQLite, MongoDB, Firebase Firestore, Supabase, Redis, DynamoDB, Neon, and similar systems.
---

# Universal Database Engineer

Use this skill as the general database engineering guide. Always start from product workflows and access patterns — never from isolated field lists.

## Output Instructions

When activated:

- **Ask what the access patterns are** if not stated — queries drive schema.
- **Recommend a database type** if none chosen — justify using the selection guide below.
- **Produce concrete output**: schema definitions, query examples, index plans, security rules.
- **Flag data safety risks** explicitly: destructive migrations, missing backups, unbounded queries.
- **Always include a verification step** before production.

---

## Database Selection Guide

| Need                                     | Best Fit                               |
| ---------------------------------------- | -------------------------------------- |
| Relational data, transactions, reporting | PostgreSQL / MySQL / SQLite            |
| Flexible documents, realtime, mobile     | Firebase Firestore / MongoDB           |
| SQL + auth + storage + realtime          | Supabase (PostgreSQL + PostgREST)      |
| Serverless / edge SQL                    | Neon / PlanetScale / Turso             |
| Key-value cache, sessions, queues        | Redis / Upstash                        |
| Full-text search                         | Meilisearch / Algolia / PostgreSQL FTS |
| Time-series                              | TimescaleDB / InfluxDB                 |
| Analytics / OLAP                         | ClickHouse / BigQuery                  |

**Default recommendation:** Use **PostgreSQL** (via Supabase or Neon) — it handles 90% of web app use cases.

---

## Core Workflow

1. Understand product workflows and access patterns
2. Identify entities, relationships, and ownership boundaries
3. Design schema around the most frequent read patterns
4. Plan indexes before populating data
5. Add production safeguards: constraints, RLS/security rules, backups, migrations
6. Verify with realistic data volume and role context

---

## General Rules

- Consistent naming: `snake_case` for SQL, `camelCase` for NoSQL documents
- Explicit ownership and tenant boundaries — never rely on client-side filtering
- `created_at` and `updated_at` timestamps on every table/collection
- Plan pagination and filtering from day one — never return unbounded lists
- Validate at trusted boundaries: database constraints + server-side
- Index intentionally — every index speeds reads, slows writes
- Never put secrets in client code
- Enforce authorization server-side — never frontend-only
- Document all migrations in version-controlled files
- Use soft deletes (`deleted_at`) for auditable or recoverable data

---

## SQL (PostgreSQL / MySQL / SQLite)

**Schema Design:**

- UUIDs or auto-increment primary keys (UUIDs for distributed systems)
- Foreign keys for all real relationships — enforce at database level
- Normalize first; denormalize only for measured performance gains
- Unique constraints for business uniqueness (email, slug, order number)
- Junction tables for many-to-many relationships
- `NOT NULL` wherever null is semantically meaningless

**Indexing:**

- Index: foreign keys, frequent `WHERE` columns, `ORDER BY` columns, unique lookups
- Composite indexes: highest-cardinality column first
- Partial indexes: e.g. `WHERE deleted_at IS NULL`
- Avoid over-indexing write-heavy tables

**Query Patterns:**

- Never use `SELECT *` in production
- Use `EXPLAIN ANALYZE` to inspect slow query plans
- Keyset/cursor pagination at scale — avoid `OFFSET`
- Transactions for multi-step atomic operations
- CTEs for readable complex queries

**Migrations:**

- Use migration files for every schema change — never manual edits in production
- Test on staging with production-like data before applying
- Never drop columns in the same deploy as removing the code that uses them
- Include reversible `down` migrations where possible

---

## NoSQL (MongoDB / Firestore)

**Document Design:**

- Embed data that is always read together and is bounded in size
- Reference data that is large, shared, or independently updated
- Avoid unbounded arrays — cap embedded arrays at ~20–30 items; use sub-collections beyond that
- Denormalize display data (e.g. username on comments) with a sync plan

**Indexing:**

- Plan composite indexes before building complex filter queries
- Firestore: single-field indexes are automatic; composite indexes require manual creation
- MongoDB: use compound indexes; understand selectivity order

---

## Firebase Firestore

**Common top-level collections:**
`users`, `organizations`, domain collections (`orders`, `products`, `reports`), `notifications`, `auditLogs`, `settings`

**Security Rules pattern:**

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAuth() { return request.auth != null; }
    function isOwner(uid) { return request.auth.uid == uid; }
    function hasRole(role) {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == role;
    }
    match /users/{userId} {
      allow read: if isAuth() && (isOwner(userId) || hasRole('admin'));
      allow write: if isAuth() && isOwner(userId);
    }
  }
}
```

---

## Supabase (PostgreSQL + RLS)

```sql
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_read_own_orders" ON orders FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "admins_read_all" ON orders FOR SELECT
USING (EXISTS (
  SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
));
```

- Always enable RLS before exposing tables via the API
- Use `service_role` key server-side only — never in the client
- Use Edge Functions for logic requiring elevated access

---

## Redis / Cache Layer

- Define TTL for every key — never set keys without expiry unless intentional
- Define cache invalidation triggers before caching anything
- Use as cache layer, not the only source of durable truth
- Key naming: `{entity}:{id}:{field}` — e.g. `user:123:profile`
- Use connection pooling for serverless environments (Upstash)

---

## Security

- Enforce RLS (Supabase) or Security Rules (Firebase) at the database layer
- Parameterized queries always — never string concatenation in SQL
- Sanitize all user input server-side
- Audit log all administrative and destructive actions
- Encrypt PII and regulated data at rest; define retention policy
- Least-privilege database roles: app user should not have DDL permissions
- SSL/TLS for all production database connections

---

## Performance

- `SELECT *` is never acceptable in production queries
- Paginate all list endpoints
- Index joins, filters, sort columns, and unique lookups
- Cache derived or frequently-read data with Redis
- Identify and fix N+1 patterns (use joins, `IN` queries, or data loaders)
- Connection pooling for high-concurrency SQL (PgBouncer, Supabase pooler)
- Monitor with: `pg_stat_statements`, MongoDB Profiler, Firestore usage dashboard

---

## Migration Strategy

1. Write migration with `up` + `down` scripts
2. Test on staging with a production data snapshot
3. Back up production before applying
4. Apply during low-traffic window
5. Monitor error rates and query performance after apply
6. Keep rollback plan ready

**Zero-downtime rules:**

- Add nullable columns first, backfill, then add constraints
- Never rename or drop columns in the same deploy as removing the referencing code
- Use feature flags to decouple code deploys from schema changes

---

## Backup & Recovery

- Automated daily backups, 30-day retention minimum
- Test restores quarterly — an untested backup is not a backup
- Enable point-in-time recovery (PITR) where available (Supabase, Neon, PlanetScale)
- Firestore: scheduled exports to Cloud Storage
- Document the restore procedure in the project README

---

## Deliverables

Produce the relevant set for each database task:

- Entity list with field names, types, constraints, and nullability
- Schema or collection definitions (SQL DDL or document shape)
- Relationship map
- Index plan with justification
- Security model (RLS policies, Firestore rules, or RBAC)
- Query examples for primary access patterns
- Migration plan (up/down, zero-downtime considerations)
- Backup and recovery notes
- Risks and scaling considerations
- Verification steps
