import { Check, ChevronDown } from "lucide-react";

export function FilterSidebar() {
  const filters = [
    {
      name: "Category",
      options: [
        "Fruits",
        "Vegetables",
        "Exotics & Imports",
        "Organics",
        "Cuts & Mixes",
        "Salad Kits",
      ],
    },
    {
      name: "Price Range",
      options: ["Under ₹99", "₹100 - ₹249", "₹250 - ₹499", "₹500+"],
    },
    {
      name: "Health Goal",
      options: [
        "High Protein",
        "Gut Health",
        "Immunity",
        "Weight Management",
        "Diabetic Friendly",
        "Kids Nutrition",
      ],
    },
    {
      name: "Dietary",
      options: ["Gluten-Free", "Vegan", "Dairy-Free", "Keto-Friendly"],
    },
  ];

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="font-display text-xl font-medium text-burgundy-dark">Filters</h3>
          <button
            suppressHydrationWarning={true}
            className="mt-2 text-sm text-muted-foreground hover:text-burgundy transition-colors"
          >
            Clear all
          </button>
        </div>

        {filters.map((group) => (
          <div key={group.name} className="border-t border-parchment pt-6">
            <button
              suppressHydrationWarning={true}
              className="flex w-full items-center justify-between text-sm font-semibold text-foreground hover:text-burgundy"
            >
              {group.name}
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="mt-4 space-y-3">
              {group.options.map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className="flex h-4 w-4 items-center justify-center rounded border border-parchment bg-background transition-colors group-hover:border-burgundy">
                    <Check className="h-3 w-3 text-transparent transition-colors group-hover:text-burgundy/50" />
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
