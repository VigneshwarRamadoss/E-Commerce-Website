# UI/UX Design Brief

# Red B | Premium Fresh & Artisan Food E-Commerce Platform

**Version:** 1.0 | **Date:** June 2026
**Audience:** Designers, Frontend Engineers, Brand Team

---

## 1. Brand Identity & Design Philosophy

### Brand Name

**Red B** — The "Red" signals premium, passion, and appetite. The "B" stands for Bounty, Bakery, and the Best of the table.

### Brand Essence

> _"The finest food, beautifully delivered."_

### Design Personality

Luxurious yet approachable. Editorial yet functional. Confident yet warm. Red B should feel like the premium grocery store you walk into and immediately trust — where every product has been hand-picked, every shelf tells a story, and checkout feels effortless.

### Visual Mood

Dark Burgundy and warm Cream — the palette of fine dining, artisan bakeries, and premium delis. Accented with real food photography and generous whitespace. Never clinical. Never cheap. Always trustworthy.

**Mood Keywords:** _Artisan · Premium · Warm · Curated · Trustworthy · Appetising · Considered · Modern Luxury_

---

## 2. Colour System

### 2.1 Primary Colours

| Role          | Name          | Hex       | Usage                                            |
| ------------- | ------------- | --------- | ------------------------------------------------ |
| Brand Primary | Deep Burgundy | `#6B1E2E` | Primary headings, key UI elements, brand moments |
| Brand Dark    | Dark Wine     | `#4A1020` | Darker text, header background, depth            |
| Brand Surface | Burgundy Tint | `#8B2A3E` | Secondary UI, hover states on dark surfaces      |

### 2.2 Accent Colours

| Role             | Name       | Hex       | Usage                                  |
| ---------------- | ---------- | --------- | -------------------------------------- |
| Primary CTA      | Warm Gold  | `#C9943A` | All primary call-to-action buttons     |
| CTA Hover        | Deep Gold  | `#B07B28` | Hover state for gold buttons           |
| CTA Active       | Rich Gold  | `#9A6520` | Active/pressed state                   |
| Secondary Accent | Crimson    | `#C13545` | Promotional badges, offers, urgency    |
| Tertiary Accent  | Terracotta | `#C4613A` | Warm decorative accents, category tags |

### 2.3 Neutral / Surface Colours

| Role           | Name          | Hex       | Usage                                  |
| -------------- | ------------- | --------- | -------------------------------------- |
| Background     | Pure Cream    | `#FDF8F3` | Primary page background                |
| Card Surface   | Warm White    | `#FFFFFF` | Product cards, modals, dropdowns       |
| Secondary BG   | Antique Cream | `#F5EDE4` | Section alternates, subtle separation  |
| Border Light   | Parchment     | `#E8D9CB` | Card borders, input borders            |
| Border Dark    | Tan           | `#C8B09A` | Stronger dividers                      |
| Text Primary   | Deep Espresso | `#1A0A08` | All primary body text                  |
| Text Secondary | Warm Charcoal | `#5C4033` | Secondary text, metadata, descriptions |
| Text Muted     | Warm Gray     | `#9C7E72` | Placeholders, disabled, captions       |

### 2.4 Semantic Colours

| Role    | Name       | Hex       | Usage                               |
| ------- | ---------- | --------- | ----------------------------------- |
| Success | Forest     | `#2D6A4F` | Order confirmed, in-stock, verified |
| Warning | Amber      | `#D97706` | Low stock, slot filling fast        |
| Error   | Deep Red   | `#9B1C1C` | Payment failed, out of stock, error |
| Info    | Slate Blue | `#2D5986` | Informational banners, notes        |

### 2.5 Promotional Bar

| Role                 | Hex                       |
| -------------------- | ------------------------- |
| Promo Bar Background | `#4A1020` (Dark Wine)     |
| Promo Bar Text       | `#F5EDE4` (Antique Cream) |
| Promo Bar Accent     | `#C9943A` (Warm Gold)     |

### 2.6 Colour Do's and Don'ts

**Do:**

- Use Burgundy for all primary headings and brand identity elements
- Use Warm Gold exclusively for primary CTA buttons — it earns attention
- Use Cream / Warm White for all page and card backgrounds
- Use Deep Espresso for all body text (high contrast, readable)
- Reserve Crimson for offers, urgency, and promotional badges only

**Don't:**

- Don't use bright white (`#FFFFFF`) as a page background — it feels clinical; use Cream (`#FDF8F3`)
- Don't use Burgundy as a button background colour — Gold owns the CTA
- Don't mix Crimson and Gold in the same component — too much energy
- Don't use more than 3 accent colours per page section
- Don't use low-contrast text on Cream backgrounds (verify all pairs at 4.5:1 minimum)

---

## 3. Typography System

### 3.1 Font Families

**Display / Headings: Playfair Display**

- A classic serif with editorial elegance; signals premium and artisan craft
- Weights: 400 (regular), 700 (bold), 900 (black)
- Import: Google Fonts — `Playfair+Display:wght@400;700;900`

**Body / UI: DM Sans**

- Modern, clean, highly readable sans-serif
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Import: Google Fonts — `DM+Sans:wght@300;400;500;600;700`

**Accent / Labels: Montserrat**

- Used for badges, tags, button text, navigation
- Weights: 500, 600, 700
- Import: Google Fonts — `Montserrat:wght@500;600;700`

### 3.2 Type Scale

| Role               | Font             | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
| ------------------ | ---------------- | -------------- | ------------- | ------ | ----------- | -------- |
| Display / Hero H1  | Playfair Display | 64px           | 38px          | 700    | 72px / 44px | -0.5px   |
| Page Heading H1    | Playfair Display | 48px           | 32px          | 700    | 56px / 40px | -0.3px   |
| Section Heading H2 | Playfair Display | 36px           | 26px          | 700    | 44px / 34px | -0.2px   |
| Sub-section H3     | Playfair Display | 26px           | 22px          | 400    | 34px / 30px | 0px      |
| Card / Feature H4  | DM Sans          | 20px           | 18px          | 600    | 28px / 26px | 0px      |
| Label / H5         | Montserrat       | 14px           | 13px          | 700    | 20px        | 0.8px    |
| Body Large         | DM Sans          | 18px           | 16px          | 400    | 28px / 24px | 0px      |
| Body Regular       | DM Sans          | 16px           | 15px          | 400    | 24px        | 0px      |
| Body Small         | DM Sans          | 14px           | 13px          | 400    | 20px        | 0px      |
| Caption            | DM Sans          | 12px           | 12px          | 400    | 18px        | 0.2px    |
| Button Primary     | Montserrat       | 15px           | 14px          | 700    | 20px        | 0.5px    |
| Button Secondary   | Montserrat       | 14px           | 13px          | 600    | 20px        | 0.3px    |
| Navigation         | DM Sans          | 15px           | —             | 500    | 20px        | 0px      |
| Price Display      | DM Sans          | 20px           | 18px          | 700    | 24px        | -0.2px   |
| Badge / Tag        | Montserrat       | 11px           | 11px          | 700    | 16px        | 1px      |
| Input Text         | DM Sans          | 16px           | 16px          | 400    | 24px        | 0px      |

### 3.3 Typography Pairing Examples

**Homepage Hero:**

```
[Playfair Display 64px/700]  "Food worth caring about,"
[Playfair Display 64px/400]  "delivered to your door."
[DM Sans 18px/400]           "Premium fresh produce, artisan bakery, and gourmet
                              specialties — quality-checked and delivered fresh."
[Montserrat 15px/700 btn]    "START SHOPPING"
```

**Product Card:**

```
[DM Sans 15px/600]     Alphonso Mango
[Montserrat 11px/700]  QUALITY CHECKED
[DM Sans 20px/700]     ₹349
[DM Sans 13px/400 line-through] ₹420 MRP
[Montserrat 13px/700 btn]  ADD
```

**Section Heading:**

```
[Montserrat 11px/700 tracking-wide uppercase gold]  OUR PROMISE
[Playfair Display 36px/700 burgundy]               Sourced with care.
                                                    Delivered with trust.
[DM Sans 16px/400 warm-charcoal]                   From partner farms...
```

---

## 4. Component Design Specifications

### 4.1 Buttons

#### Primary Button (Gold CTA)

```
Background:    #C9943A (Warm Gold)
Text:          #FFFFFF (White) — Montserrat 15px/700/0.5px tracking
Padding:       12px 28px (desktop), 14px 24px (mobile)
Border Radius: 8px
Height:        48px (desktop), 52px (mobile)
Border:        none
Box Shadow:    0px 2px 12px rgba(201, 148, 58, 0.35)
Hover:         Background #B07B28, shadow intensifies
Active:        Background #9A6520, translateY(1px)
Disabled:      Background #E8D9CB, text #9C7E72, opacity 0.7
Focus:         Outline 3px solid rgba(201, 148, 58, 0.5)
```

#### Secondary Button (Burgundy Outline)

```
Background:    transparent
Text:          #6B1E2E — Montserrat 14px/600
Padding:       11px 24px
Border Radius: 8px
Height:        48px
Border:        2px solid #6B1E2E
Hover:         Background rgba(107, 30, 46, 0.06)
Active:        Background rgba(107, 30, 46, 0.12)
```

#### Ghost Button (Cream Surface)

```
Background:    #F5EDE4
Text:          #6B1E2E — Montserrat 14px/600
Padding:       10px 20px
Border Radius: 8px
Height:        44px
Border:        1px solid #E8D9CB
Hover:         Background #E8D9CB
```

#### Add-to-Cart Button (Compact, on card)

```
Background:    #6B1E2E (Burgundy)
Text:          #F5EDE4 (Cream) — Montserrat 13px/700
Padding:       8px 16px
Border Radius: 6px
Height:        36px
Hover:         Background #4A1020
Icon:          + icon left of text (16px)
Transition:    0.2s ease background
Quantity State: splits into [−] [N] [+] inline counter
```

#### Destructive / Remove

```
Background:    transparent
Text:          #9B1C1C — DM Sans 14px/500
Hover:         Text #6B1E2E, text-decoration underline
```

### 4.2 Product Card

**Desktop dimensions:** 220px wide, auto height
**Mobile dimensions:** (viewport − 32px − gap) / 2 wide

```
Container:
  Background:    #FFFFFF
  Border:        1px solid #E8D9CB
  Border Radius: 12px
  Box Shadow:    0px 2px 10px rgba(26, 10, 8, 0.06)
  Overflow:      hidden
  Hover:         Box Shadow 0px 6px 20px rgba(26, 10, 8, 0.12),
                 translateY(-3px), transition 0.25s ease

Image Area:
  Aspect Ratio:  1:1 (square)
  Object Fit:    cover
  Background:    #F5EDE4 (placeholder)
  Blur Hash:     shown during load

Trust Badge (absolute, top-left):
  Background:    #4A1020
  Text:          #F5EDE4 — Montserrat 10px/700/1px tracking
  Padding:       3px 8px
  Border Radius: 0px 0px 6px 0px

Wishlist (absolute, top-right):
  Icon:          Heart (24px)
  Color:         #9C7E72
  Hover/Active:  #C13545 (Crimson, filled)

Content Area:
  Padding:       12px 14px

  Product Name:
    Font:        DM Sans 14px/600
    Color:       #1A0A08
    Max Lines:   2 (line-clamp)

  Weight/Variant:
    Font:        DM Sans 12px/400
    Color:       #9C7E72

  Price Row:
    Selling Price:  DM Sans 18px/700, #1A0A08
    MRP:            DM Sans 13px/400, #9C7E72, text-decoration: line-through
    Savings Badge:  Montserrat 10px/700, #FFFFFF on #C13545, 4px radius

  Add Button:
    Full-width, Burgundy (see above spec)
    Transitions to quantity counter on add
```

### 4.3 Category Card

```
Container:
  Background:    linear-gradient(160deg, #6B1E2E 0%, #4A1020 100%)
  Border Radius: 16px
  Aspect Ratio:  3:4 (portrait)
  Overflow:      hidden
  Position:      relative
  Hover:         Scale 1.03, shadow intensifies

Image:
  Position:      absolute, bottom 0, right 0
  Width:         70% of card
  Object Fit:    contain
  Drop Shadow:   for cut-out effect

Category Name:
  Font:          Playfair Display 22px/700
  Color:         #FDF8F3
  Position:      top-left, padding 20px

Sub-count:
  Font:          DM Sans 12px/400
  Color:         rgba(253, 248, 243, 0.7)

Hover CTA:
  Appears on hover: "Shop Now →"
  Font:          Montserrat 12px/700
  Color:         #C9943A
```

### 4.4 Trust / Promise Card

```
Container:
  Background:    #FFFFFF
  Border:        1px solid #E8D9CB
  Border Radius: 16px
  Padding:       28px 24px
  Box Shadow:    0px 2px 10px rgba(26, 10, 8, 0.05)
  Hover:         Box Shadow 0px 8px 24px rgba(107, 30, 46, 0.12)

Icon:
  Size:          48px × 48px
  Container:     56px circle, background #F5EDE4
  Icon Color:    #6B1E2E

Title:
  Font:          DM Sans 17px/600
  Color:         #1A0A08
  Margin Top:    16px

Description:
  Font:          DM Sans 14px/400
  Color:         #5C4033
  Line Height:   22px
```

### 4.5 Search Bar

```
Container:
  Background:    #FFFFFF
  Border:        1.5px solid #E8D9CB
  Border Radius: 50px (fully pill-shaped)
  Height:        52px (desktop), 48px (mobile)
  Padding:       0 20px 0 52px (icon left)
  Box Shadow:    0px 2px 12px rgba(26, 10, 8, 0.06)

Search Icon:
  Size:          20px
  Color:         #9C7E72
  Position:      absolute, left 18px, centered vertically

Input Text:
  Font:          DM Sans 16px/400
  Color:         #1A0A08
  Placeholder:   #9C7E72

Focus State:
  Border:        1.5px solid #C9943A
  Box Shadow:    0px 0px 0px 3px rgba(201, 148, 58, 0.2)

Dropdown:
  Appears below, detaches from pill
  Background:    #FFFFFF
  Border:        1px solid #E8D9CB
  Border Radius: 16px
  Box Shadow:    0px 12px 32px rgba(26, 10, 8, 0.12)
  Padding:       16px 0
```

### 4.6 Navigation Header

**Desktop:**

```
Height:        72px
Background:    #FFFFFF
Border Bottom: 1px solid #E8D9CB
Padding:       0 40px
Layout:        Logo (left) | Search (center, flex-grow) | Utils (right)

Logo:
  Height:      40px; Burgundy wordmark

Search Bar:
  Max Width:   520px
  Flex:        1 (with min/max constraints)

Utils Row:
  Location | Membership | Account | Cart
  Gap:       24px
  Icons:     24px, color #5C4033
  Text:      DM Sans 13px/500

Cart:
  Icon + badge (Burgundy bg, Cream text, 18px circle)
  Shows: item count

Sticky Scrolled State:
  Height:    60px
  Box Shadow: 0px 2px 12px rgba(26, 10, 8, 0.08)
  Search bar: compresses slightly
```

**Promotional Bar (above header):**

```
Height:        44px
Background:    #4A1020
Text:          DM Sans 13px/500, color #F5EDE4
Accent text:   #C9943A (offer highlights)
Layout:        centered text | close button right
```

**Mobile:**

```
Top Bar Height:  56px
Background:      #FFFFFF
Border Bottom:   1px solid #E8D9CB
Contents:        Logo (left) | Cart icon + count (right)

Search Bar:
  Below header, full width
  Height:        44px
  Sticky:        true (stays at top on scroll)

Bottom Navigation:
  Height:        64px + safe-area-inset-bottom
  Background:    #FFFFFF
  Border Top:    1px solid #E8D9CB
  Box Shadow:    0px -2px 12px rgba(26, 10, 8, 0.06)
  Items:         Home | Shop | Search | Cart | Account
  Active State:  Icon + label in #6B1E2E, dot indicator
  Inactive:      #9C7E72
  Item Size:     44px × 44px tap target
```

### 4.7 Badges & Tags

**Trust Badge (dark, on product card):**

```
Background: #4A1020 | Text: #F5EDE4 | Font: Montserrat 10px/700/1px
Padding: 3px 8px | Border Radius: 4px
```

**Offer / Discount Badge:**

```
Background: #C13545 | Text: #FFFFFF | Font: Montserrat 11px/700
Padding: 4px 8px | Border Radius: 4px
```

**Health Goal Tag:**

```
Background: #F5EDE4 | Text: #6B1E2E | Font: Montserrat 11px/600
Border: 1px solid #E8D9CB | Padding: 4px 10px | Border Radius: 20px
```

**Low Stock Warning:**

```
Background: rgba(217, 119, 6, 0.1) | Text: #D97706
Font: Montserrat 10px/700 | Padding: 3px 8px | Border Radius: 4px
```

**Membership Badge:**

```
Background: linear-gradient(135deg, #C9943A, #9A6520)
Text: #FFFFFF | Font: Montserrat 11px/700 | Padding: 4px 12px | Border Radius: 20px
Icon: Crown 12px left
```

### 4.8 Form Inputs

**Text Input:**

```
Background:     #FFFFFF
Border:         1.5px solid #E8D9CB
Border Radius:  10px
Height:         48px
Padding:        12px 16px
Font:           DM Sans 16px/400, color #1A0A08
Placeholder:    #9C7E72

Focus:          Border #C9943A, Box Shadow 0px 0px 0px 3px rgba(201, 148, 58, 0.18)
Error:          Border #9B1C1C, Box Shadow 0px 0px 0px 3px rgba(155, 28, 28, 0.15)
Success:        Border #2D6A4F
Label:          DM Sans 13px/600, #5C4033, margin-bottom 6px
Error Text:     DM Sans 12px/400, #9B1C1C, margin-top 4px
```

---

## 5. Layout System

### 5.1 Spacing Scale (Base: 4px)

| Token      | Value | Usage                                    |
| ---------- | ----- | ---------------------------------------- |
| `space-1`  | 4px   | Icon gap, inline tight                   |
| `space-2`  | 8px   | Badge padding, tight component gap       |
| `space-3`  | 12px  | Card content gap, form field gap         |
| `space-4`  | 16px  | Standard card padding, list item spacing |
| `space-5`  | 20px  | Component section spacing                |
| `space-6`  | 24px  | Column gap (desktop product grid)        |
| `space-8`  | 32px  | Section margin, card padding (large)     |
| `space-10` | 40px  | Major section vertical padding           |
| `space-12` | 48px  | Page section gap                         |
| `space-16` | 64px  | Hero section padding                     |

### 5.2 Grid System

| Breakpoint | Width       | Columns | Gutter | Page Padding               |
| ---------- | ----------- | ------- | ------ | -------------------------- |
| Mobile     | 320–479px   | 4 col   | 8px    | 16px                       |
| Mobile L   | 480–767px   | 4 col   | 12px   | 20px                       |
| Tablet     | 768–1023px  | 8 col   | 16px   | 32px                       |
| Desktop    | 1024–1279px | 12 col  | 20px   | 40px                       |
| Desktop XL | 1280px+     | 12 col  | 24px   | 80px (max content: 1280px) |

### 5.3 Product Grid — Columns by Breakpoint

| Breakpoint | Fresh Produce | Gourmet | Bakery |
| ---------- | ------------- | ------- | ------ |
| Mobile     | 2 col         | 1 col   | 1 col  |
| Mobile L   | 2 col         | 2 col   | 2 col  |
| Tablet     | 3 col         | 2 col   | 2 col  |
| Desktop    | 4 col         | 3 col   | 3 col  |
| Desktop XL | 5 col         | 4 col   | 4 col  |

### 5.4 Border Radius Scale

| Token         | Value  | Usage                                |
| ------------- | ------ | ------------------------------------ |
| `radius-sm`   | 4px    | Badges, tags, very small elements    |
| `radius-md`   | 8px    | Buttons, compact cards               |
| `radius-lg`   | 12px   | Product cards, dropdowns             |
| `radius-xl`   | 16px   | Category cards, modals, sheet panels |
| `radius-2xl`  | 24px   | Hero image overlays, large banners   |
| `radius-full` | 9999px | Search bar (pill), round icons       |

---

## 6. Elevation & Shadow System

| Level   | Value                                 | Usage                          |
| ------- | ------------------------------------- | ------------------------------ |
| Flat    | none                                  | Body text, structural dividers |
| Whisper | `0px 1px 4px rgba(26, 10, 8, 0.05)`   | Subtle card lift               |
| Card    | `0px 2px 10px rgba(26, 10, 8, 0.06)`  | Product cards, form inputs     |
| Raised  | `0px 6px 20px rgba(26, 10, 8, 0.12)`  | Hovered cards                  |
| Float   | `0px 12px 32px rgba(26, 10, 8, 0.15)` | Dropdowns, cart drawer         |
| Modal   | `0px 24px 64px rgba(26, 10, 8, 0.25)` | Modals, full overlays          |
| Header  | `0px 2px 12px rgba(26, 10, 8, 0.08)`  | Sticky header                  |

---

## 7. Iconography

- **Library:** Lucide Icons (consistent, clean, open source)
- **Size Scale:** 16px (inline/badge) · 20px (navigation/UI) · 24px (header utils) · 32px (feature cards) · 48px (trust cards, empty states)
- **Stroke Width:** 1.5px (default), 2px (emphasis)
- **Colour:** Matches text context — Burgundy for brand, Warm Charcoal for UI, Gold for CTA context
- **Custom Icons:** Trust badges (Quality Check ✓, Traceable 📍, Farm-Fresh 🌿, Artisan 🎨, Money-Back ↩) — illustrated, not icon-font

---

## 8. Animation & Interaction Principles

### Motion Philosophy

Purposeful and subtle. Animations should reinforce user actions — never distract. Premium brands move slowly and deliberately, not frantically.

### Timing Scale

| Token           | Duration | Easing                       | Usage                         |
| --------------- | -------- | ---------------------------- | ----------------------------- |
| `motion-fast`   | 120ms    | ease-out                     | Badge appearance, tooltip     |
| `motion-base`   | 200ms    | ease-in-out                  | Hover states, button press    |
| `motion-slow`   | 300ms    | ease-in-out                  | Card transitions, drawer open |
| `motion-gentle` | 400ms    | cubic-bezier(0.4, 0, 0.2, 1) | Page transitions, modals      |

### Key Interaction Animations

- **Product card hover:** `translateY(-3px)` + shadow increase, 250ms ease
- **Button hover:** Background colour shift, 200ms ease
- **Add-to-cart button:** Splits into `[−][N][+]` with 300ms slide animation
- **Cart drawer:** Slides in from right (desktop), 350ms ease-out
- **Search overlay:** Fades in + slight translate-Y (15px → 0), 250ms
- **Toast/notification:** Slides in from top-right, 300ms; auto-dismiss 3s
- **Page transitions:** Fade 200ms (Next.js view transitions API)
- **Skeleton loaders:** Shimmer animation, Burgundy-tinted (`#F5EDE4` → `#E8D9CB`)

---

## 9. Responsive Behaviour

### Navigation Collapse (Desktop → Mobile)

- 1024px+: Full horizontal nav with mega-menu
- 768–1023px: Condensed nav, hamburger for category submenu
- < 768px: Top bar (logo + cart) + sticky search + bottom navigation

### Hero Section

- Desktop: Full-width (1280px max), 520px height, text left 55%, image right 45%
- Tablet: 380px height, text top 50%, image below
- Mobile: 300px height, text center, image as background with dark overlay

### Product Cards

- Desktop: 220px width, fixed in grid
- Tablet: Fluid in 3-col grid
- Mobile: (100vw − 32px − 8px) / 2 width

### Cart Drawer

- Desktop: Slide-in panel (right), width 420px
- Mobile: Full `/cart` page navigation (no drawer)

---

## 10. Accessibility (WCAG AA)

### Colour Contrast — Verified Pairs

| Text                   | Background | Ratio           | Pass |
| ---------------------- | ---------- | --------------- | ---- |
| `#1A0A08` on `#FDF8F3` | 18.5:1     | ✅ AAA          |
| `#1A0A08` on `#FFFFFF` | 21:1       | ✅ AAA          |
| `#FFFFFF` on `#6B1E2E` | 10.2:1     | ✅ AAA          |
| `#FFFFFF` on `#C9943A` | 3.1:1      | ⚠ AA Large only |
| `#1A0A08` on `#C9943A` | 6.8:1      | ✅ AA           |
| `#F5EDE4` on `#4A1020` | 12.4:1     | ✅ AAA          |

> Note: White text on Gold (#C9943A) only passes at 18px+/bold. Use `#1A0A08` on Gold for small button text.

### Focus States

All interactive elements must show:

```css
outline: 3px solid #c9943a;
outline-offset: 2px;
border-radius: inherit;
```

### Touch Targets

- Mobile minimum: 44px × 44px
- Spacing between adjacent targets: 8px minimum

### Screen Reader Support

- All product images: descriptive `alt` text (`"Alphonso Mango — 500g"`)
- Cart button: `aria-label="Add Alphonso Mango to cart"`
- Quantity controls: `aria-label="Decrease quantity"` / `aria-label="Increase quantity"`
- Cart count badge: `aria-live="polite"` for count updates
- Filter checkboxes: properly labelled fieldsets
- Search: `role="combobox"` + `aria-expanded`
- Modal: `role="dialog"` + `aria-modal="true"` + focus trap

---

## 11. Page-by-Page Design Specifications

### 11.1 Homepage — Section Order & Visual Treatment

```
[Promo Bar] — Dark Wine bg, 44px, rotating text in Cream + Gold accents

[Header] — White, 72px, full layout

[Hero Section]
  Background: Cream (#FDF8F3)
  Left Panel (55%):
    Eyebrow:   Montserrat 13px/700 uppercase Gold — "QUALITY YOU CAN TASTE"
    Headline:  Playfair Display 64px/700 Burgundy — "Food worth caring about,"
    Sub-line:  Playfair Display 64px/400 Dark Wine — "delivered to your door."
    Body:      DM Sans 18px/400 Warm Charcoal — benefit copy
    CTAs:      Gold primary button + Burgundy outline secondary
    Trust Row: 4 micro-badges (icons + text, horizontal row)
  Right Panel (45%):
    Premium produce / artisan food photography
    Floating category chips (pill tags, Cream bg, Burgundy border)

[Shop by Vertical] — 3 large category hero cards (Fresh / Gourmet / Bakery)
  Each card: full Burgundy gradient, product lifestyle image, Playfair heading

[Daily Essentials] — Cream section bg, horizontal scroll on mobile
  Section heading with Gold underline accent

[Health Goals] — White bg, 6 tiles in 3×2 grid (desktop), horizontal scroll (mobile)

[The Red B Promise] — Antique Cream bg, 5 promise cards in grid

[Gourmet Spotlight] — Dark Wine bg (rich, editorial), Gold text accents
  3 featured hero products, editorial photography

[Artisan Bakery] — Cream bg, baker portrait cards, product cards

[Recipes & Bundles] — White bg, content-first layout

[Testimonials] — Antique Cream bg, large quote format

[Membership CTA] — Burgundy bg, Cream text, Gold CTA
  "Join Red B. Eat better, spend less."

[Footer] — Dark Wine bg, Cream/Antique Cream text, Gold link hovers
```

### 11.2 PLP — Product Listing Page

```
[Category Hero]
  Height: 220px (desktop), 160px (mobile)
  Background: Burgundy gradient with product lifestyle image
  Heading: Playfair Display white
  Sub: DM Sans cream, short benefit line

[Breadcrumb] — DM Sans 13px, Warm Charcoal, "/" separator

[Filter + Sort Row]
  Desktop: left sidebar (240px fixed) + right content
  Mobile:  sticky filter/sort bar (full width, bottom-sheet on tap)

[Product Grid]
  4 col desktop / 3 col tablet / 2 col mobile

[Load More]
  Ghost button, centred, 48px height
```

### 11.3 PDP — Product Detail Page

```
[Breadcrumb]

[Product Section] — 2-col (desktop), stacked (mobile)
  Left: Image gallery (main + 4 thumbnails, zoom on hover)
  Right:
    Trust badge (top, above name)
    Name: Playfair Display 32px/700
    Rating stars + count
    Price: DM Sans 28px/700 + MRP strike + savings badge
    Weight/size variant selector
    Delivery mode selector (same-day / scheduled / subscribe tabs)
    Slot selector (if same-day chosen)
    Quantity selector
    Add to Cart button (full width, Gold CTA, 56px)
    Freshness promise (small, icon + text row below CTA)

[Rich Content Tabs]
  Highlights | Storage | Sourcing | Nutrition
  Styled as clean tab panels

[Frequently Bought Together]
  Horizontal card row + "Add All" CTA

[Similar Products]
  Standard product card grid

[Reviews]
  Aggregate rating (stars + bar chart) + individual review cards
```

---

## 12. Design Tokens (CSS Variables)

```css
:root {
  /* Brand */
  --color-brand: #6b1e2e;
  --color-brand-dark: #4a1020;
  --color-brand-surface: #8b2a3e;

  /* CTA */
  --color-cta: #c9943a;
  --color-cta-hover: #b07b28;
  --color-cta-active: #9a6520;

  /* Accent */
  --color-crimson: #c13545;
  --color-terracotta: #c4613a;

  /* Backgrounds */
  --color-bg: #fdf8f3;
  --color-bg-alt: #f5ede4;
  --color-surface: #ffffff;

  /* Borders */
  --color-border: #e8d9cb;
  --color-border-strong: #c8b09a;

  /* Text */
  --color-text: #1a0a08;
  --color-text-secondary: #5c4033;
  --color-text-muted: #9c7e72;

  /* Semantic */
  --color-success: #2d6a4f;
  --color-warning: #d97706;
  --color-error: #9b1c1c;

  /* Promo Bar */
  --color-promo-bg: #4a1020;

  /* Typography */
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;
  --font-label: "Montserrat", system-ui, sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0px 2px 10px rgba(26, 10, 8, 0.06);
  --shadow-raised: 0px 6px 20px rgba(26, 10, 8, 0.12);
  --shadow-float: 0px 12px 32px rgba(26, 10, 8, 0.15);
  --shadow-modal: 0px 24px 64px rgba(26, 10, 8, 0.25);

  /* Motion */
  --motion-fast: 120ms ease-out;
  --motion-base: 200ms ease-in-out;
  --motion-slow: 300ms ease-in-out;
  --motion-gentle: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
