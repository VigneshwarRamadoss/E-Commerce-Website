import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "../components/category/CategoryHero";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { recipes } from "../data/recipes";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import { SafeImage } from "../components/ui/SafeImage";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [{ title: "Recipes & Ingredient Bundles — Red B" }],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  return (
    <div className="pb-20">
      <CategoryHero
        title="Cook something beautiful tonight"
        image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"
        theme="dark"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Recipes & Bundles" }]} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group overflow-hidden rounded-3xl border border-parchment bg-card hover:border-burgundy/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SafeImage
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-burgundy-dark">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-burgundy-dark">
                  {recipe.name}
                </h3>
                <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {recipe.prepTime}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> {recipe.servings} servings
                  </div>
                </div>
                <button
                  suppressHydrationWarning={true}
                  className="mt-6 w-full flex items-center justify-between px-5 py-3 rounded-xl border border-parchment font-medium text-sm text-burgundy hover:bg-cream-warm transition-colors"
                >
                  Shop All Ingredients
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
