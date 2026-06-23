# Implementation Guide

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Date:** June 2026
**For:** Engineering Team — Sprint-by-Sprint Build Plan

---

## 1. Pre-Development Setup (Week 0)

### 1.1 Repository & Project Structure

```bash
# Initialise Next.js 15 project
npx create-next-app@latest redb \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd redb
```

**Final Directory Structure:**

```
redb/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── lib/                    # Shared utilities, clients
│   ├── hooks/                  # Custom React hooks
│   ├── stores/                 # Zustand stores
│   ├── types/                  # TypeScript type definitions
│   ├── styles/                 # Global CSS, design tokens
│   └── constants/              # App-level constants
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
├── public/
│   └── fonts/
├── .env.local
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### 1.2 Install All Dependencies

```bash
# Core
npm install @supabase/supabase-js @supabase/ssr
npm install prisma @prisma/client
npm install zustand @tanstack/react-query

# UI
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
  @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-accordion \
  @radix-ui/react-checkbox @radix-ui/react-select @radix-ui/react-slider
npm install lucide-react
npm install class-variance-authority clsx tailwind-merge
npm install framer-motion

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Search
npm install algoliasearch @algolia/autocomplete-js react-instantsearch

# Payment
npm install razorpay

# Images
npm install @plaiceholder/next sharp

# Email
npm install resend react-email @react-email/components

# Background Jobs
npm install inngest

# Monitoring
npm install @sentry/nextjs

# Analytics
npm install posthog-js

# Maps
npm install @react-google-maps/api

# Date utilities
npm install date-fns

# Dev dependencies
npm install -D @types/node prisma
```

### 1.3 Design Tokens Setup (Tailwind)

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6B1E2E",
          dark: "#4A1020",
          surface: "#8B2A3E",
        },
        cta: {
          DEFAULT: "#C9943A",
          hover: "#B07B28",
          active: "#9A6520",
        },
        accent: {
          crimson: "#C13545",
          terracotta: "#C4613A",
        },
        cream: {
          DEFAULT: "#FDF8F3",
          alt: "#F5EDE4",
          surface: "#FFFFFF",
        },
        border: {
          light: "#E8D9CB",
          DEFAULT: "#E8D9CB",
          strong: "#C8B09A",
        },
        text: {
          primary: "#1A0A08",
          secondary: "#5C4033",
          muted: "#9C7E72",
        },
        semantic: {
          success: "#2D6A4F",
          warning: "#D97706",
          error: "#9B1C1C",
          info: "#2D5986",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        label: ["Montserrat", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["64px", { lineHeight: "72px", letterSpacing: "-0.5px" }],
        h1: ["48px", { lineHeight: "56px", letterSpacing: "-0.3px" }],
        h2: ["36px", { lineHeight: "44px", letterSpacing: "-0.2px" }],
        h3: ["26px", { lineHeight: "34px" }],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        card: "0px 2px 10px rgba(26, 10, 8, 0.06)",
        raised: "0px 6px 20px rgba(26, 10, 8, 0.12)",
        float: "0px 12px 32px rgba(26, 10, 8, 0.15)",
        modal: "0px 24px 64px rgba(26, 10, 8, 0.25)",
        header: "0px 2px 12px rgba(26, 10, 8, 0.08)",
      },
      animation: {
        shimmer: "shimmer 1.8s infinite",
        "slide-in-right": "slideInRight 0.35s ease-out",
        "fade-in": "fadeIn 0.2s ease-in-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

### 1.4 Global CSS

```css
/* src/styles/globals.css */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg: #fdf8f3;
    /* (full token list from UIUXDesignBrief.md) */
  }

  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: var(--color-bg);
    color: #1a0a08;
    font-family: "DM Sans", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Skeleton shimmer base */
  .skeleton {
    background: linear-gradient(90deg, #f5ede4 25%, #e8d9cb 50%, #f5ede4 75%);
    background-size: 200% 100%;
    animation: shimmer 1.8s infinite;
  }
}

@layer utilities {
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .gold-underline {
    text-decoration: underline;
    text-decoration-color: #c9943a;
    text-underline-offset: 4px;
  }
}
```

### 1.5 Environment Setup

```bash
# .env.local — fill in from service dashboards
cp .env.example .env.local
```

### 1.6 Database Initialisation

```bash
# Init Prisma
npx prisma init

# Paste schema from BackendSchema.md into prisma/schema.prisma

# Generate client
npx prisma generate

# Run first migration
npx prisma migrate dev --name init

# Seed database
npx prisma db seed
```

---

## 2. Sprint Plan

**Sprint Duration:** 2 weeks per sprint
**Team:** 2 frontend engineers + 1 backend engineer + 1 designer reviewing each sprint

---

### Sprint 1 — Core Infrastructure & Design System (Weeks 1–2)

**Goal:** Foundation is solid before any feature work begins.

#### Backend Tasks

- [ ] Supabase project setup (region: ap-south-1, SMTP configured)
- [ ] Prisma schema deployed, migrations applied
- [ ] Supabase Auth configured: phone OTP (Twilio), Google OAuth
- [ ] Row Level Security policies applied to all user-scoped tables
- [ ] Upstash Redis instance connected
- [ ] Environment variables documented in `.env.example`
- [ ] Basic API health check: `GET /api/health` returns 200

#### Frontend Tasks

- [ ] Next.js 15 project bootstrapped with App Router
- [ ] Tailwind config with full design token system
- [ ] Global CSS with fonts, custom properties, skeleton animation
- [ ] Supabase client utility (`src/lib/supabase/client.ts`, `server.ts`)
- [ ] Prisma client singleton (`src/lib/db.ts`)
- [ ] Auth store (Zustand): `useAuthStore`
- [ ] Cart store (Zustand): `useCartStore` with localStorage persistence
- [ ] UI store: `useUIStore` (drawer states)
- [ ] TanStack Query provider setup
- [ ] Base UI components:
  - `Button` (primary, secondary, ghost, destructive)
  - `Input`, `Select`, `Checkbox`, `Label`
  - `Badge`, `Tag`
  - `Skeleton` (card and list variants)
  - `Toast` (success, error, info)
  - `Dialog` / `Modal`
  - `Sheet` (bottom sheet for mobile)

#### Infrastructure Tasks

- [ ] Vercel project linked to GitHub repo
- [ ] Preview deploy on PR configured
- [ ] `.env` variables set in Vercel dashboard
- [ ] Domain `redb.in` pointed to Vercel
- [ ] Sentry project initialised, `@sentry/nextjs` configured

**Sprint 1 Deliverable:** Design system components in Storybook or isolated demo page. Auth flow (OTP login) working end-to-end.

---

### Sprint 2 — Product Catalogue & Category Pages (Weeks 3–4)

**Goal:** Users can browse products by category.

#### Backend Tasks

- [ ] `GET /api/categories` — full tree
- [ ] `GET /api/categories/[slug]` — category + paginated products (offset, 20 per page)
- [ ] `GET /api/products/[slug]` — full product detail
- [ ] `GET /api/products/featured` — homepage featured products
- [ ] Algolia index created (`redb_products`)
- [ ] Product sync script: on product create/update → Algolia upsert (via Inngest)
- [ ] Admin: seed 50 products across 3 verticals for testing

#### Frontend Tasks

- [ ] `PromoBar` component
- [ ] `Header` component (desktop + mobile variants)
- [ ] `MobileBottomNav` component
- [ ] `Footer` component
- [ ] `CategoryCard` component
- [ ] `ProductCard` component (all states: default, hover, out-of-stock, loading skeleton)
- [ ] `TrustBadge` component
- [ ] `ProductGrid` component with skeleton loading
- [ ] `FilterSidebar` (desktop) + `FilterSheet` (mobile bottom sheet)
- [ ] Sort dropdown component
- [ ] `[category]/page.tsx` — PLP with SSR + ISR (60s revalidation)
- [ ] `[category]/[subcategory]/page.tsx`
- [ ] Breadcrumb component
- [ ] Infinite scroll / Load More for product grids
- [ ] `product/[slug]/page.tsx` — PDP with SSR + ISR (30s)
  - Image gallery with zoom
  - Variant selector
  - Quantity selector
  - Trust badge row
  - Tabs: Highlights / Storage / Sourcing / Nutrition
  - Structured data (Product JSON-LD)

**Sprint 2 Deliverable:** Users can browse `/shop/fresh-produce/fruits/` and view a product detail page with real data from the database.

---

### Sprint 3 — Search & Homepage (Weeks 5–6)

**Goal:** Users can search products and see the full homepage.

#### Backend Tasks

- [ ] `GET /api/search?q=` — proxy to Algolia with facets
- [ ] `GET /api/products/featured` — categorised featured sets for homepage sections
- [ ] Hindi ↔ English synonym list loaded into Algolia (500+ pairs)
- [ ] Pincode serviceability table seeded for pilot city
- [ ] `POST /api/delivery/check-pincode`

#### Frontend Tasks

- [ ] `SearchBar` component with `useInstantSearch` from react-instantsearch
- [ ] Search autocomplete dropdown (products + categories + health goals)
- [ ] `SearchResults` page (`/search?q=`)
- [ ] Empty search state component
- [ ] Full Homepage (`/`) with all sections:
  - [ ] `HeroSection`
  - [ ] `ShopByVertical` (3 hero cards)
  - [ ] `DailyEssentials` (fast-add horizontal scroll)
  - [ ] `HealthGoals` grid
  - [ ] `PromiseCards` (5 cards)
  - [ ] `GourmetSpotlight` (editorial dark section)
  - [ ] `ArtisanBakery` section
  - [ ] `RecipesBundles` section
  - [ ] `Testimonials` carousel
  - [ ] `MembershipCTA` section
  - [ ] Homepage ISR (5-min revalidation)
- [ ] Location selector modal (PIN entry + serviceability check)
- [ ] Location state persisted in cookie + Zustand

**Sprint 3 Deliverable:** Full homepage renders with real data. Search returns results within 300ms. Location gating works for out-of-service PINs.

---

### Sprint 4 — Cart & Auth (Weeks 7–8)

**Goal:** Users can add items to cart and authenticate.

#### Backend Tasks

- [ ] `POST /api/auth/send-otp` — Supabase Auth OTP
- [ ] `POST /api/auth/verify-otp` — verify + return session
- [ ] `POST /api/cart/merge` — merge guest cart on login
- [ ] `GET /api/cart` — server-side cart (for authenticated users)
- [ ] `POST /api/cart/items` — add item (with stock check)
- [ ] `PUT /api/cart/items/[id]` — update quantity
- [ ] `DELETE /api/cart/items/[id]` — remove
- [ ] `POST /api/cart/coupon` — validate + apply coupon
- [ ] Stock validation on add (return error if out of stock)

#### Frontend Tasks

- [ ] OTP Login modal component (phone input → OTP → verified)
- [ ] `CartDrawer` component (desktop)
- [ ] `/cart` page (mobile + desktop)
- [ ] `CartItem` component (quantity controls, remove)
- [ ] `CartSummary` (subtotal, delivery fee, discount, total)
- [ ] Free delivery progress bar
- [ ] `CartSuggestions` (frequently bought together)
- [ ] Coupon code input + validation feedback
- [ ] Add-to-cart animation on `ProductCard` button
- [ ] Quantity counter animation (button splits to `[−][N][+]`)
- [ ] Toast: "Added to cart" with cart drawer open option
- [ ] Cart item count badge in header updates in real-time
- [ ] Empty cart state

**Sprint 4 Deliverable:** Full authenticated user can add items, view cart, apply coupon, and has a cart that persists across sessions.

---

### Sprint 5 — Checkout & Payment (Weeks 9–10)

**Goal:** Users can complete a full order.

#### Backend Tasks

- [ ] Pincode → zone → available slots query
- [ ] `GET /api/delivery/slots` — available slots for PIN + date
- [ ] `POST /api/orders` — create order + Razorpay order
  - Validate cart items (price, stock)
  - Calculate totals (subtotal, tax, delivery, discounts)
  - Create Razorpay order via API
  - Return `razorpay_order_id`
- [ ] `POST /api/webhooks/razorpay` — handle payment events
  - `payment.captured` → update order status to CONFIRMED
  - `payment.failed` → update to PAYMENT_FAILED
  - Verify Razorpay webhook signature
- [ ] `POST /api/checkout` — verify signature + confirm order
- [ ] Inngest job: on order confirmed → send WhatsApp + email
- [ ] `GET /api/orders` — user order history
- [ ] `GET /api/orders/[id]` — single order detail

#### Frontend Tasks

- [ ] Checkout page (`/checkout`) — 5-step stepper
  - Step 1: Delivery address (saved + add new with Google Maps autocomplete)
  - Step 2: Delivery mode tabs + slot picker
  - Step 3: Payment — Razorpay SDK integration
  - Step 4: Order review
  - Step 5: Confirmation redirect
- [ ] `AddressForm` component with Google Maps autocomplete
- [ ] `SlotSelector` component (day picker + time grid)
- [ ] Razorpay SDK loader (dynamic import, checkout page only)
- [ ] `PaymentMethods` selector component
- [ ] Order confirmation page (`/order-confirmed/[id]`)
  - Order summary
  - WhatsApp share / track button
  - "Continue Shopping" CTA
- [ ] Slot unavailable edge case (suggest alternatives)
- [ ] Payment failed state + retry flow
- [ ] Address out-of-zone error handling
- [ ] Trust badges visible throughout checkout

**Sprint 5 Deliverable:** End-to-end order completion — from cart to Razorpay payment to confirmation page. WhatsApp notification fires on success.

---

### Sprint 6 — User Account & Order Management (Weeks 11–12)

**Goal:** Returning users can manage their account and reorder.

#### Backend Tasks

- [ ] `GET /api/account/profile` — user details
- [ ] `PUT /api/account/profile` — update name, email
- [ ] `GET /api/account/addresses` — saved addresses
- [ ] `POST /api/account/addresses` — add address
- [ ] `PUT /api/account/addresses/[id]` — edit
- [ ] `DELETE /api/account/addresses/[id]` — remove
- [ ] `GET /api/account/orders` — paginated order history
- [ ] `GET /api/account/orders/[id]` — detail + items
- [ ] `POST /api/account/orders/[id]/reorder` — add all items to cart
- [ ] `POST /api/account/orders/[id]/cancel` — cancel if eligible
- [ ] `GET /api/account/wishlist` — wishlist items
- [ ] `POST /api/account/wishlist` — add to wishlist
- [ ] `DELETE /api/account/wishlist/[productId]` — remove
- [ ] `GET /api/account/wallet` — balance + transactions

#### Frontend Tasks

- [ ] Account dashboard (`/account`)
- [ ] Orders page (`/account/orders`) — list with status filters
- [ ] Order detail page (`/account/orders/[id]`) — items, tracking, invoice
- [ ] "Reorder" functionality from order detail
- [ ] Addresses page (`/account/addresses`)
- [ ] Wishlist page (`/account/wishlist`)
- [ ] Wallet page (`/account/wallet`)
- [ ] Notification preferences page
- [ ] Auth middleware (redirect to login for account pages)
- [ ] Profile edit form

**Sprint 6 Deliverable:** Users can view order history, reorder, manage addresses, and wishlist.

---

### Sprint 7 — Subscriptions (Weeks 13–14)

**Goal:** Users can subscribe to weekly baskets.

#### Backend Tasks

- [ ] `POST /api/subscriptions` — create subscription + Razorpay Plan + Subscription
- [ ] `GET /api/subscriptions` — user's active subscriptions
- [ ] `GET /api/subscriptions/[id]` — subscription detail + items + delivery history
- [ ] `PUT /api/subscriptions/[id]` — modify basket or frequency
- [ ] `POST /api/subscriptions/[id]/pause` — pause subscription
- [ ] `POST /api/subscriptions/[id]/skip` — skip next delivery
- [ ] `DELETE /api/subscriptions/[id]` — cancel
- [ ] Inngest: `subscription.renew` job — 48h before due date
  - Create order from subscription items
  - Charge Razorpay mandate
  - Handle failure → retry × 3 → notify user
- [ ] Inngest: `subscription.reminder` job — WhatsApp 24h before delivery
- [ ] Webhook: `subscription.charged` → create order
- [ ] Webhook: `subscription.halted` → update status + notify

#### Frontend Tasks

- [ ] Subscription setup flow (basket builder → frequency → payment mandate)
- [ ] `BasketBuilder` component (add/remove/adjust items)
- [ ] Frequency + delivery day selector
- [ ] UPI Autopay mandate setup via Razorpay
- [ ] Subscription management page (`/account/subscription`)
  - Next delivery card (date, items, amount)
  - Modify basket
  - Skip / Pause buttons
  - Delivery history
  - Cancel flow (with retention nudge)
- [ ] "Subscribe & Save" toggle on Product Card and PDP
- [ ] Subscribe variant in Cart (switch order to subscription)
- [ ] Subscription confirmation page

**Sprint 7 Deliverable:** Users can set up a weekly basket subscription with UPI autopay mandate.

---

### Sprint 8 — Red B Membership, Reviews & SEO (Weeks 15–16)

**Goal:** Membership programme live, reviews working, SEO foundations complete.

#### Backend Tasks

- [ ] `POST /api/membership` — create membership subscription (Razorpay)
- [ ] Membership perks middleware (free delivery check, discount application)
- [ ] `POST /api/reviews` — create review (post-delivery only)
- [ ] `GET /api/reviews?productId=` — approved reviews
- [ ] Admin: `PATCH /api/admin/reviews/[id]` — approve / reject
- [ ] Materialized view refresh: `product_rating_summary` on review approve
- [ ] Algolia: update `rating` and `ratingCount` on product after review
- [ ] SEO: dynamic sitemap (`/sitemap.xml`) — categories + products + recipes
- [ ] SEO: `robots.txt` — block `/admin/`, `/account/`, `/api/`

#### Frontend Tasks

- [ ] Membership landing page (`/membership`) — benefits, pricing, CTA
- [ ] Membership status in header (Gold crown badge)
- [ ] Post-delivery review prompt (WhatsApp link → review form)
- [ ] Review form with star rating + text + photo upload
- [ ] `ReviewCard` component
- [ ] `ReviewSummary` (aggregate rating bar chart) on PDP
- [ ] JSON-LD structured data on all key pages:
  - Product (PDP)
  - BreadcrumbList (PLP + PDP)
  - Organization (homepage)
  - FAQPage (FAQ pages)
  - Recipe (recipe pages)
- [ ] Open Graph + Twitter Card meta on all pages
- [ ] Next.js `generateMetadata` on all dynamic routes

**Sprint 8 Deliverable:** Membership sign-up working. Reviews live on PDPs. Sitemaps and structured data verified in Google Search Console.

---

### Sprint 9 — Content Pages, Admin Panel & Polish (Weeks 17–18)

**Goal:** Admin can manage the store. Brand content pages live.

#### Admin Panel Tasks

- [ ] Admin middleware (role check)
- [ ] Dashboard: orders today, revenue chart, low stock alerts
- [ ] Products: CRUD with image upload to Cloudflare R2
- [ ] Inventory: quick-edit stock per product/variant
- [ ] Categories: tree management
- [ ] Orders: list, status update, refund initiation
- [ ] Delivery: slot management, pincode management
- [ ] Subscriptions: active list, MRR widget
- [ ] Customers: list + order history
- [ ] Coupons: create/edit/expire
- [ ] Banners: upload + schedule + position assignment
- [ ] Audit log viewer

#### Content Page Tasks

- [ ] `/our-promise` — brand trust page
- [ ] `/farm-to-door` — sourcing visual story (step-by-step timeline)
- [ ] `/artisan-partners` — baker/cheesemaker profiles
- [ ] `/quality-standards` — quality process page
- [ ] `/faq` — FAQ accordion with FAQ JSON-LD
- [ ] `/recipes` — recipe listing page
- [ ] `/recipes/[slug]` — recipe detail + ingredient add-to-cart
- [ ] `/health-goals/[slug]` — curated product collection per health goal

#### Polish Tasks

- [ ] PWA manifest (`manifest.json`) — add-to-home-screen support
- [ ] Service worker for offline cart state
- [ ] Push notification setup (`web-push`)
- [ ] A11y audit: keyboard navigation, ARIA labels, focus states
- [ ] Performance audit: Lighthouse ≥ 85 mobile
- [ ] Image optimisation: BlurHash on all product cards
- [ ] Error boundary components
- [ ] Loading states for all async UI (skeleton > spinner)
- [ ] 404 page (Burgundy themed)
- [ ] 500 page

**Sprint 9 Deliverable:** Admin can manage the full store. All brand content pages live. PWA installable.

---

### Sprint 10 — Load Testing, QA & Launch (Weeks 19–20)

#### QA Checklist

**Functional Testing:**

- [ ] Guest user full checkout flow (OTP → address → slot → payment → confirmation)
- [ ] Returning user fast checkout (saved address + slot pre-selected)
- [ ] Coupon: percent off, flat off, free delivery — all variants
- [ ] Coupon: expired coupon error; max use reached error; min order error
- [ ] Out-of-stock handling: blocked from checkout; cart warning
- [ ] Price change between cart and checkout: warning shown
- [ ] Same-day slot full: alternative suggested
- [ ] PIN not serviceable: email capture shown
- [ ] Subscription setup → first charge → delivery → skip → resume → cancel
- [ ] Razorpay: UPI, card, netbanking, EMI — all happy paths
- [ ] Payment failed → retry → success
- [ ] Payment failed → retry → different method
- [ ] Wishlist: add, remove, persist across sessions
- [ ] Admin: create product → appears on site within 60 seconds
- [ ] Admin: mark order dispatched → WhatsApp fires
- [ ] Review submitted → admin approval → appears on PDP → rating updates

**Performance Testing:**

- [ ] Lighthouse Mobile ≥ 85 (Performance, Accessibility, SEO, Best Practices)
- [ ] LCP < 2.5s on 4G emulation
- [ ] CLS < 0.1 on all pages
- [ ] Search response < 300ms (Algolia)
- [ ] Cart actions optimistic UI (no perceived lag)

**Load Testing (k6):**

- [ ] 500 concurrent homepage requests — p95 response < 500ms
- [ ] 100 concurrent search requests — p95 < 400ms
- [ ] 50 concurrent checkout initiations — no race conditions on slot booking
- [ ] Subscription renewal job: 1000 subscriptions renewing simultaneously

**Security Checklist:**

- [ ] All user-scoped API routes return 401 for unauthenticated requests
- [ ] Razorpay webhook signature verification tested
- [ ] Rate limiting tested: 101st request in 60s returns 429
- [ ] Admin routes: 403 for non-admin role
- [ ] No PII in Sentry error payloads (phone, address masked)
- [ ] HTTPS enforced, HSTS header set
- [ ] Content Security Policy header configured

#### Launch Sequence

```
Day -7: Final QA on staging (redb-staging.vercel.app)
Day -3: Performance audit, fix critical issues
Day -2: Seed production database with full catalogue
Day -1: DNS cutover to redb.in (low TTL set 24h prior)
Day 0:  Go live — monitor Sentry, Vercel logs, Supabase
Day +1: Address any critical bugs
Day +7: First analytics review (PostHog funnel analysis)
```

---

## 3. Key Implementation Patterns

### 3.1 Optimistic Cart Updates

```typescript
// hooks/useCart.ts
export function useAddToCart() {
  const queryClient = useQueryClient();
  const { addItem } = useCartStore();

  return useMutation({
    mutationFn: (item: AddToCartPayload) =>
      fetch("/api/cart/items", {
        method: "POST",
        body: JSON.stringify(item),
      }).then((r) => r.json()),

    // Optimistic update — UI responds instantly
    onMutate: async (item) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });
      const prev = queryClient.getQueryData(["cart"]);
      addItem(item.product, item.quantity); // local state update
      return { prev };
    },

    onError: (err, item, ctx) => {
      // Rollback on error
      queryClient.setQueryData(["cart"], ctx?.prev);
      toast.error("Could not add item. Please try again.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
}
```

### 3.2 ISR + On-Demand Revalidation

```typescript
// app/(shop)/[category]/page.tsx
export const revalidate = 60; // ISR: 60 second background revalidation

// Trigger on-demand revalidation from admin on product update:
// app/api/admin/revalidate/route.ts
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const { path, secret } = await request.json();
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }
  revalidatePath(path);
  return Response.json({ revalidated: true });
}
```

### 3.3 Razorpay Integration

```typescript
// lib/razorpay.ts
import Razorpay from "razorpay";
import crypto from "crypto";

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string,
): boolean {
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");
  return expected === signature;
}

// Client: open Razorpay checkout
export function openRazorpayCheckout(options: RazorpayOptions) {
  return new Promise<RazorpayPaymentResponse>((resolve, reject) => {
    const rzp = new window.Razorpay({
      ...options,
      handler: resolve,
    });
    rzp.on("payment.failed", reject);
    rzp.open();
  });
}
```

### 3.4 Algolia Product Sync (Inngest)

```typescript
// inngest/functions/syncProduct.ts
import { inngest } from "@/lib/inngest";
import { algoliaIndex } from "@/lib/algolia";
import { db } from "@/lib/db";

export const syncProductToAlgolia = inngest.createFunction(
  { id: "sync-product-algolia" },
  { event: "product/updated" },
  async ({ event }) => {
    const product = await db.product.findUnique({
      where: { id: event.data.productId },
      include: {
        category: true,
        trustBadges: { include: { trustBadge: true } },
        healthGoals: { include: { healthGoal: true } },
        images: { where: { isPrimary: true } },
      },
    });

    if (!product || !product.isActive) {
      await algoliaIndex.deleteObject(event.data.productId);
      return { deleted: true };
    }

    await algoliaIndex.saveObject({
      objectID: product.id,
      name: product.name,
      slug: product.slug,
      description: product.shortDesc || product.description.slice(0, 200),
      category: product.category.name,
      subcategorySlug: product.category.slug,
      vertical: product.vertical,
      price: Number(product.basePrice),
      mrp: Number(product.mrp),
      inStock: product.stockStatus === "IN_STOCK",
      trustBadges: product.trustBadges.map((tb) => tb.trustBadge.name),
      healthGoals: product.healthGoals.map((hg) => hg.healthGoal.name),
      imageUrl: product.images[0]?.cloudflareId
        ? `https://imagedelivery.net/${process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH}/${product.images[0].cloudflareId}/card`
        : null,
      isFeatured: product.isFeatured,
    });

    return { synced: true };
  },
);
```

### 3.5 Subscription Renewal Job (Inngest)

```typescript
// inngest/functions/renewSubscription.ts
export const renewSubscription = inngest.createFunction(
  { id: "renew-subscription", concurrency: { limit: 10 } },
  { cron: "0 6 * * *" }, // runs at 6 AM daily
  async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dueSubscriptions = await db.subscription.findMany({
      where: {
        status: "ACTIVE",
        nextDeliveryDate: {
          gte: startOfDay(tomorrow),
          lte: endOfDay(tomorrow),
        },
      },
      include: { items: { include: { product: true, variant: true } }, user: true },
    });

    for (const sub of dueSubscriptions) {
      await inngest.send({
        name: "subscription/charge",
        data: { subscriptionId: sub.id },
      });
    }
  },
);
```

---

## 4. Monitoring & Observability

### Error Tracking (Sentry)

```typescript
// sentry.client.config.ts
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1, // 10% of transactions
  beforeSend(event) {
    // Scrub PII before sending
    if (event.user?.email) event.user.email = "[redacted]";
    return event;
  },
});
```

### Key Alerts to Configure

- Error rate > 1% on `/api/checkout` → PagerDuty
- Razorpay webhook failures > 3 in 5 min → Slack alert
- Subscription renewal failure rate > 5% → Email to ops team
- Redis memory > 80% → Scale alert
- Database connections > 80 → Alert

### PostHog Funnels to Set Up

1. Homepage → Add to Cart → Checkout Start → Payment → Order Confirmed
2. Search → Product View → Add to Cart
3. Homepage → Subscribe CTA → Subscription Created
4. Login Modal → OTP Verify → Continue Checkout
5. PDP → Add to Wishlist → Return → Add to Cart

---

## 5. Post-Launch Roadmap

### Month 2–3

- Native iOS + Android apps (React Native)
- Personalisation: "Recommended for you" (collaborative filtering)
- Gift cards purchasable on site
- Corporate gifting portal

### Month 4–6

- Multi-city expansion (add new delivery zones via admin)
- Loyalty points programme (earn on orders, redeem in cart)
- Live video commerce integration
- WhatsApp ordering bot ("Hi" → catalogue → order)

### Month 7–12

- Artisan Partner portal (partners manage their own product pages)
- Subscription box builder (curated monthly surprise boxes)
- B2B / corporate pantry portal
- International delivery (Singapore, UAE) for specific gourmet SKUs
