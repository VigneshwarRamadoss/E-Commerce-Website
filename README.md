<div align="center">

# 🍷 Red B — Premium Food E-Commerce

**The finest food, beautifully delivered.**

India's premium digital destination for farm-fresh produce, gourmet specialties, and artisan bakery — hand-picked, beautifully delivered.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TanStack](https://img.shields.io/badge/TanStack_Router-1.x-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)](https://tanstack.com/router)
[![License](https://img.shields.io/badge/License-Proprietary-6B1E2E?style=for-the-badge)](./LICENSE)

---

</div>

## ✨ Overview

**Red B** is an award-winning, premium food e-commerce platform built with cutting-edge web technologies. It delivers an immersive shopping experience with rich micro-animations, responsive design, and a nature-inspired aesthetic that connects users with their food's origins.

### 🎯 Key Features

| Feature | Description |
|:---|:---|
| 🥬 **Fresh Produce** | Farm-fresh fruits & vegetables with nature-inspired UI and human touch aesthetics |
| 🧀 **Gourmet Specialties** | Premium imported cheeses, honeys, oils & artisan ingredients |
| 🍞 **Artisan Bakery** | Handcrafted sourdough, pastries & freshly baked goods |
| 🛒 **Smart Diet Filters** | Filter by Organic, Vegan, Gluten-Free, Keto, High-Protein & more |
| 📖 **Recipe Hub** | Curated gourmet recipes featuring Red B products |
| 📱 **Mobile-First** | Fully responsive with bottom navigation & touch-optimized interactions |

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="140">

**Frontend**

</td>
<td align="center" width="140">

**Routing**

</td>
<td align="center" width="140">

**Styling**

</td>
<td align="center" width="140">

**UI Components**

</td>
<td align="center" width="140">

**Forms & Validation**

</td>
</tr>
<tr>
<td align="center">

React 19<br/>TypeScript 5.8<br/>Vite 8

</td>
<td align="center">

TanStack Router<br/>TanStack Start<br/>TanStack Query

</td>
<td align="center">

Tailwind CSS 4<br/>CSS Animations<br/>Google Fonts

</td>
<td align="center">

Radix UI<br/>Lucide Icons<br/>Embla Carousel

</td>
<td align="center">

React Hook Form<br/>Zod<br/>Sonner

</td>
</tr>
</table>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **bun** ≥ 1.x)

### Installation

```bash
# Clone the repository
git clone https://github.com/VigneshwarRamadoss/E-Commerce-Website.git
cd E-Commerce-Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint code quality checks |
| `npm run format` | Format code with Prettier |

---

## 📁 Project Structure

```
E-Commerce-Website/
├── src/
│   ├── assets/              # Static images (produce, bakery, gourmet)
│   ├── components/
│   │   ├── category/        # Category-specific components (Hero, Filters)
│   │   ├── layout/          # App shell (Header, Footer, Nav, Announcement)
│   │   ├── product/         # Product cards & grids
│   │   └── ui/              # Reusable design system (50+ Radix-based components)
│   ├── data/                # Product catalog, categories & recipes data
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities & error handling
│   ├── routes/              # TanStack file-based routes
│   │   ├── __root.tsx       # App shell layout
│   │   ├── index.tsx        # Home page (/)
│   │   ├── fresh-produce.tsx # Fresh produce (/fresh-produce)
│   │   ├── bakery.tsx       # Artisan bakery (/bakery)
│   │   ├── gourmet.tsx      # Gourmet specialties (/gourmet)
│   │   ├── shop.tsx         # Shop with diet filters (/shop)
│   │   ├── recipes.tsx      # Recipe hub (/recipes)
│   │   └── our-promise.tsx  # Brand promise (/our-promise)
│   ├── router.tsx           # Router configuration
│   ├── server.ts            # SSR server entry
│   └── styles.css           # Global styles & design tokens
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

---

## 🎨 Design Philosophy

Red B's interface is built on these principles:

- **🌿 Nature-Inspired Aesthetics** — Organic shapes, earthy color palettes, and imagery that evokes farm-to-table freshness
- **✨ Micro-Animations** — Subtle hover effects, smooth page transitions, and loading shimmer states
- **🖼️ Visual-First** — High-resolution product photography with gradient overlays and elegant typography
- **📐 Component-Driven** — 50+ reusable UI primitives built on Radix UI for accessibility and consistency
- **🔤 Premium Typography** — DM Sans, Montserrat & Playfair Display font pairing

---

## 🌐 Pages & Routes

| Route | Page | Highlights |
|:---|:---|:---|
| `/` | **Home** | Hero carousel, category verticals, diet filters, trust badges |
| `/fresh-produce` | **Fresh Produce** | Nature-themed hero, product grid with hover animations |
| `/bakery` | **Artisan Bakery** | Warm bakery aesthetics, sourdough & pastry showcase |
| `/gourmet` | **Gourmet** | Premium imported goods with elegant product cards |
| `/shop` | **Shop** | Full catalog with dynamic diet-based tab filtering |
| `/recipes` | **Recipes** | Curated recipe cards with high-res food photography |
| `/our-promise` | **Our Promise** | Brand story, quality commitment & organic partnerships |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software. All rights reserved.

**© 2026 Red B Foods Pvt. Ltd.**

---

<div align="center">

**Designed by [The Dot](https://thedot.in) · Made with ❤️ in India**

<sub>Built with React 19 · TanStack Router · Vite 8 · Tailwind CSS 4</sub>

</div>
