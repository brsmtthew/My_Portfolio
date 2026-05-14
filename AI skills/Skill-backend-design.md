---
name: website-backend-engineer
description: Use this skill when designing, building, reviewing, or debugging the backend of a website or web application. Use it for REST API design, serverless functions, authentication, authorization, middleware, input validation, database integration, file uploads, email sending, background jobs, webhooks, rate limiting, caching, error handling, logging, environment configuration, security hardening, and backend deployment. Covers Node.js, Express, Next.js API routes, serverless functions (Vercel, Netlify, Cloudflare), Supabase, Firebase, and similar stacks.
---

# Website Backend Engineer

Use this skill to build secure, reliable, and maintainable backend systems. Validate everything. Trust nothing from the client. Fail fast and fail clearly.

## Output Instructions

When activated:

- **Inspect the existing backend** — check framework, router, middleware, and auth pattern before adding anything.
- **Validate all inputs server-side** — never trust client-provided data.
- **Never expose secrets** — API keys, DB credentials, and tokens stay in environment variables.
- **Return consistent error shapes** — every error response uses the same format.
- **Include a verification step** — show how to test the endpoint or function before finishing.

---

## Stack Detection

Before writing any backend code, identify:

| Layer       | What to Check                                                      |
| ----------- | ------------------------------------------------------------------ |
| Runtime     | Node.js version, Bun, Deno, or Edge runtime                        |
| Framework   | Express, Fastify, Next.js API routes, Hono, or serverless handlers |
| Auth        | NextAuth, Supabase Auth, Firebase Auth, custom JWT, or sessions    |
| Database    | PostgreSQL (Prisma/Drizzle), Firestore, MongoDB, Supabase, or none |
| ORM / Query | Prisma, Drizzle, Supabase client, Firebase Admin SDK               |
| Deployment  | Vercel, Netlify, Cloudflare Workers, Railway, Fly.io, or VPS       |
| Email       | Resend, SendGrid, Nodemailer, or Postmark                          |

---

## API Design Principles

### REST Conventions

```
GET    /api/posts           → list posts (paginated)
GET    /api/posts/:id       → get single post
POST   /api/posts           → create post (body: post data)
PATCH  /api/posts/:id       → partial update
PUT    /api/posts/:id       → full replace
DELETE /api/posts/:id       → delete post

GET    /api/users/:id/posts → nested resource — posts belonging to a user
POST   /api/auth/login      → auth actions use verbs in the path
POST   /api/auth/logout
POST   /api/auth/refresh
```

**HTTP Status Codes — use consistently:**

| Status | When                                                 |
| ------ | ---------------------------------------------------- |
| 200    | Success with response body                           |
| 201    | Resource created                                     |
| 204    | Success, no body (DELETE)                            |
| 400    | Validation error — bad input from client             |
| 401    | Not authenticated — no valid session/token           |
| 403    | Authenticated but not authorized                     |
| 404    | Resource not found                                   |
| 409    | Conflict — duplicate, already exists                 |
| 422    | Unprocessable — valid format, invalid business logic |
| 429    | Rate limited                                         |
| 500    | Server error — never expose internal details         |

### Standard Response Shape

```typescript
// Success
{ "data": { ... }, "meta": { "page": 1, "total": 42 } }

// Error
{ "error": { "code": "VALIDATION_ERROR", "message": "Email is required", "field": "email" } }

// List with pagination
{ "data": [...], "meta": { "page": 1, "limit": 20, "total": 100, "hasMore": true } }
```

---

## Input Validation

**Always validate with Zod on every API route — never trust req.body directly:**

```typescript
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(2).max(200),
  body: z.string().min(10).max(50000),
  status: z.enum(["draft", "published"]).default("draft"),
  tags: z.array(z.string()).max(10).optional(),
});

// Next.js App Router
export async function POST(req: Request) {
  const body = await req.json();
  const result = createPostSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: result.error.errors[0].message,
        },
      },
      { status: 400 },
    );
  }

  const { title, body: postBody, status, tags } = result.data;
  // safe to use — fully typed and validated
}
```

**Validate:** request body, query params, route params, file uploads, headers when relevant.

---

## Authentication

### JWT Pattern (stateless)

```typescript
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!; // minimum 32 chars, random

// Sign token on login
function signToken(userId: string, role: string) {
  return jwt.sign({ sub: userId, role }, JWT_SECRET, { expiresIn: "7d" });
}

// Verify token in middleware
function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { sub: string; role: string };
  } catch {
    return null;
  }
}

// Auth middleware (Express)
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  const payload = token ? verifyToken(token) : null;

  if (!payload)
    return res
      .status(401)
      .json({ error: { code: "UNAUTHORIZED", message: "Login required" } });

  req.user = payload;
  next();
}
```

### Supabase Auth (Next.js App Router)

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function getSession() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } },
  );
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

// Protect a route
export async function GET(req: Request) {
  const session = await getSession();
  if (!session)
    return Response.json({ error: { code: "UNAUTHORIZED" } }, { status: 401 });
  // proceed with authenticated request
}
```

### middleware.ts — Protect Routes (Next.js)

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = ["/dashboard", "/settings", "/api/private"];

export function middleware(req: NextRequest) {
  const isProtected = PROTECTED.some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );
  const token = req.cookies.get("token")?.value;

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/api/private/:path*"] };
```

---

## Authorization (RBAC)

```typescript
type Role = "admin" | "editor" | "viewer";

const permissions: Record<Role, string[]> = {
  admin: ["posts:read", "posts:write", "posts:delete", "users:manage"],
  editor: ["posts:read", "posts:write"],
  viewer: ["posts:read"],
};

function can(role: Role, action: string): boolean {
  return permissions[role]?.includes(action) ?? false;
}

// Usage in route handler
if (!can(req.user.role, "posts:delete")) {
  return Response.json(
    { error: { code: "FORBIDDEN", message: "Insufficient permissions" } },
    { status: 403 },
  );
}
```

---

## Database Integration

### Prisma (PostgreSQL / MySQL)

```typescript
// prisma/schema.prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  body      String
  status    String   @default("draft")
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@index([authorId])
  @@index([status])
}

// service/posts.ts
import { prisma } from '@/lib/prisma';

export async function getPosts(page = 1, limit = 20, userId?: string) {
  const where = userId ? { authorId: userId, deletedAt: null } : { status: 'published', deletedAt: null };
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      select: { id: true, title: true, status: true, createdAt: true, author: { select: { name: true } } },
    }),
    prisma.post.count({ where }),
  ]);
  return { posts, total, hasMore: page * limit < total };
}
```

### Supabase (PostgreSQL + RLS)

```typescript
import { createClient } from "@supabase/supabase-js";

// Server-side only — uses service_role key to bypass RLS when needed
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // NEVER expose to client
);

// Paginated query respecting RLS
export async function getUserPosts(userId: string, page = 1, limit = 20) {
  const { data, error, count } = await supabase
    .from("posts")
    .select("id, title, status, created_at", { count: "exact" })
    .eq("author_id", userId)
    .is("deleted_at", null)
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) throw new Error(error.message);
  return { posts: data, total: count ?? 0 };
}
```

---

## Error Handling

### Global Error Handler (Express)

```typescript
// middleware/errorHandler.ts
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  if (err instanceof ValidationError) {
    return res
      .status(400)
      .json({
        error: {
          code: "VALIDATION_ERROR",
          message: err.message,
          field: err.field,
        },
      });
  }
  if (err instanceof AuthError) {
    return res
      .status(401)
      .json({
        error: { code: "UNAUTHORIZED", message: "Authentication required" },
      });
  }
  if (err instanceof NotFoundError) {
    return res
      .status(404)
      .json({ error: { code: "NOT_FOUND", message: err.message } });
  }

  // Never expose internal errors to clients
  res
    .status(500)
    .json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Something went wrong. Please try again.",
      },
    });
}
```

### Next.js Route Handler Error Wrapper

```typescript
function withErrorHandling(
  handler: (req: Request, ctx: any) => Promise<Response>,
) {
  return async (req: Request, ctx: any) => {
    try {
      return await handler(req, ctx);
    } catch (err) {
      console.error(err);
      if (err instanceof z.ZodError) {
        return Response.json(
          {
            error: { code: "VALIDATION_ERROR", message: err.errors[0].message },
          },
          { status: 400 },
        );
      }
      return Response.json(
        { error: { code: "INTERNAL_ERROR", message: "Something went wrong" } },
        { status: 500 },
      );
    }
  };
}

export const POST = withErrorHandling(async (req) => {
  // route logic here — errors bubble up to handler
});
```

---

## Rate Limiting

```typescript
// lib/rateLimit.ts — in-memory (use Upstash Redis for production/serverless)
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "60s"), // 10 requests per 60s
  analytics: true,
});

export async function checkRateLimit(identifier: string) {
  const { success, limit, remaining, reset } =
    await ratelimit.limit(identifier);
  return {
    success,
    headers: {
      "X-RateLimit-Limit": limit.toString(),
      "X-RateLimit-Remaining": remaining.toString(),
      "X-RateLimit-Reset": reset.toString(),
    },
  };
}

// Usage
const { success, headers } = await checkRateLimit(req.ip ?? "anonymous");
if (!success)
  return Response.json(
    { error: { code: "RATE_LIMITED", message: "Too many requests" } },
    { status: 429, headers },
  );
```

---

## File Uploads

```typescript
// Upload to Cloudinary via server (never from client — keeps API key secret)
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file)
    return Response.json({ error: { code: "MISSING_FILE" } }, { status: 400 });

  // Validate: type and size
  const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
  if (!ALLOWED.includes(file.type))
    return Response.json(
      { error: { code: "INVALID_FILE_TYPE" } },
      { status: 400 },
    );
  if (file.size > 5 * 1024 * 1024)
    return Response.json(
      { error: { code: "FILE_TOO_LARGE", message: "Max 5MB" } },
      { status: 400 },
    );

  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await new Promise<{ secure_url: string }>(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "uploads", resource_type: "image" },
          (err, res) => {
            if (err || !res) reject(err);
            else resolve(res);
          },
        )
        .end(buffer);
    },
  );

  return Response.json({ data: { url: result.secure_url } }, { status: 201 });
}
```

---

## Email (Transactional)

```typescript
// lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendWelcomeEmail(to: string, name: string) {
  const { error } = await resend.emails.send({
    from: "onboarding@yourdomain.com",
    to,
    subject: `Welcome, ${name}!`,
    html: `<h1>Welcome, ${name}!</h1><p>Thanks for signing up.</p>`,
  });
  if (error) throw new Error(`Email send failed: ${error.message}`);
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  message: string;
}) {
  await resend.emails.send({
    from: "noreply@yourdomain.com",
    to: process.env.ADMIN_EMAIL!,
    subject: `New contact from ${data.name}`,
    html: `<p><strong>From:</strong> ${data.name} (${data.email})</p><p>${data.message}</p>`,
  });
}
```

---

## Caching

```typescript
// Vercel Edge Cache — cache GET responses
export async function GET(req: Request) {
  const posts = await getPosts();
  return Response.json(
    { data: posts },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}

// Next.js fetch cache (App Router)
const posts = await fetch("https://api.example.com/posts", {
  next: { revalidate: 60 }, // revalidate every 60 seconds (ISR)
});

// Redis cache with Upstash
import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

async function getCachedPosts() {
  const cached = await redis.get<Post[]>("posts:all");
  if (cached) return cached;

  const posts = await fetchPostsFromDB();
  await redis.setex("posts:all", 60, posts); // TTL: 60s
  return posts;
}
```

---

## Webhooks

```typescript
// Stripe webhook — always verify signature
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text(); // raw body required for signature verification
  const signature = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      await handlePaymentSuccess(event.data.object as Stripe.PaymentIntent);
      break;
    case "customer.subscription.deleted":
      await handleSubscriptionCancelled(
        event.data.object as Stripe.Subscription,
      );
      break;
  }

  return Response.json({ received: true });
}
```

---

## Security Hardening

```typescript
// Security headers (Next.js next.config.js)
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// CORS (Express)
import cors from "cors";
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://yourdomain.com"
        : "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);
```

**Security rules — non-negotiable:**

- All secrets in `.env` — never hardcoded, never in client bundles
- Validate and sanitize all inputs server-side with Zod
- Use parameterized queries — never string concatenation in SQL
- Rate limit all public endpoints — especially login, register, and contact forms
- Verify webhook signatures before processing
- Log security events (failed logins, rate limit hits, auth errors)
- Use HTTPS only in production — enforce via HSTS header
- Least privilege: app database user should not have DDL permissions

---

## Logging

```typescript
// lib/logger.ts — structured logging
export const logger = {
  info: (msg: string, data?: object) =>
    console.log(
      JSON.stringify({
        level: "info",
        msg,
        ...data,
        ts: new Date().toISOString(),
      }),
    ),
  warn: (msg: string, data?: object) =>
    console.warn(
      JSON.stringify({
        level: "warn",
        msg,
        ...data,
        ts: new Date().toISOString(),
      }),
    ),
  error: (msg: string, data?: object) =>
    console.error(
      JSON.stringify({
        level: "error",
        msg,
        ...data,
        ts: new Date().toISOString(),
      }),
    ),
};

// Usage
logger.info("User signed up", { userId, email });
logger.error("Payment failed", { userId, orderId, errorCode });
```

**Log:** auth events, payment events, errors, admin actions, rate limit hits.
**Never log:** passwords, full credit card numbers, session tokens, PII beyond what's necessary.

---

## Environment Variables

```bash
# .env.example — commit this (no real values)
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Auth
JWT_SECRET=                    # min 32 chars random string
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=     # server-side only

# Email
RESEND_API_KEY=
ADMIN_EMAIL=

# Storage
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=  # safe for client

# Cache
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

**Validation at startup:**

```typescript
// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  RESEND_API_KEY: z.string().startsWith("re_"),
});

export const env = envSchema.parse(process.env); // throws on missing/invalid
```

---

## Verification Checklist

- [ ] All routes validate input with Zod — `safeParse` used, error returned on failure
- [ ] Auth-protected routes verify session server-side (middleware or route handler)
- [ ] Authorization checked for role-restricted actions
- [ ] All error responses use consistent shape `{ error: { code, message } }`
- [ ] No secrets in client-side code — check `NEXT_PUBLIC_` prefix usage
- [ ] Rate limiting applied to: login, register, contact form, password reset
- [ ] File uploads validated for type and size before processing
- [ ] Webhook signatures verified before processing events
- [ ] Database queries use parameterized inputs — no string concatenation
- [ ] SQL indexes exist for all primary filter and sort columns
- [ ] Logs capture errors, auth events, and payment events (without PII)
- [ ] Security headers set in production
- [ ] CORS configured to allowed origins only
- [ ] `.env.example` committed with all keys, no real values
- [ ] All environment variables validated at startup
- [ ] Tested with: valid input, invalid input, missing auth, insufficient role, duplicate data
