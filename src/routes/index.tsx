import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plus,
  Star,
  Leaf,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock,
  Heart,
  ArrowUpRight,
  ArrowRight,
  Snowflake,
  Droplet,
  Apple,
  Carrot,
  Wine,
  Croissant,
  ShoppingBag,
  Store,
  Search,
} from "lucide-react";

import { SectionHeader } from "../components/ui/SectionHeader";
import { ProductCard } from "../components/product/ProductCard";
import { SafeImage } from "../components/ui/SafeImage";
import { products } from "../data/products";
import { recipes } from "../data/recipes";

import heroProduce from "@/assets/hero-produce.jpg";
import catFresh from "@/assets/cat-fresh.jpg";
import catGourmet from "@/assets/cat-gourmet.jpg";
import catBakery from "@/assets/cat-bakery.jpg";
import pPom from "@/assets/p-pomegranate.jpg";
import pParm from "@/assets/p-parmesan.jpg";
import pSour from "@/assets/p-sourdough.jpg";
import pFigs from "@/assets/p-figs.jpg";
import pHoney from "@/assets/p-honey.jpg";
import storyFarmer from "@/assets/story-farmer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red B — The finest food, beautifully delivered" },
      {
        name: "description",
        content:
          "Premium fresh produce, gourmet specialties, and artisan bakery — hand-picked from trusted farms and makers, delivered to your door.",
      },
      { property: "og:title", content: "Red B — The finest food, beautifully delivered" },
      {
        property: "og:description",
        content: "Premium fresh produce, gourmet & artisan bakery, delivered across India.",
      },
    ],
  }),
  component: Home,
});

/* ---------------- data ---------------- */

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

const promises = [
  {
    icon: Leaf,
    title: "Ozone-washed, lab-tested",
    copy: "Every batch screened for residue. Cold-chain from farm to door.",
  },
  {
    icon: ShieldCheck,
    title: "100% money-back",
    copy: "Don't love it? We refund — no questions, no photos required.",
  },
  {
    icon: Truck,
    title: "Slots from 90 minutes",
    copy: "Same-day, evening, or schedule weekly. You pick the window.",
  },
  {
    icon: Sparkles,
    title: "Plastic-neutral",
    copy: "Returnable crates. Every order offsets equivalent plastic.",
  },
];

const testimonials = [
  {
    quote:
      "The figs arrived looking like they were painted. I'm never going back to the supermarket aisle.",
    name: "Aanya Mehra",
    role: "Chef, Mumbai",
  },
  {
    quote: "The bakery box every Sunday morning is the most civilised thing in my week.",
    name: "Rohan Kapoor",
    role: "Subscriber since '24",
  },
  {
    quote: "I trust Red B with the produce I serve to my children. That's everything.",
    name: "Dr. Priya Iyer",
    role: "Bengaluru",
  },
];

const marquee = [
  "Same-day delivery in Mumbai · Bengaluru · Delhi NCR",
  "Free shipping over ₹699",
  "Subscribe & save 15%",
  "Plastic-neutral every order",
  "Hand-picked at sunrise",
];

/* ---------------- page ---------------- */

function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <TrustMarquee />
      <Verticals />
      <DailyEssentials />
      <HealthGoals />
      <FeaturedProducts />
      <PromiseSection />
      <SubscriptionStrip />
      <RecipesAndBundles />
      <Story />
      <Testimonials />
      <Membership />
    </div>
  );
}

/* ---------------- sections ---------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden -mt-[104px] lg:-mt-[112px]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 -z-10 bg-burgundy-dark">
        <SafeImage
          src={heroProduce}
          alt="Editorial overhead arrangement of pomegranates, figs, plums and dark grapes on burgundy linen"
          className="h-full w-full object-cover opacity-70"
          width={2400}
          height={1600}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/95 via-burgundy-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/70 via-transparent to-transparent" />
        <div className="absolute inset-0 grain opacity-60 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Floating Labels (Reduced to 2) */}
      <div className="absolute right-[43%] top-[45%] hidden items-center gap-3 rounded-full border border-gold/30 bg-burgundy-dark/50 px-4 py-2 backdrop-blur-md lg:flex">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/50 text-gold">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <span className="text-xs font-medium text-cream leading-tight">
          Farm
          <br />
          traceable
        </span>
      </div>

      <div className="absolute right-[33%] bottom-[25%] hidden items-center gap-3 rounded-full border border-gold/30 bg-burgundy-dark/50 px-4 py-2 backdrop-blur-md lg:flex">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/50 text-gold">
          <Clock className="h-3.5 w-3.5" />
        </div>
        <span className="text-xs font-medium text-cream leading-tight">
          90-min
          <br />
          delivery slots
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col gap-10 px-4 pt-28 pb-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-36">
        {/* Left Column */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center mt-10 lg:mt-0">
          <div className="flex items-center gap-3 text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-semibold">
            <span className="w-10 h-px bg-gold"></span>
            HAND-PICKED PREMIUM PRODUCE
          </div>

          <h1 className="font-display mt-4 text-balance text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[1.05] tracking-tight text-cream drop-shadow-md max-w-2xl">
            The finest food, <br />
            <span className="italic text-cream">beautifully delivered.</span>
          </h1>

          {/* Mobile Search Bar (Stacked under headline) */}
          <div className="mt-6 relative lg:hidden w-full max-w-md">
            <input
              suppressHydrationWarning={true}
              type="text"
              placeholder="Search fresh produce, bakery..."
              className="w-full rounded-full border border-cream/30 bg-cream/10 pl-5 pr-12 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/70 focus:border-gold focus:bg-cream/20 backdrop-blur-sm"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-gold text-burgundy-dark">
              <Search className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-6 lg:mt-5 max-w-xl text-pretty text-[17px] lg:text-[18px] leading-relaxed text-cream/80 font-light">
            Premium fruits, crisp vegetables, artisan bakery & gourmet essentials from trusted farms
            and makers — delivered fresh, fast, and with care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/fresh-produce"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-burgundy-dark transition-all duration-300 hover:bg-gold-deep hover:scale-[1.02] hover:shadow-[0_8px_30px_-10px_rgba(201,148,58,0.5)] w-full sm:w-auto"
            >
              Shop fresh produce{" "}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Category Pills (Secondary) */}
          <div className="mt-10 flex overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory gap-2.5 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {[
              { label: "Fruits", icon: Apple },
              { label: "Vegetables", icon: Carrot },
              { label: "Gourmet", icon: Wine },
              { label: "Bakery", icon: Croissant },
              { label: "Bestsellers", icon: Star },
            ].map(({ label, icon: Icon }) => (
              <button
                suppressHydrationWarning={true}
                key={label}
                className="group shrink-0 snap-start flex items-center gap-2 rounded-xl border border-cream/15 bg-burgundy-dark/30 px-3.5 py-2 text-sm font-medium text-cream/70 backdrop-blur-sm hover:border-gold/50 hover:text-cream transition-colors"
              >
                <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:text-gold transition-colors" />{" "}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Card */}
        <div className="relative mt-8 flex w-full max-w-md items-center justify-center self-center lg:col-span-5 xl:col-span-6 lg:mt-0 lg:justify-end">
          <div className="w-[320px] lg:w-[340px] rounded-[1.5rem] bg-cream p-5 lg:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] relative">
            <div className="flex justify-between items-start mb-2">
              <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-burgundy-dark">
                Just Landed
              </span>
              <button
                suppressHydrationWarning={true}
                className="text-burgundy/40 hover:text-burgundy transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="my-5 aspect-[4/3] mix-blend-multiply overflow-hidden rounded-xl bg-transparent flex items-center justify-center">
              <SafeImage
                src={pPom}
                className="w-[120%] h-[120%] object-cover object-center translate-y-2 hover:scale-105 transition-transform duration-700"
                alt="Pomegranate"
              />
            </div>

            <h3 className="font-display text-3xl text-burgundy-dark font-medium leading-tight">
              Bhagwa
              <br />
              Pomegranate
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Large, juicy & naturally sweet.</p>

            <div className="flex items-end justify-between mt-4 border-t border-parchment pt-4">
              <div>
                <p className="text-[11px] font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                  500g
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-3xl font-semibold text-burgundy-dark">
                    ₹249
                  </span>
                  <span className="text-sm text-muted-foreground line-through">₹299</span>
                  <span className="rounded bg-burgundy text-cream px-1.5 py-0.5 text-[10px] font-bold">
                    17% OFF
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-12 w-24 shrink-0 items-center justify-between rounded-xl bg-cream-warm px-3 border border-parchment">
                <button
                  suppressHydrationWarning={true}
                  className="text-burgundy hover:text-burgundy-dark transition-colors font-medium text-lg"
                >
                  -
                </button>
                <span className="text-base font-semibold text-burgundy-dark">1</span>
                <button
                  suppressHydrationWarning={true}
                  className="text-burgundy hover:text-burgundy-dark transition-colors font-medium text-lg"
                >
                  +
                </button>
              </div>
              <button
                suppressHydrationWarning={true}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-burgundy-dark text-base font-semibold text-cream transition-all hover:bg-burgundy shadow-lg shadow-burgundy-dark/20"
              >
                <ShoppingBag className="w-4 h-4" /> Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="col-span-full mt-10 lg:mt-auto border-t border-cream/10 pt-8 pb-4 grid grid-cols-2 md:flex flex-wrap items-center justify-around gap-y-8 gap-x-4 px-2">
          <div className="flex items-center gap-4">
            <div className="text-gold">
              <Store className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display text-cream font-medium leading-none">
                240+
              </p>
              <p className="text-[10px] sm:text-[11px] text-cream/70 uppercase tracking-[0.2em] mt-1.5">
                Trusted Farms
              </p>
            </div>
          </div>

          <div className="w-px h-12 bg-cream/20 hidden md:block"></div>

          <div className="flex items-center gap-4">
            <div className="text-gold">
              <Clock className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display text-cream font-medium leading-none">
                90 min
              </p>
              <p className="text-[10px] sm:text-[11px] text-cream/70 uppercase tracking-[0.2em] mt-1.5">
                Fastest Slot
              </p>
            </div>
          </div>

          <div className="w-px h-12 bg-cream/20 hidden md:block"></div>

          <div className="flex items-center gap-4 col-span-2 justify-center md:justify-start mt-4 md:mt-0">
            <div className="text-gold">
              <Star className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-display text-cream font-medium leading-none flex items-center gap-1">
                4.9
                <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-cream" />
              </p>
              <p className="text-[10px] sm:text-[11px] text-cream/70 uppercase tracking-[0.2em] mt-1.5">
                12k Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustMarquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-parchment bg-burgundy text-cream overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3.5">
        {items.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 text-sm font-medium">
            <span className="text-gold">✦</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Verticals() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="Three pantries, one delivery"
        title="Shop by what's on your table tonight"
        copy="Mix from our three premium verticals in a single basket — produce, gourmet, bakery — all curated by people who actually cook."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {verticals.map((v) => (
          <Link
            key={v.title}
            to={v.href}
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
          </Link>
        ))}
      </div>
    </section>
  );
}

function DailyEssentials() {
  const essentials = products.slice(0, 5); // Pick some for horizontal row
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex justify-between items-end mb-10 border-b border-parchment pb-4">
        <SectionHeader eyebrow="Stock your pantry" title="Daily Essentials" />
        <Link
          to="/shop"
          className="text-burgundy font-medium hover:text-burgundy-dark transition-colors flex items-center gap-1 text-sm hidden sm:flex"
        >
          Shop all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
        {essentials.map((p) => (
          <div key={p.id} className="w-[240px] shrink-0 snap-start">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}

function HealthGoals() {
  const goals = [
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
  ];
  return (
    <section className="bg-cream-warm py-20 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Shop by diet" title="Curated for your health goals" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {goals.map((goal) => (
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
              <h3 className="font-display text-xl font-medium text-cream group-hover:text-gold transition-colors">
                {goal.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const featured = products.slice(5, 10);
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-burgundy">
              In season this week
            </p>
            <h2 className="font-display mt-3 text-balance text-4xl font-light leading-[1.05] text-burgundy-dark sm:text-5xl">
              <span className="italic">A short list,</span> hand-picked.
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy-dark sm:inline-flex"
          >
            View all 320+
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="The Red B promise"
        title="Quality we stake our name on"
        copy="Every box leaves our cold-room only if it'd pass our own dinner table."
      />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {promises.map(({ icon: Icon, title, copy }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-parchment bg-card p-6 transition-colors hover:bg-burgundy hover:text-cream"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-cream-warm text-burgundy transition-colors group-hover:bg-gold group-hover:text-burgundy-dark">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display mt-5 text-xl font-medium leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-cream/80">
              {copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubscriptionStrip() {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-burgundy-dark px-6 py-14 text-cream sm:px-12 lg:px-16 lg:py-20 grain">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-crimson/30 blur-3xl" />

        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Weekly Basket
            </p>
            <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[1.05] sm:text-5xl">
              Skip the planning.
              <span className="block italic text-gold">A curated basket, every week.</span>
            </h2>
            <p className="mt-5 max-w-lg text-cream/80">
              Choose a size, pick a delivery day, edit anytime. Subscribers save 15% and get first
              dibs on rare-season produce.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-burgundy-dark transition-colors hover:bg-cream"
              >
                Build my basket
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[pFigs, pHoney, pSour, pParm, pPom, catFresh].map((src, i) => (
              <div
                key={i}
                className={`aspect-square overflow-hidden rounded-2xl border border-cream/10 ${
                  i % 2 ? "translate-y-4" : ""
                }`}
              >
                <SafeImage
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecipesAndBundles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="From our kitchen"
        title="Recipes & Bundles"
        copy="One click adds all ingredients to your cart."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {recipes.slice(0, 2).map((recipe) => (
          <div
            key={recipe.id}
            className="group overflow-hidden rounded-3xl border border-parchment bg-card hover:border-burgundy/30 transition-colors flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden">
              <SafeImage
                src={recipe.image}
                alt={recipe.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:w-3/5 flex flex-col justify-center">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-burgundy mb-2">
                {recipe.prepTime} · {recipe.difficulty}
              </p>
              <h3 className="font-display text-2xl font-medium text-burgundy-dark leading-tight">
                {recipe.name}
              </h3>
              <Link
                to="/recipes"
                className="mt-6 flex items-center justify-between px-5 py-3 rounded-xl border border-parchment font-medium text-sm text-burgundy hover:bg-cream-warm transition-colors w-max"
              >
                View Recipe & Shop
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section
      id="story"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28 border-t border-parchment"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] grain">
            <SafeImage
              src={storyFarmer}
              alt="A farmer holding freshly harvested herbs at golden hour"
              className="aspect-[5/6] w-full object-cover"
              width={1280}
              height={960}
              loading="lazy"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy">
            From the ground up
          </p>
          <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[1.05] text-burgundy-dark sm:text-5xl">
            We know <span className="italic">every farm</span>, every baker, every wheel of cheese.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Red B isn't a marketplace. We work directly with 240+ small farmers across India and
            source gourmet specialties from a tight roster of makers we've personally visited. Every
            product page tells you exactly where it came from and who grew it.
          </p>

          <ul className="mt-8 space-y-5">
            {[
              ["Pre-dawn harvest", "Cut, washed and graded before sunrise."],
              ["Cold-chain from hour one", "Refrigerated within 90 minutes of harvest."],
              ["Quality-checked twice", "Once at the farm, again at our hub."],
              ["At your door fresh", "Same-day or next-morning, never sitting on shelves."],
            ].map(([t, c], i) => (
              <li key={t} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full border border-burgundy/15 text-sm font-medium text-burgundy">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium text-burgundy-dark">{t}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{c}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream-warm">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeader eyebrow="Loved by 12,000 households" title="The kindest reviews" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-parchment bg-card p-7"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display mt-5 flex-1 text-xl font-light leading-snug text-burgundy-dark">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-parchment pt-4">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-10 rounded-[2rem] border border-parchment bg-card p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:p-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            Red B Membership
          </p>
          <h2 className="font-display mt-4 text-balance text-4xl font-light leading-[1.05] text-burgundy-dark sm:text-5xl">
            More than a discount.
            <span className="block italic text-burgundy">A standing reservation.</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Members get priority delivery slots, 10% off every order, exclusive small-batch
            releases, and a free seasonal hamper four times a year.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-burgundy-dark"
          >
            Become a member · ₹999/year
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-4 self-center sm:grid-cols-2">
          {[
            "Priority 60-minute slots",
            "10% off every order",
            "Seasonal hamper × 4",
            "Members-only releases",
            "Free returns, always",
            "Concierge support",
          ].map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border border-parchment bg-cream-warm/40 p-4 text-sm font-medium text-burgundy-dark"
            >
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold text-burgundy-dark">
                <Sparkles className="h-3 w-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
