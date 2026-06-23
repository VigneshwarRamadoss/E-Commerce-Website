import { createFileRoute } from "@tanstack/react-router";
import { CategoryHero } from "../components/category/CategoryHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "../components/ui/SafeImage";

import catFresh from "@/assets/cat-fresh.jpg";
import catGourmet from "@/assets/cat-gourmet.jpg";
import catBakery from "@/assets/cat-bakery.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [{ title: "Shop Premium Food Online — Red B" }],
  }),
  component: ShopComponent,
});

const verticals = [
  {
    tag: "01 — Fresh Produce",
    title: "Farm-fresh fruits & vegetables",
    copy: "Hand-picked at peak ripeness from our network of 240+ certified farmers.",
    image: catFresh,
    accent: "from-crimson/40 to-burgundy/60",
    href: "/fresh-produce",
  },
  {
    tag: "02 — Gourmet & Specialty",
    title: "Cheese, charcuterie & pantry",
    copy: "Aged cheeses, cured meats, oils, vinegars and imported pantry essentials.",
    image: catGourmet,
    accent: "from-gold/40 to-burgundy-dark/70",
    href: "/gourmet",
  },
  {
    tag: "03 — Bakery & Artisan",
    title: "Sourdough, pastries & jams",
    copy: "Baked the morning of delivery by small-batch artisan bakers.",
    image: catBakery,
    accent: "from-terracotta/40 to-burgundy/60",
    href: "/bakery",
  },
];

function ShopComponent() {
  return (
    <div className="pb-20">
      <CategoryHero title="Explore our three pantries" image={catFresh} theme="dark" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeader
          eyebrow="Three pantries, one delivery"
          title="Shop by what's on your table tonight"
          copy="Mix from our three premium verticals in a single basket — produce, gourmet, bakery — all curated by people who actually cook."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {verticals.map((v) => (
            <a
              key={v.title}
              href={v.href}
              className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-burgundy-dark p-6 text-cream"
            >
              <img
                src={v.image}
                alt={v.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-t ${v.accent} via-burgundy-dark/30 to-burgundy-dark/10`}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-burgundy-dark/85 via-burgundy-dark/30 to-transparent" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                {v.tag}
              </p>
              <h3 className="font-display mt-2 text-3xl font-medium leading-tight">{v.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-cream/80">{v.copy}</p>
              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-4 py-2 text-xs font-semibold text-cream backdrop-blur-sm transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-burgundy-dark">
                Explore the aisle
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-cream-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow="Shop by diet" title="Curated for your health goals" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                title: "High Protein",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
              },
              {
                title: "Gut Health",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
              },
              {
                title: "Immunity",
                image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
              },
              {
                title: "Weight Management",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
              },
              {
                title: "Diabetic Friendly",
                image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=800&q=80",
              },
              {
                title: "Kids Nutrition",
                image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
              },
            ].map((goal) => (
              <div
                key={goal.title}
                className="group relative isolate aspect-square overflow-hidden rounded-3xl flex flex-col justify-end p-6 border border-parchment hover:border-gold transition-colors cursor-pointer text-cream"
              >
                <img
                  src={goal.image}
                  alt={goal.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-burgundy-dark/95 via-burgundy-dark/45 to-transparent" />
                <h4 className="font-display text-xl font-medium text-cream group-hover:text-gold transition-colors">
                  {goal.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
