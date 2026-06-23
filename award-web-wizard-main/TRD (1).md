# TRD — Technical Requirements Document

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Status:** Approved | **Date:** June 2026
**Tech Lead Review:** Required before sprint kickoff

---

## 1. Recommended Technology Stack

### 1.1 Stack Decision Rationale

Red B requires:

- SEO-critical category + product pages (rules out pure SPA)
- High mobile performance (rules out heavy SSR-only frameworks)
- Real-time inventory + slot availability
- Subscription billing logic
- Rich media (product images, recipe videos)
- Indian payment gateway integration
- PIN-code-based serviceability

**Recommended Stack: Next.js 15 + TypeScript + PostgreSQL + Redis + Supabase**

| Layer              | Technology                              | Reason                                      |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| Frontend Framework | Next.js 15 (App Router)                 | SSR + SSG + ISR for SEO + performance       |
| Language           | TypeScript                              | Type safety across full stack               |
| Styling            | Tailwind CSS v4                         | Utility-first, design-token friendly        |
| UI Components      | Radix UI (headless) + custom            | Accessible primitives                       |
| State Management   | Zustand                                 | Lightweight, performant cart + auth state   |
| Server State       | TanStack Query v5                       | Data fetching, caching, background sync     |
| Database           | PostgreSQL 16 (via Supabase)            | Relational integrity for orders + inventory |
| ORM                | Prisma v5                               | Type-safe DB access, migrations             |
| Cache Layer        | Redis (Upstash serverless)              | Session, cart, rate limiting, slot cache    |
| Search             | Algolia                                 | Instant search, synonyms, faceting          |
| Auth               | Supabase Auth (OTP via SMS + Google)    | Phone OTP for Indian market                 |
| File Storage       | Cloudflare R2 + Cloudflare Images       | Product images, transformations, CDN        |
| Payment            | Razorpay (Standard + Subscriptions API) | UPI, cards, EMI, mandates                   |
| Email              | Resend + React Email                    | Transactional emails                        |
| WhatsApp           | Gupshup / Interakt API                  | Order updates, support                      |
| Push Notifications | web-push (for PWA)                      | Order status, offers                        |
| Hosting            | Vercel (frontend) + Supabase (DB)       | Edge deployment, global CDN                 |
| Background Jobs    | Inngest                                 | Subscription renewals, slot management      |
| Monitoring         | Sentry + Vercel Analytics               | Error tracking + web vitals                 |
| Analytics          | PostHog (self-hosted)                   | Product analytics, funnels                  |

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                         │
│   Next.js 15 App Router (SSR / SSG / ISR / Client comps)   │
│   Tailwind CSS + Radix UI + Zustand + TanStack Query        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS / REST / GraphQL
┌──────────────────────────▼──────────────────────────────────┐
│                        API LAYER                            │
│   Next.js Route Handlers (/api/*)                           │
│   Supabase Edge Functions (webhooks, heavy compute)         │
└────┬──────────┬───────────┬──────────┬───────────┬──────────┘
     │          │           │          │           │
┌────▼───┐ ┌───▼───┐ ┌─────▼──┐ ┌────▼───┐ ┌─────▼──────┐
│Postgres│ │ Redis │ │Algolia │ │Razorpay│ │Cloudflare  │
│(Supa-  │ │(Cache)│ │(Search)│ │(Pay)   │ │R2 + Images │
│ base)  │ │       │ │        │ │        │ │            │
└────────┘ └───────┘ └────────┘ └────────┘ └────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│                   BACKGROUND JOBS (Inngest)                 │
│  Subscription renewal | Slot management | Low stock alerts  │
│  Email dispatch | WhatsApp notifications | Report gen       │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Frontend Architecture

### 3.1 Next.js App Router Structure

```
app/
├── (marketing)/
│   ├── page.tsx                    # Homepage (ISR, revalidate: 300s)
│   ├── our-promise/page.tsx
│   ├── farm-to-door/page.tsx
│   ├── artisan-partners/page.tsx
│   └── blog/[slug]/page.tsx
├── (shop)/
│   ├── shop/page.tsx               # Shop landing
│   ├── [category]/page.tsx         # PLP (ISR, revalidate: 60s)
│   ├── [category]/[subcategory]/page.tsx
│   ├── product/[slug]/page.tsx     # PDP (ISR, revalidate: 30s)
│   └── search/page.tsx             # Search results (CSR)
├── (checkout)/
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   └── order-confirmed/[id]/page.tsx
├── (account)/
│   ├── account/page.tsx
│   ├── orders/page.tsx
│   ├── orders/[id]/page.tsx
│   ├── addresses/page.tsx
│   ├── wishlist/page.tsx
│   ├── subscription/page.tsx
│   └── membership/page.tsx
├── (admin)/
│   ├── admin/dashboard/page.tsx
│   ├── admin/products/page.tsx
│   ├── admin/orders/page.tsx
│   ├── admin/inventory/page.tsx
│   └── admin/delivery/page.tsx
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── products/route.ts
│   ├── cart/route.ts
│   ├── orders/route.ts
│   ├── checkout/route.ts
│   ├── subscriptions/route.ts
│   ├── delivery/slots/route.ts
│   ├── search/route.ts
│   ├── webhooks/razorpay/route.ts
│   └── webhooks/inngest/route.ts
└── layout.tsx
```

### 3.2 Component Architecture

```
components/
├── ui/                     # Radix-based primitives (Button, Input, Dialog, etc.)
├── layout/
│   ├── Header/
│   ├── Footer/
│   ├── MobileBottomNav/
│   └── PromoBar/
├── product/
│   ├── ProductCard/
│   ├── ProductGrid/
│   ├── ProductGallery/
│   ├── ProductInfo/
│   ├── QuantitySelector/
│   └── TrustBadge/
├── cart/
│   ├── CartDrawer/
│   ├── CartItem/
│   ├── CartSummary/
│   └── CartSuggestions/
├── search/
│   ├── SearchBar/
│   ├── SearchDropdown/
│   └── SearchResults/
├── category/
│   ├── CategoryCard/
│   ├── CategoryHero/
│   └── FilterSidebar/
├── checkout/
│   ├── CheckoutStepper/
│   ├── AddressForm/
│   ├── SlotSelector/
│   ├── PaymentForm/
│   └── OrderReview/
├── homepage/
│   ├── HeroSection/
│   ├── ShopByVertical/
│   ├── HealthGoals/
│   ├── PromiseCards/
│   └── RecipeBundles/
└── subscription/
    ├── BasketBuilder/
    └── SubscriptionManager/
```

### 3.3 State Management

```typescript
// Cart Store (Zustand)
interface CartStore {
  items: CartItem[];
  deliveryMode: "same-day" | "scheduled" | "subscription";
  selectedSlot: DeliverySlot | null;
  couponCode: string | null;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totals: ComputedCartTotals;
}

// Auth Store (Zustand)
interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  membershipTier: "free" | "red-b-member";
  login: (phone: string) => Promise<void>;
  logout: () => void;
}

// UI Store (Zustand)
interface UIStore {
  cartDrawerOpen: boolean;
  searchOpen: boolean;
  filterSheetOpen: boolean;
  locationModalOpen: boolean;
  toggleCartDrawer: () => void;
  toggleSearch: () => void;
}
```

---

## 4. Backend API Design

### 4.1 REST API Conventions

- Base URL: `https://api.redb.in/v1/`
- Authentication: Bearer JWT (Supabase JWT)
- Response format: `{ data, error, meta }` envelope
- Pagination: cursor-based for feeds, offset for admin
- Rate limiting: 100 req/min per IP (Redis), 1000 req/min per authenticated user

### 4.2 Core Endpoints

#### Products

```
GET    /api/products                    # List with filters, pagination
GET    /api/products/[slug]             # Single product by slug
GET    /api/products/featured           # Homepage featured products
GET    /api/products/search?q=          # Search (proxied to Algolia)
POST   /api/products                    # Admin: create product
PUT    /api/products/[id]               # Admin: update product
PATCH  /api/products/[id]/inventory     # Admin: update stock
DELETE /api/products/[id]              # Admin: soft delete
```

#### Categories

```
GET    /api/categories                  # Full category tree
GET    /api/categories/[slug]           # Category + products
GET    /api/categories/[slug]/filters   # Available filter options
```

#### Cart

```
GET    /api/cart                        # Get cart (session or user)
POST   /api/cart/items                  # Add item
PUT    /api/cart/items/[id]             # Update quantity
DELETE /api/cart/items/[id]             # Remove item
POST   /api/cart/coupon                 # Apply coupon
DELETE /api/cart/coupon                 # Remove coupon
POST   /api/cart/merge                  # Merge guest cart on login
```

#### Orders

```
POST   /api/orders                      # Create order + Razorpay order
GET    /api/orders                      # User order history
GET    /api/orders/[id]                 # Order detail
POST   /api/orders/[id]/cancel          # Cancel order
GET    /api/orders/[id]/track           # Tracking status
```

#### Delivery

```
POST   /api/delivery/check-pincode      # Check serviceability
GET    /api/delivery/slots              # Available slots for PIN + date
GET    /api/delivery/estimates          # ETA for same-day
```

#### Subscriptions

```
POST   /api/subscriptions               # Create subscription
GET    /api/subscriptions               # User subscriptions
PUT    /api/subscriptions/[id]          # Modify basket / frequency
POST   /api/subscriptions/[id]/pause    # Pause
POST   /api/subscriptions/[id]/skip     # Skip next delivery
DELETE /api/subscriptions/[id]         # Cancel
```

#### Auth

```
POST   /api/auth/send-otp              # Send OTP to phone
POST   /api/auth/verify-otp            # Verify OTP → JWT
POST   /api/auth/refresh               # Refresh token
DELETE /api/auth/logout                # Logout
```

#### Webhooks

```
POST   /api/webhooks/razorpay           # Payment events
POST   /api/webhooks/inngest            # Background job callbacks
```

---

## 5. Search Architecture (Algolia)

### 5.1 Index Structure

**Index: `redb_products`**

```json
{
  "objectID": "prod_uuid",
  "name": "Alphonso Mango",
  "slug": "alphonso-mango",
  "description": "Premium GI-tagged Devgad Alphonso mangoes",
  "category": "Fresh Produce",
  "subcategory": "Fruits",
  "tags": ["seasonal", "premium", "gourmet"],
  "healthGoals": ["immunity", "kids-nutrition"],
  "price": 349,
  "mrp": 420,
  "inStock": true,
  "trustBadges": ["quality-checked", "traceable"],
  "rating": 4.7,
  "ratingCount": 128,
  "imageUrl": "https://cdn.redb.in/products/alphonso-mango.webp",
  "searchableAttributes": ["name", "description", "tags", "category"],
  "synonyms": ["hapus", "aamba", "aam"]
}
```

### 5.2 Algolia Configuration

- **Searchable Attributes:** name (priority 1), category (2), tags (3), description (4)
- **Facets:** category, subcategory, healthGoals, trustBadges, inStock, price (range)
- **Ranking:** textual → attributes → exact → proximity → words → filters → custom (rating × ratingCount)
- **Typo Tolerance:** enabled (minWordSizeForTypos: 4)
- **Synonyms:** pre-loaded Hindi ↔ English food synonyms (500+ pairs)
- **Distinct:** false (show all variants)
- **Highlighting:** name, description (max 50 chars)

---

## 6. Payment Integration (Razorpay)

### 6.1 One-Time Payment Flow

```
Client                   Server                   Razorpay
  │                         │                         │
  │── POST /api/orders ────►│                         │
  │                         │── Create Razorpay ─────►│
  │                         │   Order (amount, INR)    │
  │                         │◄─ { razorpay_order_id } ─│
  │◄─ { order_id, rpay_id }─│                         │
  │                         │                         │
  │── Open Razorpay SDK ────────────────────────────►│
  │◄─ Payment Success ───────────────────────────────│
  │   { payment_id, signature }                       │
  │                         │                         │
  │── POST /api/checkout ──►│                         │
  │   verify signature      │── Capture Payment ─────►│
  │                         │◄─ Confirmed ────────────│
  │◄─ Order Confirmed ──────│                         │
```

### 6.2 Subscription Payment (Razorpay Subscriptions)

- Create Plan (frequency, amount, interval)
- Create Subscription linked to Plan
- UPI Autopay mandate setup
- Webhook for `subscription.charged`, `subscription.halted`, `subscription.cancelled`
- Retry logic: 3 attempts over 48 hours before pause

### 6.3 Supported Payment Methods

- UPI (GPay, PhonePe, Paytm, BHIM)
- Credit / Debit Cards (Visa, Mastercard, Rupay, Amex)
- Net Banking (50+ banks)
- EMI (credit card + cardless via Bajaj, ZestMoney)
- Buy Now Pay Later (Simpl, LazyPay)
- Razorpay Wallet
- Red B Gift Cards (internal balance)

---

## 7. Image & Media Architecture

### 7.1 Cloudflare Images Pipeline

```
Upload (admin) → Cloudflare R2 (original)
              → Cloudflare Images (transforms on-demand)
                  variants:
                  - thumbnail: 200×200, WebP, quality 80
                  - card: 400×400, WebP, quality 85
                  - pdp: 800×800, WebP, quality 90
                  - hero: 1200×600, WebP, quality 90
                  - og: 1200×630, JPEG, quality 85
```

### 7.2 Next.js Image Component Usage

```tsx
<Image
  src={`https://imagedelivery.net/redb/${product.imageId}/card`}
  alt={product.name}
  width={400}
  height={400}
  loading="lazy"
  placeholder="blur"
  blurDataURL={product.blurHash}
/>
```

---

## 8. Caching Strategy

| Data                   | Cache       | TTL        | Invalidation           |
| ---------------------- | ----------- | ---------- | ---------------------- |
| Category tree          | Redis       | 1 hour     | On category update     |
| Product list (PLP)     | ISR + Redis | 60 seconds | On stock/price update  |
| Product detail (PDP)   | ISR         | 30 seconds | On product update      |
| Homepage featured      | ISR         | 5 minutes  | Manual or schedule     |
| Delivery slots         | Redis       | 2 minutes  | On booking             |
| User cart              | Redis       | 30 days    | On cart action         |
| Search results         | Algolia     | N/A        | On product update sync |
| Pincode serviceability | Redis       | 24 hours   | On config change       |

---

## 9. Performance Targets & Implementation

### 9.1 Core Web Vitals Targets

| Metric    | Target  | Strategy                                |
| --------- | ------- | --------------------------------------- |
| LCP       | < 2.5s  | SSR hero, priority image preload, CDN   |
| FID / INP | < 100ms | Code split, defer non-critical JS       |
| CLS       | < 0.1   | Explicit image dimensions, font preload |
| TTFB      | < 600ms | Edge SSR (Vercel), Redis cache          |

### 9.2 Bundle Optimisation

- Dynamic imports for cart drawer, search overlay, filter sheet
- Route-level code splitting (automatic in App Router)
- Tree-shaking Radix UI (import individual components)
- Preload critical fonts (Playfair Display, DM Sans)
- Defer Razorpay SDK until checkout page
- Critical CSS inlined via Tailwind's purge

### 9.3 Image Optimisation

- All product images served as WebP via Cloudflare Images
- `srcSet` with 3 breakpoints per image
- `loading="lazy"` for below-fold, `priority` for hero + first 4 product cards
- BlurHash placeholder on all product cards
- Avoid layout shift with explicit `width` and `height`

---

## 10. Security Requirements

### 10.1 Authentication & Authorisation

- Supabase Auth: phone OTP (SMS via Twilio), Google OAuth
- JWT with 1-hour expiry, refresh token (30 days) stored in httpOnly cookie
- Row Level Security (RLS) in Supabase for all user-scoped tables
- Admin routes protected by role middleware (`admin`, `super_admin`)
- CSRF protection on all mutating endpoints

### 10.2 API Security

- Rate limiting: Redis sliding window (per IP + per user)
- Input validation: Zod schemas on all POST/PUT endpoints
- SQL injection: prevented by Prisma parameterised queries
- XSS: Next.js escapes JSX output; DOMPurify for any rich text
- Razorpay signature verification on all webhook events
- HTTPS enforced; HSTS header set

### 10.3 Data Privacy (DPDPA 2023)

- Explicit consent for marketing communications
- User data export endpoint (GDPR-style, for compliance)
- Data deletion endpoint (account closure)
- Minimal PII in logs (mask phone, email, address)
- Supabase data residency: `ap-south-1` (Mumbai)

---

## 11. Background Jobs (Inngest)

| Job                   | Trigger                         | Action                                       |
| --------------------- | ------------------------------- | -------------------------------------------- |
| `subscription.renew`  | 48h before due date             | Charge Razorpay mandate, create order        |
| `subscription.failed` | Razorpay webhook: charge failed | Retry × 3, notify user on WhatsApp           |
| `order.dispatch`      | Admin marks dispatched          | WhatsApp + email: "Your order is on its way" |
| `order.delivered`     | Delivery partner webhook        | Request review via WhatsApp                  |
| `inventory.low`       | Stock < threshold               | Alert admin; mark product "Low Stock"        |
| `slot.release`        | 30 min before slot cutoff       | Release unclaimed reservations               |
| `search.sync`         | Product update webhook          | Re-index product in Algolia                  |
| `cart.abandonment`    | Cart inactive 2h                | Push notification / WhatsApp nudge           |
| `membership.expiry`   | 7 days before expiry            | Renewal reminder email                       |

---

## 12. Admin Panel Requirements

### 12.1 Admin Tech Stack

- Same Next.js app, `/admin` route group
- Protected by middleware (role: `admin`)
- Data tables: TanStack Table v8
- Charts: Recharts
- Forms: React Hook Form + Zod

### 12.2 Admin Modules

- **Dashboard:** orders today, revenue, top products, low stock alerts, pending deliveries
- **Products:** CRUD, image upload, inventory update, bulk import (CSV)
- **Categories:** tree management, SEO metadata
- **Orders:** list, filter, status update, refund initiation
- **Deliveries:** slot management, PIN code config, delivery partner assignment
- **Subscriptions:** active list, pause/cancel, revenue MRR view
- **Customers:** list, order history, credit management
- **Coupons:** create/edit/expire, usage analytics
- **Membership:** tier management, member list, revenue
- **Content:** banner management, featured product selection, recipe content
- **Analytics:** conversion funnel, revenue charts, product performance

---

## 13. Third-Party Integrations Summary

| Service                | Purpose                  | SDK / API                               |
| ---------------------- | ------------------------ | --------------------------------------- |
| Razorpay               | Payments + subscriptions | `razorpay` npm package                  |
| Supabase               | DB + Auth + Storage      | `@supabase/supabase-js`                 |
| Algolia                | Search                   | `algoliasearch` + `react-instantsearch` |
| Cloudflare R2 / Images | Media storage + CDN      | `@aws-sdk/client-s3` (R2 compatible)    |
| Inngest                | Background jobs          | `inngest` npm package                   |
| Resend                 | Transactional email      | `resend` npm package                    |
| Gupshup / Interakt     | WhatsApp notifications   | REST API                                |
| Sentry                 | Error monitoring         | `@sentry/nextjs`                        |
| PostHog                | Product analytics        | `posthog-js`                            |
| Google Maps            | Address autocomplete     | `@react-google-maps/api`                |
| Vercel                 | Hosting + edge           | Vercel CLI / Git integration            |

---

## 14. Environment Configuration

```env
# App
NEXT_PUBLIC_APP_URL=https://redb.in
NEXT_PUBLIC_APP_NAME="Red B"

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=

# Algolia
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=
ALGOLIA_ADMIN_KEY=

# Cloudflare
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH=

# WhatsApp (Gupshup)
GUPSHUP_API_KEY=
GUPSHUP_APP_NAME=

# Email (Resend)
RESEND_API_KEY=

# Inngest
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_KEY=

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=
```

---

## 15. Deployment Architecture

```
GitHub (main branch)
     │
     ▼
Vercel CI/CD Pipeline
     │
     ├── Preview Deployments (per PR)
     └── Production (redb.in)
              │
              ├── Edge Network (50+ regions)
              ├── Serverless Functions (api routes)
              └── Static Assets (CDN)

Supabase (ap-south-1)
     ├── PostgreSQL 16
     ├── Auth (SMS OTP)
     └── Realtime (order status)

Upstash Redis (ap-south-1)
     └── Cache + session + rate limiting
```
