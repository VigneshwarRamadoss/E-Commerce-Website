# 🍷 Red B Website — Architecture & Guide

Welcome to the documentation for **Red B**, India's premium digital destination for fresh produce, gourmet specialties, and artisan bakery. This guide outlines how the application functions for both users and developers, the technology stack powering it, and its routing architecture.

---

## 👥 How the Website Works for the User

Red B is designed as an immersive, highly aesthetic, and responsive e-commerce experience. Here is the user flow and feature breakdown:

1. **The Home Experience (`/`)**:
   - **Hero Visuals & Navigation**: A visually striking entry point introducing Red B's premium food brand.
   - **Curated Sections**: Prominently highlights key offerings: Fresh Produce, Gourmet Specialties, and Artisan Bakery.
   - **Interactive Elements**: Features dynamic carousels, responsive hovering, and high-resolution visuals that engage users.

2. **Browsing Categories & Fresh Produce**:
   - Users can jump to specific pages like **Fresh Produce** (`/fresh-produce`), **Artisan Bakery** (`/bakery`), or **Gourmet Specialties** (`/gourmet`) to explore hand-picked premium items.
   - These pages are loaded with micro-interactions, smooth hover transitions, and a premium natural/human-centered aesthetic.

3. **Gourmet Shop & Diet Filtration (`/shop`)**:
   - The catalog page allows users to view all premium offerings and filter them based on their dietary preferences (e.g., Organic, Vegan, Gluten-Free, Keto).
   - Dynamic tabs filter the products list instantly with layout animations.

4. **Recipes & Inspiration (`/recipes`)**:
   - A cooking hub where users can explore gourmet recipes that utilize Red B's high-quality produce and bakery items.

5. **Our Promise & Quality Commitment (`/our-promise`)**:
   - A dedicated brand story page explaining Red B's focus on quality, source-to-table logistics, and organic farming partners.

---

## 💻 How the Website Works for the Developer

Red B is built using a modern React framework with file-based routing and a component-driven architecture.

### Directory Structure & Core Concepts

- **File-Based Routing**: All application routes are located under `src/routes/`. The framework automatically resolves paths based on the filenames here (e.g., `src/routes/bakery.tsx` corresponds to the `/bakery` URL path).
- **App Layout Shell**: `src/routes/__root.tsx` defines the main layout shell, wrapping every page with the `AnnouncementBar`, `Header`, `Footer`, and `MobileBottomNav`. It also manages the React Query client context.
- **Auto-Generated Routing**: The route hierarchy is automatically mapped in `src/routeTree.gen.ts`. Developers do not need to construct the routing configuration manually.
- **Component Design System**: Reusable UI elements are defined in `src/components/ui/` using a Radix UI + Tailwind configuration. Specific layout and domain-specific components reside in `src/components/layout/`, `src/components/category/`, and `src/components/product/`.
- **Image Safety Loader**: To ensure visual excellence, the application implements `src/components/ui/SafeImage.tsx`, which serves fallback imagery and smooth loading transitions for product thumbnails and background media.

### Routing Table & Conventions

The routing files in `src/routes/` follow these TanStack Router conventions:

| File Name           | URL Path         | Description                              |
| :------------------ | :--------------- | :--------------------------------------- |
| `__root.tsx`        | N/A              | App shell / base layout wraps all routes |
| `index.tsx`         | `/`              | Home page                                |
| `fresh-produce.tsx` | `/fresh-produce` | Farm-fresh fruits & vegetables category  |
| `bakery.tsx`        | `/bakery`        | Artisan bakery products category         |
| `gourmet.tsx`       | `/gourmet`       | Gourmet specialties category             |
| `shop.tsx`          | `/shop`          | Unified shop directory with diet filters |
| `recipes.tsx`       | `/recipes`       | Gourmet recipes list                     |
| `our-promise.tsx`   | `/our-promise`   | Brand promise and about page             |

---

## 🛠️ Software & Technologies Used

The Red B web application leverages a modern, high-performance tech stack:

### Core Framework & Build Tools

- **React 19**: Powered by React's latest rendering capabilities.
- **Vite 8**: Next-generation frontend tooling providing ultra-fast Hot Module Replacement (HMR) and optimized production bundles.
- **TypeScript**: Ensures full type safety across components, routes, and data models.

### Routing & Data Fetching

- **TanStack Router (TanStack Start)**: High-performance, type-safe file-based router with built-in layout management and loaders.
- **TanStack Query (React Query)**: Powerful asynchronous state management, handling caching, query caching, and client-side data syncing.

### Styling & UI Components

- **Tailwind CSS (with Vite Plugin)**: Utility-first CSS framework enabling fast, modern, and fully responsive layouts.
- **Radix UI Primitives**: Accessible, unstyled UI primitives (Accordion, Dialog, Tabs, etc.) serving as the foundations of the custom design system.
- **Lucide React**: Clean, elegant icons used throughout the header, navigation, and badges.
- **Embla Carousel**: Fluid, native-feeling carousel slider component for product cards and banners.
- **Sonner**: Toast notification library for quick, beautiful UI alerts.

### State & Forms

- **React Hook Form**: Performant, flexible, and extensible forms.
- **Zod**: TypeScript-first schema declaration and validation library.

---

## 🚀 Running the Project

To run or build the application locally:

```bash
# Start development server with Vite (default http://localhost:5173)
npm run dev

# Format code files using Prettier
npm run format

# Run ESLint validation
npm run lint

# Build the production application bundle
npm run build
```
