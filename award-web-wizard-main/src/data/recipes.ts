export const recipes = [
  {
    id: "1",
    name: "Summer Burrata & Fig Salad",
    slug: "summer-burrata-fig-salad",
    prepTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    ingredients: ["2", "5", "6"], // refs to product IDs
    steps: [
      "Slice figs into quarters.",
      "Tear burrata into bite-sized pieces.",
      "Arrange on a plate and drizzle with olive oil.",
    ],
  },
  {
    id: "2",
    name: "Classic Avocado Toast",
    slug: "classic-avocado-toast",
    prepTime: "10 min",
    servings: 1,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80",
    ingredients: ["3", "9"],
    steps: [
      "Toast the sourdough bread until golden.",
      "Mash avocado with a fork.",
      "Spread on toast and season.",
    ],
  },
];
