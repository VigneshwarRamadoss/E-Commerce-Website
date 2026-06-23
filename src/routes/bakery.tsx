import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "../components/category/CategoryHero";
import { Breadcrumb } from "../components/ui/breadcrumb";
import { FilterSidebar } from "../components/category/FilterSidebar";
import { ProductGrid } from "../components/product/ProductGrid";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/products";

import catBakery from "@/assets/cat-bakery.jpg";

export const Route = createFileRoute("/bakery")({
  head: () => ({
    meta: [{ title: "Artisan Bakery & Sourdough Online — Red B" }],
  }),
  component: Bakery,
});

function Bakery() {
  const bakeryProducts = products.filter((p) => p.category === "bakery");

  return (
    <div className="pb-20">
      <CategoryHero
        title="Baked This Morning, at Your Door by Noon"
        image={catBakery}
        theme="warm"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Bakery & Artisan" },
          ]}
        />

        <div className="mt-8 flex gap-8">
          <FilterSidebar />

          <div className="flex-1">
            <div className="mb-6 overflow-x-auto pb-4 no-scrollbar">
              <div className="flex gap-2 min-w-max">
                {[
                  "All",
                  "Sourdough & Breads",
                  "Croissants & Pastries",
                  "Cakes & Desserts",
                  "Granola & Muesli",
                  "Jams & Spreads",
                ].map((chip, i) => (
                  <button
                    suppressHydrationWarning={true}
                    key={chip}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-burgundy text-cream" : "bg-cream-warm text-burgundy-dark hover:bg-parchment"}`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <ProductGrid>
              {bakeryProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </ProductGrid>

            {/* Weekly box CTA */}
            <div className="mt-16 bg-cream-warm rounded-3xl p-8 sm:p-12 text-center border border-parchment flex flex-col items-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy">
                Subscription
              </p>
              <h3 className="font-display text-3xl font-medium mt-3 text-burgundy-dark">
                The Sunday Morning Box
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Fresh croissants, a sourdough boule, and seasonal jam delivered every Sunday by 8
                AM.
              </p>
              <button
                suppressHydrationWarning={true}
                className="mt-6 px-6 py-3 bg-burgundy text-cream font-semibold rounded-full hover:bg-burgundy-dark transition-colors"
              >
                Subscribe to box
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
