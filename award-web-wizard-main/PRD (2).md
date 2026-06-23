# PRD — Product Requirements Document

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Status:** Approved for Development | **Date:** June 2026
**Author:** Product Team | **Stakeholders:** Engineering, Design, Business

---

## 1. Executive Summary

Red B is a premium Indian e-commerce platform delivering fresh fruits and vegetables, gourmet / specialty food, and bakery & artisan products directly to urban households. The product combines the speed and convenience of hyperlocal grocery delivery with the aesthetic and trust of a luxury food brand. Red B competes against Pluckk, Natures Basket, and premium D2C food brands by offering a unified, curated shopping experience across three premium food verticals — fresh produce, gourmet specialties, and artisan bakery — all under one brand identity rooted in Deep Burgundy, Cream, and Gold.

---

## 2. Problem Statement

Urban Indian food buyers who care about quality face a fragmented experience: they use one app for vegetables, another for gourmet cheese, another for artisan bread. No platform today unifies premium fresh produce + gourmet + artisan bakery into a single, beautifully designed, trust-first shopping experience with flexible delivery (same-day, scheduled, and subscription). Red B exists to fill this gap.

**Pain Points Addressed:**

- No single premium food destination covering fresh + gourmet + artisan in India
- Existing platforms feel like utility apps, not premium brand experiences
- Trust around freshness, sourcing, and quality is communicated poorly
- Flexible delivery (now / later / weekly) is not available in one place
- Mobile checkout for premium food feels slow and clunky

---

## 3. Vision & Goals

### Vision

> "Red B is India's most trusted premium food destination — where quality is never compromised, every product has a story, and every delivery feels like a gift to yourself."

### Business Goals

| Goal         | Metric                 | Target (Year 1)           |
| ------------ | ---------------------- | ------------------------- |
| Revenue      | GMV                    | ₹5 Cr / month by Month 12 |
| Retention    | Repeat purchase rate   | ≥ 45% within 30 days      |
| Conversion   | Add-to-cart → Order    | ≥ 18%                     |
| Subscription | Weekly basket signups  | 10,000 active subscribers |
| Trust        | Money-back claims      | < 2% of orders            |
| Mobile       | Mobile share of orders | ≥ 70%                     |

### UX Goals

- First-time visitor understands the brand and adds to cart within 60 seconds
- Product discovery covers browse, search, lifestyle need, and recipe paths
- Checkout completes in under 3 minutes for returning users
- Trust signals appear at every buying moment, not just the About page

---

## 4. Target Users

### 4.1 Primary Personas

**Persona A — The Premium Household Buyer**

- Age: 32–48, married, 2–3 family members
- Location: Tier-1 Indian metros (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune)
- Income: ₹15L+ annual household income
- Behaviour: Buys fresh produce weekly, occasional gourmet for dinner parties, artisan bread for weekends
- Needs: Freshness trust, sourcing transparency, fast reorder
- Device: iPhone / premium Android, 80% mobile

**Persona B — The Health-Conscious Professional**

- Age: 26–38, single or DINK
- Location: Urban metro, often renting in premium areas
- Income: ₹8L–20L
- Behaviour: Orders 2–3x per week, focuses on clean-label, organic, high-protein
- Needs: Health goal filtering, nutrition info, quick add-to-cart
- Device: 90% mobile, uses apps heavily

**Persona C — The Gourmet Entertainer**

- Age: 35–55, hosts dinner parties, food-curious
- Location: South Mumbai, South Delhi, Koramangala, Banjara Hills
- Income: ₹25L+
- Behaviour: Buys imported cheese, specialty oils, artisan charcuterie, sourdough
- Needs: Curated discovery, product stories, scheduled delivery for events
- Device: Mix of desktop and mobile

**Persona D — The Subscription Household**

- Buys a fixed weekly basket of essentials (produce + bread + 1–2 gourmet items)
- Values predictability, saving, and no decision fatigue
- Needs: Easy basket management, auto-payment, easy skip/pause

### 4.2 Non-Target Users

- Price-sensitive commodity grocery buyers (Blinkit / Zepto audience)
- B2B / bulk restaurant buyers (separate product)
- Users outside serviceable PIN codes

---

## 5. Product Scope

### 5.1 In Scope — V1

**Platform:** Web (desktop + mobile browser), Progressive Web App (PWA)

**Verticals:**

- Fresh Fruits & Vegetables (incl. exotics, organics, cuts & mixes)
- Gourmet & Specialty Food (cheese, charcuterie, oils, condiments, imported goods)
- Bakery & Artisan Products (sourdough, croissants, cakes, granola, jams)

**Core Features:**

- Product catalogue with rich filtering and sorting
- Global search with autocomplete and synonym support
- Product detail pages with sourcing, nutrition, storage, and recipe content
- Cart with smart suggestions and cross-sell
- 3 delivery modes: Same-day slot, Scheduled (date + time), Weekly Subscription
- User accounts: addresses, order history, reorder, wishlist
- Promo codes, gift cards, referral credits
- Red B Membership (premium subscription with free delivery + early access)
- Trust content: Farm to Door, Artisan Stories, Quality Pledge pages
- Ratings and reviews
- WhatsApp support integration
- Razorpay payment gateway (UPI, Cards, Netbanking, EMI, Pay Later)
- Admin panel for product, order, inventory, delivery management

**Mobile PWA:**

- Bottom navigation
- Sticky search + cart bar
- Add-to-home-screen prompt
- Push notifications for order updates

### 5.2 Out of Scope — V1

- Native iOS / Android apps (Phase 2)
- B2B / restaurant portal
- Live video commerce
- International shipping
- Third-party seller marketplace

---

## 6. Information Architecture

### 6.1 Primary Navigation

```
Home
Shop
  ├── Fresh Produce
  │     ├── Fruits
  │     ├── Vegetables
  │     ├── Exotics & Imports
  │     ├── Organics
  │     ├── Cuts & Mixes
  │     └── Salad Kits
  ├── Gourmet & Specialty
  │     ├── Cheese & Dairy
  │     ├── Charcuterie & Deli
  │     ├── Oils & Vinegars
  │     ├── Condiments & Sauces
  │     ├── Pasta & Grains
  │     └── Imported Pantry
  └── Bakery & Artisan
        ├── Sourdough & Breads
        ├── Croissants & Pastries
        ├── Cakes & Desserts
        ├── Granola & Muesli
        └── Jams & Spreads

Health Goals
  ├── High Protein
  ├── Gut Health
  ├── Immunity Support
  ├── Weight Management
  ├── Diabetic Friendly
  └── Kids Nutrition

Recipes & Bundles
Offers
Red B Membership
```

### 6.2 Utility Navigation

- Location / PIN selector
- Search
- Account (Login / Register / Orders / Wishlist)
- Cart
- WhatsApp Help

### 6.3 Footer Navigation

- About Red B
- Our Promise
- Sourcing & Farmers
- Quality Standards
- Artisan Partners
- Red B Membership
- Gift Cards
- Blog / Recipes
- FAQs
- Delivery Info
- Return & Refund Policy
- Privacy Policy
- Terms & Conditions
- Contact Us
- Careers

---

## 7. Page Requirements

### 7.1 Homepage

**Purpose:** Convert first-time visitors and re-engage returning users.

**Required Sections (in order):**

1. Promotional Bar — rotating offers / delivery promise
2. Header — logo, location, search, membership, account, cart
3. Hero — headline + subheadline + dual CTA + trust badges + premium visual
4. Shop by Vertical — 3 hero cards (Fresh / Gourmet / Bakery) + quick sub-categories
5. Daily Essentials — fast-add product row (most ordered items)
6. Health Goals — lifestyle-need browsing modules
7. The Red B Promise — 5 brand promise cards (sourcing, quality, freshness, artisan, guarantee)
8. Gourmet Spotlight — curated editorial feature on 3–4 hero gourmet products
9. Artisan Bakery — featured bakers + buy-now cards
10. Recipes & Bundles — content-to-commerce cards with "Shop Ingredients" CTA
11. Testimonials — verified customer reviews
12. Red B Membership CTA
13. App / PWA Download prompt
14. Footer

**Homepage Copy Direction:**

- Hero Headline: _"Food worth caring about, delivered to your door."_
- Hero Sub: _"Premium fresh produce, artisan bakery, and gourmet specialties — quality-checked and delivered fresh."_
- CTA Primary: "Start Shopping"
- CTA Secondary: "Explore Membership"

### 7.2 Product Listing Page (PLP / Category Page)

- Category hero with short benefit-led description
- Breadcrumb navigation
- Desktop: left sidebar filters + top sort row + product grid
- Mobile: sticky search + horizontal category chips + bottom-sheet filters + 2-column grid + sticky cart bar
- Filters: Category, Sub-category, Health Goal, Price Range, Dietary (Vegan/Gluten-Free/Organic), Quality Tag, Availability, Delivery Mode, Rating
- Sort: Popularity, Price (asc/desc), Discount, Rating, Newest
- Pagination: infinite scroll with "Load more" anchor for SEO

### 7.3 Product Detail Page (PDP)

- Image gallery (min 3 images + zoom)
- Product name + trust badge
- Price (MRP + selling price + savings %)
- Quantity selector + weight/size variants
- Delivery mode selector (same-day / scheduled / subscribe & save)
- Add to Cart (sticky on mobile)
- Product highlights (bullet points, max 5)
- Freshness / storage information
- Sourcing story (farm or artisan partner)
- Nutrition / ingredients table
- Preparation / usage ideas
- Frequently Bought Together
- Similar Products carousel
- Customer Reviews (with photos)

### 7.4 Search

- Autocomplete suggestions (min 3 chars)
- Recent searches (stored locally)
- Popular searches
- Category-level suggestions
- Product suggestions with image + price + Add button
- Phonetic / synonym support (palak/spinach, paneer/cottage cheese, maida/all-purpose flour)
- Zero-result state: show popular categories + support link

### 7.5 Cart

- Line items with image, name, quantity controls, price
- Delivery mode per item or per order
- Coupon / promo code field
- Referral credit application
- Order summary (subtotal, delivery fee, tax, total)
- Free delivery progress bar
- Smart suggestions (frequently bought with, "complete the recipe")
- Trust note: "Not satisfied? Get a full refund."
- Checkout CTA

### 7.6 Checkout (5-step)

1. Phone OTP login / register
2. Delivery address (saved addresses + add new with Google Maps)
3. Delivery mode & slot selection (same-day / scheduled / subscription setup)
4. Payment (Razorpay — UPI, card, netbanking, EMI, Pay Later, wallet, gift card)
5. Order review + place order

**Checkout Rules:**

- No surprise fees introduced after step 2
- Show delivery time clearly on every step
- Trust badges visible throughout
- WhatsApp support link on every step
- Address validation by PIN code serviceability

### 7.7 User Account Pages

- Dashboard: recent orders, reorder, active subscription
- Order History + Order Tracking
- Saved Addresses
- Wishlist
- Subscription Management (pause / skip / cancel / modify basket)
- Red B Membership status
- Wallet & Credits
- Reviews & Ratings
- Notification Preferences

### 7.8 Trust & Brand Pages

- Our Promise
- Farm to Door (sourcing process visual story)
- Artisan Partners (baker / cheesemaker spotlights)
- Quality Standards (ozone wash, cold chain, FSSAI compliance)
- Sustainability pledge

---

## 8. Delivery Model Requirements

### 8.1 Same-Day / Next-Slot

- Slots: Morning (7–10am), Midday (11am–2pm), Evening (4–7pm), Night (8–10pm)
- Cutoff: 2 hours before slot start
- Availability: Based on PIN code + inventory + rider availability
- Display: Show available slots at cart and checkout stage

### 8.2 Scheduled Delivery

- User selects date (up to 7 days ahead) + preferred time slot
- Confirmation sent via WhatsApp + email
- Edit/cancel allowed up to 4 hours before slot

### 8.3 Subscription — Weekly Basket

- User builds a recurring basket
- Frequency: Weekly, Bi-weekly, or Monthly
- Auto-payment via saved card / UPI mandate
- Skip / pause / modify at least 24 hours before next delivery
- Dashboard widget for next delivery + basket overview
- Loyalty discount: 5–10% off basket price for subscribers

---

## 9. Non-Functional Requirements

| Requirement              | Target                                               |
| ------------------------ | ---------------------------------------------------- |
| Page Load (LCP)          | < 2.5 seconds on 4G mobile                           |
| Time to Interactive      | < 3.5 seconds                                        |
| Cumulative Layout Shift  | < 0.1                                                |
| Search Latency           | < 300ms for results                                  |
| Uptime                   | 99.9%                                                |
| Concurrent Users         | 10,000 (V1), 100,000 (V2)                            |
| Mobile Performance Score | ≥ 85 (Lighthouse)                                    |
| Accessibility            | WCAG AA                                              |
| Security                 | PCI-DSS via Razorpay, HTTPS everywhere, OWASP Top 10 |
| Data Privacy             | DPDPA 2023 compliant                                 |

---

## 10. Success Metrics & KPIs

### Acquisition

- Organic sessions from SEO (category pages, recipe content)
- Paid conversion rate from Google Shopping
- Referral programme conversions

### Activation

- % visitors who add to cart (target: ≥ 30%)
- % visitors who complete first order (target: ≥ 8%)
- Time from landing to first add-to-cart (target: < 90 seconds)

### Retention

- 30-day repeat purchase rate (target: ≥ 45%)
- Subscription active rate (target: ≥ 15% of buyers)
- Email / WhatsApp re-engagement rate

### Revenue

- Average Order Value (target: ₹850+)
- Revenue per visitor
- Membership revenue contribution

### Quality

- Refund / complaint rate (target: < 2%)
- Delivery on-time rate (target: ≥ 95%)
- Product review average (target: ≥ 4.3 / 5)

---

## 11. Risks & Mitigations

| Risk                                      | Probability | Impact | Mitigation                                                              |
| ----------------------------------------- | ----------- | ------ | ----------------------------------------------------------------------- |
| Cold chain failure for gourmet items      | Medium      | High   | Partner with certified cold-chain logistics; real-time temp monitoring  |
| Low same-day slot availability            | Medium      | High   | Inventory buffer per PIN; cap same-day orders per slot                  |
| Cart abandonment at delivery fee reveal   | High        | Medium | Show delivery fee estimate from homepage; free delivery above ₹599      |
| Competition from quick-commerce (Blinkit) | High        | Medium | Differentiate on quality, curation, and artisan angle — not speed alone |
| Subscription churn                        | Medium      | Medium | Easy pause/skip; no lock-in; proactive basket suggestion emails         |
| Artisan stock unpredictability            | High        | Medium | 48-hour lead time buffer; pre-order option for bakery                   |

---

## 12. Launch Phases

### Phase 1 — MVP (Months 1–3)

- Core catalogue: Fresh Produce + 20 Gourmet SKUs + 10 Bakery SKUs
- Scheduled + same-day delivery
- Razorpay payments
- Basic user accounts
- 3 PIN codes (pilot city)

### Phase 2 — Growth (Months 4–6)

- Full gourmet + bakery catalogue
- Subscription baskets
- Red B Membership launch
- Search improvements (synonyms, voice)
- Recipe + bundle commerce
- WhatsApp order updates

### Phase 3 — Scale (Months 7–12)

- Native iOS + Android apps
- Multi-city expansion
- Loyalty programme
- Gift cards + corporate gifting
- Artisan Partner storefront pages
- Personalisation engine
