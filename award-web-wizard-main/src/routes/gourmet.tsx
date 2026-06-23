import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "../components/category/CategoryHero";
import { Breadcrumb } from "../components/ui/breadcrumb";
import { FilterSidebar } from "../components/category/FilterSidebar";
import { ProductGrid } from "../components/product/ProductGrid";
import { ProductCard } from "../components/product/ProductCard";
import { products } from "../data/products";

import catGourmet from "@/assets/cat-gourmet.jpg";

export const Route = createFileRoute("/gourmet")({
  head: () => ({
    meta: [{ title: "Gourmet & Specialty Food Online — Red B" }],
  }),
  component: Gourmet,
});

function Gourmet() {
  const gourmetProducts = products.filter((p) => p.category === "gourmet");

  return (
    <div className="pb-20">
      <CategoryHero title="The World's Finest, Curated for India" image={catGourmet} theme="dark" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: "Gourmet & Specialty" },
          ]}
        />

        <div className="mt-8 flex gap-8">
          <FilterSidebar />

          <div className="flex-1">
            <div className="mb-6 overflow-x-auto pb-4 no-scrollbar">
              <div className="flex gap-2 min-w-max">
                {[
                  "All",
                  "Cheese & Dairy",
                  "Charcuterie & Deli",
                  "Oils & Vinegars",
                  "Condiments & Sauces",
                  "Pasta & Grains",
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
              {gourmetProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </ProductGrid>
          </div>
        </div>
      </div>
    </div>
  );
}
