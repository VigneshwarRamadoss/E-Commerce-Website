# Design System Inspired by Pluckk

## 1. Visual Theme & Atmosphere

Pluckk embodies a fresh, wholesome aesthetic rooted in farm-to-table transparency and health-conscious living. The design system combines natural, organic visual language with modern digital clarity. Soft mint greens and deep forest tones create a calming, trustworthy environment that communicates cleanliness, sustainability, and premium quality produce. The palette draws inspiration from nature—vibrant vegetables, ripe fruits, and lush gardens—while maintaining a contemporary, accessible feel. Typography is clean and readable, prioritizing legibility across mobile and desktop experiences. The overall atmosphere is optimistic, energetic, and deeply grounded in authenticity.

**Key Characteristics**

- Fresh, farm-inspired color story with mint and forest tones
- Organic, approachable visual language emphasizing trust and quality
- Modern sans-serif typography for clarity and accessibility
- Generous whitespace supporting content hierarchy
- Playful yet professional tone reflecting health and wellness focus
- Photographic hero moments showcasing vibrant, beautiful produce

## 2. Color Palette & Roles

### Primary

- **Forest Green** (`#233930`): Primary brand color used extensively for headings, icons, and key CTAs; represents growth, health, and sustainability
- **Deep Teal** (`#1C3A30`): Secondary primary tone for darker text, borders, and secondary UI elements; adds depth to forest green

### Accent Colors

- **Magenta** (`#981A4D`): Primary accent for emphasis, active states, and promotional elements; energetic counterpoint to greens
- **Teal** (`#319583`): Tertiary accent for secondary actions and highlights; bridges primary and accent palettes
- **Purple-Rose** (`#AA436E`): Softer accent for supporting UI and tertiary emphasis; adds sophistication

### Interactive

- **Mint** (`#95E8BE`): Call-to-action backgrounds, hover states, and positive interaction feedback; represents freshness and approachability
- **Royal Blue** (`#1B5AB9`): Secondary interactive element color for links and selected states; provides visual contrast
- **Deep Purple** (`#570F50`): Dark accent for focused states and high-contrast interactive elements

### Neutral Scale

- **Black** (`#000000`): Primary text color, borders, and most icon usage; ensures maximum readability
- **White** (`#FFFFFF`): Primary background color for surfaces and cards; maintains clean, open aesthetic
- **Light Gray** (`#F5F5F5`): Secondary background for subtle section separation
- **Medium Gray** (`#D9D9D9`): Border color for form inputs and subtle dividers
- **Charcoal** (`#707070`): Secondary text color for descriptions and metadata

### Surface & Borders

- **Off-White** (`#EEEEEE`): Card and container backgrounds for gentle visual layering
- **Silver** (`#D6D6D6`): Border strokes for inputs and card separations
- **Taupe** (`#C2B4BB`): Muted border for softer, less prominent dividers

### Semantic / Status

- **Amber** (`#FFE500`): Warning state indicator and alert backgrounds
- **Orange** (`#FF9C00`): Secondary warning and caution states; draws attention without aggression

## 3. Typography Rules

### Font Family

**Primary: Montserrat** (sans-serif, weights 400–700)
Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

**Secondary: DM Sans** (sans-serif, weights 400–700)
Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

### Hierarchy

| Role                  | Font          | Size | Weight | Line Height | Letter Spacing | Notes                                     |
| --------------------- | ------------- | ---- | ------ | ----------- | -------------- | ----------------------------------------- |
| Display / H1          | Montserrat    | 48px | 700    | 56px        | `-0.5px`       | Hero headlines, page titles               |
| Heading / H2          | Montserrat    | 32px | 500    | 40px        | `-0.3px`       | Section headings, major content divisions |
| Subheading / H3       | Montserrat    | 24px | 600    | 32px        | `-0.2px`       | Subsection titles, card headers           |
| Tertiary Heading / H4 | Montserrat    | 20px | 600    | 28px        | `0px`          | Feature titles, list headers              |
| Label / H5            | Montserrat    | 20px | 500    | 24px        | `0px`          | Form labels, emphasis text                |
| Small Label / H6      | DM Sans       | 14px | 700    | 20px        | `0.5px`        | Badge text, component labels              |
| Body / Paragraph      | DM Sans       | 16px | 400    | 24px        | `0px`          | Primary reading text, descriptions        |
| Body Small            | DM Sans       | 14px | 400    | 20px        | `0px`          | Secondary text, metadata, captions        |
| Button Text           | Montserrat    | 14px | 600    | 16px        | `0.5px`        | All button labels                         |
| Button Large          | Montserrat    | 18px | 700    | 24px        | `0px`          | Primary CTA buttons                       |
| Input / Placeholder   | DM Sans       | 16px | 400    | 24px        | `0px`          | Form input text and placeholders          |
| Code / Monospace      | `Courier New` | 12px | 400    | 16px        | `0px`          | Code blocks, promotional codes            |

### Principles

- **Contrast & Hierarchy**: Use size, weight, and color to establish clear visual priority; H2 headings command attention with 500 weight, body text remains accessible at 400 weight
- **Readability**: All body copy maintains minimum 16px size on mobile; line heights are generous (1.5–1.6 ratio) for comfortable reading
- **Brand Voice**: Montserrat conveys modern reliability for headings; DM Sans provides friendly, approachable body text
- **Semantic Consistency**: Weights increase with importance; secondary text uses lighter weights and neutral grays
- **Responsive Scaling**: Typography scales proportionally on mobile; minimum 14px maintained for accessibility

## 4. Component Stylings

### Buttons

#### Primary Button

- **Background**: `#95E8BE` (Mint)
- **Text Color**: `#233930` (Forest Green)
- **Font Size**: `14px`
- **Font Weight**: `600`
- **Font Family**: `Montserrat`
- **Padding**: `8px 16px`
- **Border Radius**: `10px`
- **Border**: `none`
- **Height**: `40px`
- **Line Height**: `20px`
- **Hover State**: Background `#7FE0A9`, text `#1C3A30`
- **Active State**: Background `#65D896`, text `#0F2A20`
- **Disabled State**: Background `#D9D9D9`, text `#707070`, opacity `0.6`

#### Secondary Button

- **Background**: `transparent`
- **Text Color**: `#FFFFFF`
- **Font Size**: `26px`
- **Font Weight**: `700`
- **Font Family**: `Montserrat`
- **Padding**: `5px 5px`
- **Border Radius**: `14px`
- **Border**: `none`
- **Height**: `40px`
- **Line Height**: `32px`
- **Hover State**: Background `rgba(255, 255, 255, 0.15)`, text `#FFFFFF`
- **Active State**: Background `rgba(255, 255, 255, 0.25)`, text `#FFFFFF`

#### Tertiary / Ghost Button

- **Background**: `transparent`
- **Text Color**: `#000000`
- **Font Size**: `18px`
- **Font Weight**: `700`
- **Font Family**: `Montserrat`
- **Padding**: `8px 16px`
- **Border Radius**: `14px`
- **Border**: `1px solid #000000`
- **Height**: `40px`
- **Line Height**: `24px`
- **Hover State**: Background `#F5F5F5`, text `#233930`, border `#233930`
- **Active State**: Background `#EEEEEE`, text `#1C3A30`, border `#1C3A30`

#### Download / CTA Button

- **Background**: `#FFFFFF`
- **Text Color**: `#981A4D` (Magenta)
- **Font Size**: `14px`
- **Font Weight**: `600`
- **Font Family**: `Montserrat`
- **Padding**: `8px 24px`
- **Border Radius**: `10px`
- **Border**: `none`
- **Height**: `32px`
- **Line Height**: `14px`
- **Hover State**: Background `#F5F5F5`, text `#AA436E`
- **Active State**: Background `#EEEEEE`, text `#570F50`

### Cards & Containers

#### Hero Card (Large Banner)

- **Background**: `transparent` or `linear-gradient(135deg, #95E8BE 0%, #7FE0A9 100%)`
- **Text Color**: `#000000`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `32px 36px`
- **Border Radius**: `0px`
- **Border**: `none`
- **Box Shadow**: `none`
- **Min Height**: `228px`

#### Product Card (Grid Item)

- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `0px`
- **Border Radius**: `8px`
- **Border**: `1px solid #D9D9D9`
- **Box Shadow**: `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`
- **Height**: `auto`
- **Width**: `194px` to `200px`
- **Hover State**: Box Shadow `rgba(0, 0, 0, 0.15) 0px 4px 12px 0px`, transform `translateY(-2px)`

#### Promise / Feature Card

- **Background**: `linear-gradient(135deg, #233930 0%, #1C3A30 100%)`
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `20px 20px`
- **Border Radius**: `8px`
- **Border**: `none`
- **Box Shadow**: `rgba(0, 0, 0, 0.2) 0px 4px 12px 0px`
- **Min Height**: `140px`
- **Overlay**: Dark background with semi-transparent overlay `rgba(0, 0, 0, 0.3)` over image
- **Hover State**: Box Shadow `rgba(0, 0, 0, 0.3) 0px 8px 16px 0px`

### Inputs & Forms

#### Search Input

- **Background**: `#FFFFFF`
- **Text Color**: `#1C3A30` (Forest Green)
- **Placeholder Color**: `#707070`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `11px 15px 11px 45px` (left padding for search icon)
- **Border Radius**: `15px`
- **Border**: `1px solid rgba(0, 0, 0, 0.043)`
- **Box Shadow**: `rgba(0, 0, 0, 0.043) 0px 10px 15px 0px`
- **Height**: `45px`
- **Width**: `100%` (responsive, max `500px`)
- **Line Height**: `20px`
- **Focus State**: Border `1px solid #95E8BE`, box shadow `rgba(149, 232, 190, 0.3) 0px 0px 0px 3px`

#### Text Input

- **Background**: `#FFFFFF`
- **Text Color**: `#233930`
- **Placeholder Color**: `#999999`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `11px 15px`
- **Border Radius**: `8px`
- **Border**: `1px solid #D9D9D9`
- **Box Shadow**: `none`
- **Height**: `40px`
- **Line Height**: `20px`
- **Focus State**: Border `1px solid #1B5AB9`, box shadow `rgba(27, 90, 185, 0.1) 0px 0px 0px 3px`

#### Select / Dropdown

- **Background**: `#FFFFFF`
- **Text Color**: `#233930`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `8px 12px`
- **Border Radius**: `6px`
- **Border**: `1px solid #D9D9D9`
- **Height**: `36px`
- **Hover State**: Border `#95E8BE`, background `#F5F5F5`

### Navigation

#### Header Navigation (Top)

- **Background**: `#FFFFFF`
- **Text Color**: `#000000`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Padding**: `12px 20px`
- **Border Bottom**: `none`
- **Height**: `60px`
- **Logo**: `32px` × `32px` icon or logotype
- **Link Hover**: Text color `#95E8BE`, background `transparent`
- **Link Active**: Text color `#981A4D`, text decoration `underline`

#### Promotional Bar (Top Alert)

- **Background**: `#981A4D` (Magenta)
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `600`
- **Font Family**: `Montserrat`
- **Padding**: `12px 20px`
- **Height**: `44px`
- **Alignment**: Center with location selector on right

#### Navigation Menu Item (Hover)

- **Background**: `transparent`
- **Text Color**: `#95E8BE`
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Transition**: `color 0.2s ease`

### Badges & Tags

#### Category Badge

- **Background**: `#F5F5F5`
- **Text Color**: `#233930`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Font Family**: `DM Sans`
- **Padding**: `4px 8px`
- **Border Radius**: `4px`
- **Border**: `1px solid #D9D9D9`

#### Accent Badge (Status)

- **Background**: `#95E8BE`
- **Text Color**: `#1C3A30`
- **Font Size**: `12px`
- **Font Weight**: `700`
- **Font Family**: `DM Sans`
- **Padding**: `6px 12px`
- **Border Radius**: `6px`
- **Border**: `none`

### Links & Typography Links

#### Standard Link

- **Color**: `#1B5AB9` (Royal Blue)
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `DM Sans`
- **Text Decoration**: `none`
- **Hover State**: Color `#233930`, text decoration `underline`
- **Active State**: Color `#981A4D`
- **Visited State**: Color `#AA436E`

#### Icon Link

- **Color**: `#233930`
- **Font Size**: `18px`
- **Hover State**: Color `#95E8BE`, transform `scale(1.1)`

## 5. Layout Principles

### Spacing System

Base unit: `4px`

**Scale with contexts:**

- **Tight Spacing**: `4px` (gap between inline elements), `8px` (small padding within components)
- **Normal Spacing**: `12px` (margin between related sections), `16px` (standard padding in cards and inputs)
- **Generous Spacing**: `20px` (margin between distinct content blocks), `24px` (gap between major sections)
- **Extra Spacing**: `32px` (gap separating distinct page sections), `40px` (gap between page sections on large screens)
- **Page Margin**: `172px` (max margin on hero sections on desktop)

**Usage context:**

- Component padding: `8px`, `12px`, `16px`
- Section margins: `20px`, `32px`, `40px`
- Grid gaps: `12px` (mobile), `16px` (tablet), `24px` (desktop)
- Element spacing: `4px`, `8px` for inline/adjacent items

### Grid & Container

- **Max Width**: `1200px` (content container)
- **Column Strategy**: 12-column grid on desktop, 6-column on tablet, 4-column on mobile
- **Gutters**: `16px` between columns on desktop, `12px` on tablet, `8px` on mobile
- **Page Padding**: `20px` on mobile, `32px` on tablet, `40px` on desktop
- **Hero Section**: Full-width with internal max-width container of `1100px`
- **Grid Item Spacing**: `16px` gap between product cards on desktop, `12px` on tablet, `8px` on mobile

### Whitespace Philosophy

Pluckk employs generous whitespace to create a sense of calm, cleanliness, and premium quality. Large breathing room around text, images, and CTAs emphasizes content importance and reduces cognitive load. Section margins use `32px` or greater to create clear visual separation. Card padding is never less than `16px` internally, maintaining space around content. The design prioritizes negative space as an active design element, not wasted area—white space gives content room to breathe and strengthens the brand's connection to freshness and clarity.

### Border Radius Scale

- **Sharp Corners**: `0px` (hero sections, full-width containers)
- **Subtle Radius**: `4px` (badges, small UI elements, very subtle separation)
- **Standard Radius**: `6px` (buttons in some contexts, form elements)
- **Medium Radius**: `8px` (cards, moderate-sized containers, image overlays)
- **Rounded**: `10px` (primary buttons, form inputs, component accents)
- **Very Rounded**: `14px` (large buttons, prominent CTAs, secondary buttons)
- **Pill-Shaped**: `15px` to `20px` (search inputs, fully rounded input fields)

## 6. Depth & Elevation

| Level     | Treatment                              | Use                                                            |
| --------- | -------------------------------------- | -------------------------------------------------------------- |
| Flat      | No shadow, `box-shadow: none`          | Typography, borders, structural dividers, flat design sections |
| Subtle    | `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`   | Standard cards, product cards, gentle lift                     |
| Elevated  | `rgba(0, 0, 0, 0.15) 0px 4px 12px 0px` | Hovered product cards, raised containers, interactive states   |
| High      | `rgba(0, 0, 0, 0.2) 0px 4px 12px 0px`  | Feature cards with overlaid text, modals, elevated overlays    |
| Very High | `rgba(0, 0, 0, 0.3) 0px 8px 16px 0px`  | Modals on hover, floating action buttons, top-level overlays   |

**Shadow Philosophy:**

Pluckk uses subtle, minimalist shadows to define layering and depth without overwhelming the clean aesthetic. Shadows are reserved for interactive elements (hovered cards, buttons), modals, and overlays where depth separation is critical. Most content lives at the "flat" or "subtle" level, reinforcing the brand's emphasis on clarity and simplicity. Shadows use soft black (`rgba(0, 0, 0, ...)`) with generous blur (8px–16px) to create diffuse, natural-looking depth that mirrors soft natural light. This restraint maintains the fresh, organic feel while providing necessary visual hierarchy.

## 7. Do's and Don'ts

### Do

- **Use Forest Green** (`#233930`) for primary headings and brand-critical UI; it establishes trust and connection to nature
- **Prioritize Readability**: Ensure all body text meets WCAG AA contrast ratios; use `#000000` on white backgrounds, `#FFFFFF` on dark backgrounds
- **Pair Montserrat with DM Sans** consistently; Montserrat for headlines, DM Sans for body and UI text
- **Apply Generous Spacing**: Use whitespace to separate sections and emphasize content importance; never crowd interface elements
- **Use Mint** (`#95E8BE`) for primary CTAs and positive actions; it signals approachability and freshness
- **Employ Subtle Shadows**: Use `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px` for standard cards; increase only on hover or modal states
- **Scale Typography Responsively**: Reduce heading sizes by 20–30% on mobile while maintaining 14px+ minimum for body text
- **Test Color Contrast**: Verify all text-background pairs pass WCAG AA accessibility standards (4.5:1 minimum for body text)
- **Use Consistent Padding**: Maintain `16px` as default card/component padding; use `8px` for tighter, `24px` for generous spacing
- **Round Corners Subtly**: Apply `8px` radius to cards, `10px` to buttons, and `0px` to full-width hero sections

### Don't

- **Don't Overuse Magenta** (`#981A4D`); reserve it for primary accents, promotional elements, and key call-to-actions to maintain impact
- **Don't Mix Font Families Randomly**: Stick to Montserrat and DM Sans; avoid introducing additional typefaces
- **Don't Apply Heavy Shadows**: Avoid `box-shadow` values exceeding `rgba(0, 0, 0, 0.3) 0px 8px 16px 0px` except for top-level modals
- **Don't Use Colors Below Contrast Minimums**: Avoid low-contrast text pairs; always test on actual backgrounds
- **Don't Reduce Font Sizes Below 14px** for body text; preserve accessibility and readability
- **Don't Add Color to Every Element**: Embrace neutral grays and whites; use color strategically for emphasis and action
- **Don't Crowd Cards with Padding Below 8px**: Maintain internal breathing room within all card and component containers
- **Don't Override Border Radius Arbitrarily**: Use the defined scale (`4px`, `6px`, `8px`, `10px`, `14px`) consistently across similar components
- **Don't Forget Hover/Focus States**: Every interactive element must have clear visual feedback; use color, shadow, or border changes
- **Don't Sacrifice Line Height for Compactness**: Maintain 1.4–1.6 line height ratios for all text; never reduce below 1.3

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width               | Key Changes                                                                                                       |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Mobile          | `320px` – `479px`   | Single column layout, full-width cards, 20px page padding, 14px body font, stacked navigation, 100% button widths |
| Mobile Large    | `480px` – `767px`   | Two-column grid in some sections, 24px page padding, 15px body font, improved touch targets                       |
| Tablet          | `768px` – `1023px`  | 2–3 column grid, 32px page padding, 16px body font, horizontal navigation begins, card width `160px`–`180px`      |
| Desktop         | `1024px` – `1279px` | 3–4 column grid, 40px page padding, full navigation, max-width containers activate, card width `194px`            |
| Desktop XL      | `1280px`+           | 4–5 column grid, 60px page padding, centered max-width layout, full feature set active, card width `220px`        |

### Touch Targets

- **Minimum Button Height**: `44px` on mobile, `40px` on tablet/desktop (accessibility standard)
- **Minimum Button Width**: `44px` on mobile for icon buttons; text buttons `≥ 60px`
- **Minimum Link/Tap Area**: `44px` × `44px` for standalone interactive elements
- **Spacing Between Touch Targets**: `8px` minimum gap to prevent accidental triggers
- **Input Field Height**: `45px` on mobile, `40px` on tablet/desktop
- **Checkbox/Radio Size**: `18px` × `18px` with `8px` padding for label spacing

### Collapsing Strategy

- **Navigation**: Horizontal navigation bar collapses to hamburger menu icon on mobile; drawer menu slides from left with full-height overlay
- **Hero Section**: Maintains full-width presentation; image may crop or scale on smaller screens; text font sizes reduce by 25–30%
- **Grid Cards**: 4 columns (desktop) → 3 columns (tablet) → 2 columns (mobile large) → 1 column (mobile)
- **Spacing**: Page padding reduces from `40px` (desktop) to `20px` (mobile); section margins reduce from `32px` to `20px`
- **Buttons**: Maintain `14px` font size but increase padding and height for mobile usability; consider full-width on mobile for primary CTAs
- **Search Input**: Reduce width to `100%` on mobile; maintain `45px` height for finger accessibility
- **Forms**: Single-column layout on mobile, two-column on tablet/desktop; maintain `16px` spacing between fields
- **Modals**: Full-screen on mobile with `20px` padding; fixed max-width `500px` on larger screens

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Mint (`#95E8BE`)
- **Secondary CTA**: Magenta (`#981A4D`)
- **Heading Text**: Forest Green (`#233930`)
- **Body Text**: Black (`#000000`)
- **Background**: White (`#FFFFFF`)
- **Card Background**: White (`#FFFFFF`) with subtle shadow `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px`
- **Border Color**: Medium Gray (`#D9D9D9`)
- **Placeholder/Secondary Text**: Charcoal (`#707070`)
- **Success/Positive Action**: Mint (`#95E8BE`)
- **Warning/Alert**: Amber (`#FFE500`)
- **Link Color**: Royal Blue (`#1B5AB9`)
- **Hover/Interactive**: Teal (`#319583`)

### Iteration Guide

1. **Color Foundation**: All primary headings and brand elements use Forest Green (`#233930`); CTAs use Mint (`#95E8BE`); secondary actions use Magenta (`#981A4D`). Verify all text meets WCAG AA contrast (4.5:1 minimum).

2. **Typography Hierarchy**: Headings use Montserrat (H1: 48px/700, H2: 32px/500, H3: 24px/600); body text uses DM Sans (16px/400 with 24px line height). All text remains readable at minimum 14px on mobile devices.

3. **Spacing Consistency**: Apply `16px` padding inside cards and components, `32px` margins between major sections, `8px` gaps between adjacent elements. Reduce all spacing by 25–30% on mobile (e.g., `40px` → `20px`, `32px` → `20px`).

4. **Button States**: Primary buttons: Mint background, Forest Green text, `10px` border radius, `8px 16px` padding, `40px` height. Include distinct hover (background `#7FE0A9`), active (background `#65D896`), and disabled (gray, opacity 0.6) states.

5. **Card Styling**: All product/content cards use White background with `1px #D9D9D9` border, `8px` border radius, `rgba(0, 0, 0, 0.1) 0px 2px 8px 0px` shadow. On hover, increase shadow to `rgba(0, 0, 0, 0.15) 0px 4px 12px 0px` and apply `translateY(-2px)` transform.

6. **Input Fields**: Search inputs use `15px` border radius, `45px` height, `#FFFFFF` background, `1px solid rgba(0, 0, 0, 0.043)` border, `11px 15px` padding. On focus, border becomes `#95E8BE` with `rgba(149, 232, 190, 0.3) 0px 0px 0px 3px` box shadow.

7. **Responsive Layout**: Use 4-column grid on desktop (1024px+), 3 columns on tablet (768px–1023px), 2 columns on mobile large (480px–767px), 1 column on mobile (320px–479px). Page padding: `40px` desktop, `32px` tablet, `20px` mobile. Max content width: `1200px`.

8. **Shadows & Depth**: Subtle shadows only (`rgba(0, 0, 0, 0.1) 0px 2px 8px 0px` standard); increase on hover/interactive states. Reserve `rgba(0, 0, 0, 0.3) 0px 8px 16px 0px` for modals and overlays. Most UI remains flat or subtly elevated.

9. **Accessibility**: Minimum touch target size `44px` × `44px` on mobile, `40px` × `40px` on desktop. Maintain 1.4–1.6 line height for all text. Ensure focus states are visible (Mint borders, color changes, or outline shadows). Test all color pairs for WCAG AA compliance.

10. **Brand Voice in UI**: Use Montserrat for confident, modern headings (600–700 weight); DM Sans for friendly, approachable body text (400 weight). Generous whitespace reinforces freshness and clarity. Subtle shadows and soft corners create organic, welcoming feel. Every interaction should feel intentional and grounded in trustworthiness.
