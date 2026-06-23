# Web Flow — User Journey & Page Flow Document

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Date:** June 2026

---

## 1. Flow Overview

This document maps every user journey through the Red B website — from first visit to repeat purchase — including all decision points, states, and edge cases. All flows are designed mobile-first.

---

## 2. Site Map

```
redb.in/
│
├── /                               ← Homepage
│
├── /shop/                          ← Shop Landing (vertical chooser)
│   ├── /fresh-produce/             ← Fresh Produce PLP
│   │   ├── /fruits/
│   │   ├── /vegetables/
│   │   ├── /exotics/
│   │   ├── /organics/
│   │   ├── /cuts-and-mixes/
│   │   └── /salad-kits/
│   ├── /gourmet/                   ← Gourmet & Specialty PLP
│   │   ├── /cheese-and-dairy/
│   │   ├── /charcuterie/
│   │   ├── /oils-and-vinegars/
│   │   ├── /condiments/
│   │   ├── /pasta-and-grains/
│   │   └── /imported-pantry/
│   └── /bakery/                    ← Bakery & Artisan PLP
│       ├── /breads/
│       ├── /pastries/
│       ├── /cakes/
│       ├── /granola/
│       └── /jams-and-spreads/
│
├── /product/[slug]/                ← Product Detail Page
│
├── /health-goals/                  ← Health Goal Landing
│   ├── /high-protein/
│   ├── /gut-health/
│   ├── /immunity/
│   ├── /weight-management/
│   ├── /diabetic-friendly/
│   └── /kids-nutrition/
│
├── /recipes/                       ← Recipes & Bundles
│   └── /[slug]/                    ← Recipe detail + Shop Ingredients
│
├── /offers/                        ← Offers & Deals
│
├── /search?q=                      ← Search Results
│
├── /cart/                          ← Cart Page
│
├── /checkout/                      ← Checkout (multi-step)
│
├── /order-confirmed/[id]/          ← Order Confirmation
│
├── /account/                       ← Account Dashboard (auth required)
│   ├── /orders/
│   ├── /orders/[id]/
│   ├── /addresses/
│   ├── /wishlist/
│   ├── /subscription/
│   ├── /membership/
│   └── /wallet/
│
├── /membership/                    ← Red B Membership Landing
│
├── /our-promise/                   ← Brand trust page
├── /farm-to-door/
├── /artisan-partners/
├── /quality-standards/
│
├── /faq/
├── /contact/
├── /privacy-policy/
├── /terms/
└── /admin/                         ← Admin Panel (role-gated)
```

---

## 3. Core User Flows

---

### Flow 1 — First-Time Visitor → First Order

```
[Landing: Homepage]
         │
         ├── Reads hero + trust badges
         ├── Browses "Shop by Vertical" cards
         │         │
         │         ▼
         │   [Clicks "Fresh Produce" / "Gourmet" / "Bakery"]
         │         │
         │         ▼
         │   [Category PLP]
         │   Sees product grid → browses
         │         │
         │         ├─── Clicks product card image / name
         │         │         │
         │         │         ▼
         │         │   [Product Detail Page]
         │         │   Reads trust info → selects quantity
         │         │         │
         │         │         ▼
         │         │   [Clicks "Add to Cart"]
         │         │         │
         │         │         ▼
         │         │   [Cart Drawer Opens]
         │         │   Sees item + suggestions
         │         │         │
         │         │         ├── Clicks "Continue Shopping" → back to PLP
         │         │         └── Clicks "Go to Cart" → /cart
         │         │
         │         └─── Clicks "Add" button on product card
         │                   (skips PDP — fast add)
         │                   │
         │                   ▼
         │             [Cart Drawer Opens]
         │
         ▼
   [Cart Page: /cart]
   Reviews items → applies coupon (optional)
         │
         ▼
   [Clicks "Proceed to Checkout"]
         │
         ├── NOT LOGGED IN?
         │         │
         │         ▼
         │   [Login Modal: Phone OTP]
         │   Enter phone → OTP sent → OTP verified
         │   New user? → Account created silently
         │         │
         │         ▼
         │   [Back to Checkout Step 1]
         │
         └── LOGGED IN? → Straight to Checkout
                   │
                   ▼
         [Checkout Step 1: Address]
         Select saved address OR add new
                   │
                   ▼
         [Checkout Step 2: Delivery Mode & Slot]
         Choose: Same-Day / Scheduled / Subscribe
         Select available time slot
                   │
                   ▼
         [Checkout Step 3: Payment]
         Select payment method → Razorpay SDK opens
                   │
                   ├── Payment SUCCESS
                   │         │
                   │         ▼
                   │   [Order Confirmation: /order-confirmed/[id]]
                   │   Order ID + WhatsApp notification + Email
                   │
                   └── Payment FAILED
                             │
                             ▼
                       [Retry Payment modal]
                       Try different method → retry
```

---

### Flow 2 — Search-Led Discovery

```
[Any Page]
User taps / clicks Search bar
         │
         ▼
[Search Overlay Opens]
Shows: Recent searches | Popular searches | Category suggestions
         │
         ├── User types ≥ 3 chars
         │         │
         │         ▼
         │   [Live Autocomplete: Algolia]
         │   Shows: Products (image + price + Add btn)
         │          Categories
         │          Health Goals
         │         │
         │         ├── Clicks product suggestion → [PDP]
         │         ├── Clicks category suggestion → [PLP]
         │         └── Presses Enter / "See all results"
         │                   │
         │                   ▼
         │             [Search Results Page: /search?q=mango]
         │             Filters + sorted grid
         │
         └── Zero results
                   │
                   ▼
             [Empty State]
             "No results for 'xyz'"
             Shows: Popular categories | Daily Essentials
             "Need help?" → WhatsApp link
```

---

### Flow 3 — Health Goal Discovery

```
[Homepage: Health Goals section]
OR [Navigation: Health Goals menu]
         │
         ▼
[Health Goal Landing: /health-goals/immunity]
Shows: Hero + curated product grid + educational content
         │
         ├── Browses products → Add to cart (inline)
         └── Clicks product → PDP
```

---

### Flow 4 — Recipe-to-Cart Flow

```
[Homepage: Recipes & Bundles section]
OR [/recipes/ page]
         │
         ▼
[Recipe Card]
Shows: Recipe name + image + "Shop All Ingredients" CTA
         │
         ├── Clicks "Shop All Ingredients"
         │         │
         │         ▼
         │   [Bundle added to cart in one click]
         │   [Cart Drawer opens]
         │   User reviews, adjusts quantities → checkout
         │
         └── Clicks recipe card → [Recipe Detail Page]
                   Shows: Full recipe + ingredients list
                   Each ingredient: image + price + Add button
                   "Add All to Cart" CTA at top + bottom
```

---

### Flow 5 — Returning User / Reorder

```
[User returns to redb.in]
[Already logged in via cookie]
         │
         ▼
[Homepage]
Sees personalised modules (if implemented):
- "Your Essentials" (last ordered items)
- "Buy Again" carousel
         │
         ├── Clicks "Reorder" on order history item
         │         │
         │         ▼
         │   [Cart populated with previous order items]
         │   Adjusts as needed → Checkout (fast path — address + slot pre-selected)
         │
         └── Goes to /account/orders
                   Clicks "Reorder" on specific past order
                   Same cart → checkout flow
```

---

### Flow 6 — Subscription Setup Flow

```
[User browsing — sees "Subscribe & Save" badge on product]
OR [Cart: "Switch to Subscription" prompt]
OR [Account → Subscriptions]
OR [Red B Membership page]
         │
         ▼
[Subscription Setup Modal / Page]
Step 1: Build basket
        - Add/remove products
        - Choose quantities
        - See per-delivery total + savings %

Step 2: Choose frequency
        - Weekly / Bi-weekly / Monthly
        - Choose delivery day of week

Step 3: Choose payment
        - Set up UPI Autopay mandate (Razorpay)
        OR card-on-file

Step 4: Confirm
        - Summary: next delivery date, amount, items
        - "Start My Subscription" CTA
         │
         ▼
[First delivery scheduled]
[WhatsApp confirmation + mandate setup confirmation]
[Account → Subscription dashboard active]
```

---

### Flow 7 — Subscription Management

```
[Account → Subscription]
Shows: Active basket | Next delivery date | Amount | Status
         │
         ├── "Skip Next Delivery" → Confirm modal → Skipped (available ≥ 24h before)
         ├── "Pause Subscription" → Confirm modal → Paused
         ├── "Modify Basket" → Basket editor modal → Save
         ├── "Change Delivery Day" → Day picker → Save
         └── "Cancel Subscription"
                   │
                   ▼
             [Cancellation Flow]
             "Why are you cancelling?" (optional)
             "We'll miss you — pause instead?" (retention nudge)
             Confirm cancel → Cancelled (next billing cycle)
```

---

### Flow 8 — Guest Checkout (No Login Until Payment)

```
[Cart] → [Checkout]
User is not logged in
         │
         ▼
[Step 1: Phone Number Entry]
"Enter your phone to continue"
(No forced account creation barrier)
         │
         ▼
[OTP Verification]
OTP sent via SMS
         │
         ├── Verified → new user account created automatically
         └── Verified → existing user → cart merged with saved cart
                   │
                   ▼
             Continue to address step
```

---

### Flow 9 — Delivery Slot Unavailable Edge Case

```
[Checkout Step 2: Slot Selection]
All same-day slots are full for user's PIN
         │
         ▼
[UI shows: "Same-day slots full for today"]
Options presented:
  1. Schedule for tomorrow (next available slot shown)
  2. Choose a different date (date picker)
  3. Set up weekly subscription for guaranteed priority slots
         │
         └── User chooses option → continues checkout
```

---

### Flow 10 — PIN Code Not Serviceable

```
[Header: Location Selector]
OR [First visit: location prompt]
         │
User enters PIN code
         │
         ├── PIN serviceable → Location set → Continue shopping
         │
         └── PIN not serviceable
                   │
                   ▼
             [Not Serviceable State]
             "We don't deliver to [PIN] yet"
             "Enter your email — we'll notify you when we launch nearby"
             [Email capture form]
             "Explore our full catalogue while you wait →" (browse-only mode)
```

---

### Flow 11 — Admin: Product Management

```
[Admin: /admin/products]
         │
         ├── [Create Product]
         │   Form: name, slug, category, description, images (upload)
         │         price, MRP, inventory, trust badges, health goals
         │         variants (weight/size), nutrition info, storage tips
         │         sourcing story, SEO metadata
         │   Save → Prisma write → Inngest triggers Algolia sync
         │
         ├── [Update Inventory]
         │   Quick inline edit on product list
         │   Stock = 0 → product auto-marked Out of Stock
         │   Stock < threshold → low-stock alert triggered
         │
         └── [Manage Orders]
             Filter: pending | confirmed | dispatched | delivered | cancelled
             Assign delivery partner → Mark dispatched → Webhook → Customer notified
```

---

## 4. Navigation Behaviour

### 4.1 Desktop Header States

| State            | Behaviour                                                          |
| ---------------- | ------------------------------------------------------------------ |
| Default          | Logo + location + search bar (large) + Membership + Account + Cart |
| Scrolled > 80px  | Compact sticky header: Logo + mini search + Cart (icon + count)    |
| Location not set | Location pill shows "Set Location" — pulsing indicator             |
| Logged in        | Account icon shows avatar / initials                               |
| Cart has items   | Cart icon shows count badge (Burgundy bg, Cream text)              |

### 4.2 Mobile Navigation States

| State           | Behaviour                                                          |
| --------------- | ------------------------------------------------------------------ | ---- | ------ | ---- | ------- |
| Default         | Top: compact header (Logo + Cart) + Search bar below               |
| Bottom Nav      | Fixed: Home                                                        | Shop | Search | Cart | Account |
| Cart has items  | Cart tab shows item count badge                                    |
| Scrolled on PLP | Sticky filter/sort row appears below search                        |
| PDP             | Sticky "Add to Cart" bar at bottom replaces bottom nav temporarily |
| Checkout        | Bottom nav hidden; progress stepper takes full width               |

### 4.3 Cart Drawer (Desktop) / Cart Page (Mobile)

- Desktop: slides from right; max-width 420px; overlay dims background
- Mobile: navigates to `/cart` page for full experience
- Both show: item list, delivery mode toggle, coupon, totals, checkout CTA

---

## 5. Notification Flow

### Order Lifecycle Notifications

| Event                                | Channel          | Message                                 |
| ------------------------------------ | ---------------- | --------------------------------------- |
| Order placed                         | WhatsApp + Email | Order confirmed, ID, expected delivery  |
| Order confirmed by kitchen/warehouse | WhatsApp         | "Being prepared"                        |
| Order dispatched                     | WhatsApp + Push  | "On the way" + tracking link            |
| Order delivered                      | WhatsApp         | "Delivered — how was it?" + review link |
| Subscription renewal 24h before      | WhatsApp         | "Your basket arrives tomorrow"          |
| Subscription charged                 | WhatsApp + Email | Receipt                                 |
| Subscription charge failed           | WhatsApp + Email | Retry link                              |
| Membership expiry 7 days             | Email            | Renewal prompt                          |

---

## 6. Error States & Edge Cases

| Scenario                                       | UI Response                                                                  |
| ---------------------------------------------- | ---------------------------------------------------------------------------- |
| Item goes out of stock while in cart           | Cart shows "Out of stock" warning on item; CTA becomes "Remove and Checkout" |
| Price changes between add-to-cart and checkout | Toast notification + updated price shown in cart                             |
| Payment gateway timeout                        | "Something went wrong" modal; offer retry or different payment method        |
| OTP not received                               | "Resend OTP" after 30s countdown; option to "Call me instead"                |
| Address outside delivery zone                  | Inline error on address form; suggest nearest serviceable area               |
| Network offline                                | Persistent banner "You're offline"; cart state preserved locally             |
| Session expired mid-checkout                   | Save cart state → redirect to login → restore cart → return to checkout step |
| Razorpay webhook duplicate                     | Idempotency key on order creation; duplicate events ignored                  |

---

## 7. SEO URL Structure & Metadata Strategy

| Page             | URL Pattern                   | Title Pattern                              | Canonical             |
| ---------------- | ----------------------------- | ------------------------------------------ | --------------------- |
| Homepage         | `/`                           | `Red B — Premium Fresh Food Delivered`     | Self                  |
| Vertical landing | `/shop/fresh-produce/`        | `Fresh Fruits & Vegetables Online — Red B` | Self                  |
| Category PLP     | `/shop/fresh-produce/fruits/` | `Buy Fresh Fruits Online — Red B`          | Self                  |
| Product PDP      | `/product/alphonso-mango/`    | `Alphonso Mango — ₹349 — Red B`            | Self                  |
| Health goal      | `/health-goals/immunity/`     | `Immunity-Boosting Foods — Red B`          | Self                  |
| Search           | `/search?q=mango`             | `Search: mango — Red B`                    | `/search/` (no-index) |
| Account pages    | `/account/orders/`            | N/A                                        | No-index              |
| Admin            | `/admin/`                     | N/A                                        | No-index              |

### Structured Data (JSON-LD)

- **PDP:** `Product` schema (name, image, price, availability, rating)
- **PLP:** `BreadcrumbList` + `ItemList`
- **Homepage:** `Organization` + `WebSite` + `SiteNavigationElement`
- **Recipes:** `Recipe` schema (ingredients, time, nutrition)
- **FAQ pages:** `FAQPage` schema
- **Reviews:** `AggregateRating` on Product schema
