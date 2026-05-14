---
name: database-debugging-engineer
description: Use this skill when debugging, fixing, optimizing, analyzing, reviewing, or stabilizing database systems including SQL, NoSQL, Firebase Firestore, MongoDB, PostgreSQL, MySQL, Supabase, Redis, migrations, indexes, query performance, permissions, connection errors, and cloud database infrastructure.
---

# Database Debugging Engineer

Use this skill to find database root causes before changing schemas, rules, or queries. Diagnose first — patch narrowly — verify completely.

## Output Instructions

When activated:

- **Capture the full failure context** before suggesting any fix — see Step 1 below.
- **Classify the issue** using the classification table before investigating.
- **Never apply destructive fixes** (DROP TABLE, DELETE without WHERE, migration rollback) without explicit user approval.
- **Produce a structured response** using the Response Format at the end of this skill.
- **Always include a verification step** — how to confirm the fix worked.

---

## Debugging Workflow

1. **Capture the failure:**
   - Exact error message and error code
   - Full stack trace (if available)
   - Query or operation that triggered the error
   - Table, collection, or document path involved
   - User role and authentication state at the time
   - Environment: dev / staging / production
   - Database system and version

2. **Classify the issue** (see Classification Table below)

3. **Inspect the source of truth:**
   - Migration files and schema definitions
   - Models, ORM schemas, or collection shapes
   - Security rules or Row Level Security policies
   - Query builders, ORMs, or service functions
   - Environment variables and connection strings
   - Index definitions

4. **Patch carefully:**
   - Preserve existing data — no destructive operations without approval
   - Fix the root cause, not the symptom
   - Add guards, constraints, or indexes where they address the root cause
   - Prefer targeted migrations over schema rewrites

5. **Verify:**
   - Re-run the failing query or workflow with the fix applied
   - Run migrations in staging before production
   - Verify read/write permissions for the affected role
   - Confirm no regression in related queries

---

## Issue Classification Table

| Class                           | Symptoms                                                        | First Place to Look                                           |
| ------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------- |
| **Connection**                  | Timeout, ECONNREFUSED, "too many clients"                       | Connection string, pool config, firewall rules                |
| **Schema mismatch**             | Column not found, type mismatch, null constraint violation      | Migration files vs. actual schema                             |
| **Query bug**                   | Wrong results, empty results, unexpected nulls                  | Query logic, JOIN conditions, WHERE clauses                   |
| **Relationship bug**            | Missing FK, orphaned records, wrong references                  | Foreign key definitions, document references                  |
| **Permission / policy failure** | permission-denied, 403, RLS policy blocks valid user            | Security rules, RLS policies, user role                       |
| **Missing index**               | Slow queries, full table scans, failed-precondition (Firestore) | `EXPLAIN ANALYZE`, Firestore index console                    |
| **Migration failure**           | Schema out of sync, failed migration, locked table              | Migration history, pending migrations, lock status            |
| **Performance**                 | Slow queries, timeouts, high CPU/memory                         | Query plans, N+1 patterns, missing indexes, unbounded queries |
| **Data corruption**             | Invalid values, broken references, unexpected nulls             | Seed data, migration logic, missing constraints               |
| **Realtime / listener**         | Infinite reads, loop, excessive billing                         | Listener scope, effect dependencies, listener cleanup         |

---

## SQL Debugging

**Inspect for:**

- Missing or incorrect foreign key definitions
- Wrong JOIN type (INNER vs LEFT) causing missing or duplicate rows
- Data type mismatches between compared columns
- Null handling in WHERE clauses (`IS NULL` vs `= NULL`)
- Unique constraint failures from duplicate data
- Migration order errors — constraints referencing tables not yet created
- Missing indexes on join and filter columns
- Slow query plans (use `EXPLAIN ANALYZE`)

**Query plan analysis:**

```sql
EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 'abc123' AND status = 'pending'
ORDER BY created_at DESC
LIMIT 20;
```

Look for: Seq Scan (bad on large tables), high rows estimate vs actual, missing index usage.

**Common fixes:**

```sql
-- Add missing index
CREATE INDEX CONCURRENTLY idx_orders_user_status ON orders(user_id, status);

-- Fix null-safe comparison
WHERE deleted_at IS NULL   -- correct
WHERE deleted_at = NULL    -- always false

-- Transaction-safe related record update
BEGIN;
  UPDATE orders SET status = 'cancelled' WHERE id = $1;
  INSERT INTO audit_logs (order_id, action) VALUES ($1, 'cancelled');
COMMIT;
```

**Supabase RLS debugging:**

```sql
-- Check what policies exist
SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'orders';

-- Test as a specific user (in SQL editor)
SET LOCAL role = authenticated;
SET LOCAL request.jwt.claims = '{"sub": "user-uuid-here", "role": "authenticated"}';
SELECT * FROM orders;
```

---

## NoSQL Debugging

**Inspect for:**

- Document shape drift — fields that exist in some documents but not others
- Invalid or broken references (referencing a deleted document)
- Oversized documents approaching platform limits (Firestore: 1MB per document)
- Unbounded arrays causing reads to slow as documents grow
- Query patterns not supported by existing indexes
- Client-side assumptions about optional or missing fields

**Common fixes:**

- Add null/undefined guards before accessing nested fields
- Create the missing composite index from the error link in Firestore console
- Split oversized documents into sub-collections
- Replace unbounded arrays with a sub-collection

---

## Firestore Debugging

**Inspect for:**

- Security rules blocking valid authenticated users
- Undefined or null document IDs being used in paths
- Invalid collection paths (typos, wrong casing)
- Missing composite indexes (Firestore provides a direct link to create them in the error)
- Listener scope too broad — listening to entire collections unnecessarily
- useEffect cleanup missing — listener not unsubscribed on unmount

**Common error causes:**

| Error                          | Most Likely Cause                               | Fix                                        |
| ------------------------------ | ----------------------------------------------- | ------------------------------------------ |
| `permission-denied`            | Security rule not matching auth state           | Log `request.auth` in rules simulator      |
| `failed-precondition`          | Missing composite index                         | Click the index link in the error message  |
| Empty query results            | Wrong collection path or tenant filter mismatch | Log the exact path being queried           |
| Infinite reads / billing spike | Listener in useEffect without cleanup           | Return `unsubscribe()` from useEffect      |
| `invalid-argument`             | Null or undefined value passed to Firestore     | Add null guards before all Firestore calls |

**Firestore Rules Simulator** (test rules without deploying):

```javascript
// In Firebase Console → Firestore → Rules → Rules Playground
// Simulate a read as a specific user and document path
```

---

## Performance Debugging

**Check:**

- Query plan or index usage (`EXPLAIN ANALYZE` for SQL, Firestore index console)
- N+1 query patterns — one query per list item instead of one batch query
- Missing pagination — fetching entire tables or collections
- Repeated identical reads that could be cached
- Unbounded realtime listeners consuming excess read quota
- Large payloads — select only needed columns/fields
- Aggregations computed live that could be precomputed

**Fix strategies:**
| Problem | Fix |
|---|---|
| No index on filter column | Add targeted index |
| N+1 queries | Use JOIN, `IN` query, or batch fetch |
| No pagination | Add `LIMIT`/`OFFSET` or keyset pagination |
| Repeated reads | Add Redis cache with appropriate TTL |
| Unbounded listener | Scope listener with `.where()` and `.limit()` |
| Slow aggregation | Precompute and store aggregate in a summary document/table |

---

## Connection & Configuration Debugging

**Symptoms:** Timeout, ECONNREFUSED, "too many clients", SSL errors

**Check:**

- Connection string format: protocol, host, port, database name, credentials
- SSL mode: `sslmode=require` for production PostgreSQL
- Connection pool size vs. database connection limit
- Firewall rules allowing app server IP to reach database
- Environment variables loaded correctly (check for missing `VITE_` prefix, `.env` not loaded)
- PgBouncer or connection pool configured for serverless functions

```bash
# Test PostgreSQL connection from terminal
psql "postgresql://user:password@host:5432/dbname?sslmode=require"

# Check active connections
SELECT count(*) FROM pg_stat_activity WHERE datname = 'your_database';
```

---

## Migration Debugging

**Symptoms:** Schema out of sync, failed migration, locked table, foreign key errors

**Check:**

- Migration history table (`_prisma_migrations`, `flyway_schema_history`, etc.)
- Pending vs. applied migrations
- Migration that failed partway through — manual rollback may be needed
- Table locks from a long-running migration blocking other queries

**Safe recovery steps:**

1. Inspect migration history for failed entries
2. Fix the migration SQL — do not re-run a partially applied migration blindly
3. Manually undo the partial change if safe (on staging first)
4. Re-run the corrected migration
5. Verify schema matches expected state

---

## Data Safety Rules

- **Never run `DROP TABLE`, `TRUNCATE`, or `DELETE` without a `WHERE` clause** without explicit user confirmation
- **Back up production** before applying any migration that alters or removes data
- **Test destructive operations on staging** with a production data copy before production
- **Use transactions** for multi-statement changes — rollback if any step fails
- **Soft delete** (`deleted_at`) instead of hard delete for auditable data

---

## Response Format

Every database debug response must include:

1. **Root cause** — exactly what went wrong and why
2. **Files or schema objects changed** — migration file, security rule, query, index
3. **Why the fix works** — explain the mechanism, not just what to do
4. **Data safety considerations** — what data could be affected; any backup or rollback steps
5. **Verification performed** — how to confirm the fix resolves the issue
6. **Prevention advice** — what to add (constraint, index, guard, test) to prevent recurrence
