import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "../components/ui/breadcrumb";
import { FilterSidebar } from "../components/category/FilterSidebar";
import { ProductGrid } from "../components/product/ProductGrid";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/products";
import { Leaf, Sun, Droplets } from "lucide-react";

import heroProduce from "@/assets/hero-produce.jpg";
import storyFarmer from "@/assets/story-farmer.jpg";

export const Route = createFileRoute("/fresh-produce")({
  head: () => ({
    meta: [{ title: "Buy Fresh Fruits & Vegetables Online — Red B" }],
  }),
  component: FreshProduce,
});

function FreshProduce() {
  const freshProducts = products.filter((p) => p.category === "fresh-produce");

  return (
    <div className="pb-20 bg-background">
      {/* Custom Award-Winning Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden bg-cream-warm rounded-b-[2.5rem] lg:rounded-b-[4rem] border-b border-parchment">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none grain" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-burgundy/20 bg-burgundy/5 text-burgundy w-fit mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-[11px] font-semibold uppercase tracking-widest">
                  Grown with care
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-burgundy-dark font-light leading-[1.05] tracking-tight">
                Farm-fresh <br />
                <span className="italic text-burgundy">produce.</span>
              </h1>

              <p className="mt-6 text-[17px] text-muted-foreground leading-relaxed max-w-md">
                Hand-picked at peak ripeness from our network of 240+ certified farmers. Delivered
                to your door while the morning dew is still fresh.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm border border-parchment">
                    <Sun className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-burgundy-dark leading-tight">
                    Harvested
                    <br />
                    at dawn
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-burgundy/10"></div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-gold shadow-sm border border-parchment">
                    <Droplets className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-burgundy-dark leading-tight">
                    Ozone
                    <br />
                    washed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editorial Imagery */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0 pl-6 sm:pl-10 lg:pl-0">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src={heroProduce}
                  alt="Fresh produce harvest"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-dark/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Human Touch Floating Card */}
              <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 lg:-bottom-12 lg:-left-12 w-48 sm:w-64 p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-cream shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-parchment flex flex-col gap-3 group">
                <div className="w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative border border-parchment/50">
                  <img
                    src={storyFarmer}
                    alt="Farmer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-gold-deep uppercase tracking-wider mb-1">
                    Meet the growers
                  </p>
                  <p className="text-sm sm:text-base font-display text-burgundy-dark leading-tight italic">
                    "We grow every tomato like it's for our own family table."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Fresh Produce" },
          ]}
        />

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          <FilterSidebar />

          <div className="flex-1">
            <div className="mb-8 overflow-x-auto pb-4 no-scrollbar border-b border-parchment">
              <div className="flex gap-2 min-w-max">
                {[
                  "All",
                  "Fruits",
                  "Vegetables",
                  "Exotics & Imports",
                  "Organics",
                  "Cuts & Mixes",
                  "Salad Kits",
                ].map((chip, i) => (
                  <button
                    suppressHydrationWarning={true}
                    key={chip}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-burgundy text-cream shadow-md shadow-burgundy/20" : "bg-cream-warm text-burgundy-dark border border-parchment hover:border-gold hover:text-gold-deep"}`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <ProductGrid>
              {freshProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </ProductGrid>

            <div className="mt-16 flex justify-center">
              <button
                suppressHydrationWarning={true}
                className="px-8 py-3.5 rounded-full border-2 border-burgundy text-burgundy font-semibold text-sm hover:bg-burgundy hover:text-cream transition-all hover:shadow-[0_8px_30px_-10px_rgba(74,16,32,0.5)]"
              >
                Load more produce
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
