import { useState, useEffect } from "react";
import { Search, ShoppingBag, User, MapPin, ChevronRight } from "lucide-react";
import { useLocation } from "@tanstack/react-router";

function Logo({ scrolled }: { scrolled?: boolean }) {
  return (
    <span
      className={`grid h-9 w-9 place-items-center rounded-full text-cream shadow-[0_0_0_4px] transition-all duration-300 ${
        scrolled ? "bg-burgundy shadow-cream-warm" : "bg-gold text-burgundy-dark shadow-cream/10"
      }`}
    >
      <span className="font-display text-lg font-semibold leading-none">R</span>
    </span>
  );
}

function IconBtn({
  children,
  label,
  scrolled,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  scrolled?: boolean;
  className?: string;
}) {
  return (
    <button
      suppressHydrationWarning={true}
      aria-label={label}
      className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${
        scrolled
          ? "text-foreground/80 hover:bg-cream-warm hover:text-burgundy"
          : "text-cream/80 hover:bg-cream/10 hover:text-gold"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDarkBackground = isHome && !scrolled;
  const useDarkText = !isDarkBackground;

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled || !isHome ? "bg-cream/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:py-5">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Logo scrolled={useDarkText} />
          <div className="flex flex-col justify-center">
            <span
              className={`font-display text-2xl font-medium tracking-tight leading-none transition-colors duration-300 ${
                useDarkText ? "text-burgundy" : "text-cream"
              }`}
            >
              Red B
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.2em] mt-1 font-semibold transition-colors duration-300 ${
                useDarkText ? "text-burgundy-dark/60" : "text-gold"
              }`}
            >
              Finest food, delivered.
            </span>
          </div>
        </a>

        <nav className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex">
          {[
            { label: "Shop", path: "/shop" },
            { label: "Fresh Produce", path: "/fresh-produce" },
            { label: "Gourmet", path: "/gourmet" },
            { label: "Bakery", path: "/bakery" },
            { label: "Recipes", path: "/recipes" },
            { label: "Our Promise", path: "/our-promise" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.path}
              className={`relative group transition-colors duration-300 ${
                useDarkText
                  ? "text-foreground/80 hover:text-burgundy"
                  : "text-cream/80 hover:text-gold"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${useDarkText ? "bg-burgundy" : "bg-gold"}`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            suppressHydrationWarning={true}
            className={`hidden h-10 items-center gap-2 rounded-full border transition-all duration-300 px-3.5 text-sm sm:flex ${
              useDarkText
                ? "border-parchment bg-card text-muted-foreground hover:border-tan hover:text-foreground"
                : "border-cream/20 bg-cream/10 text-cream/90 hover:bg-cream/20 hover:text-cream"
            }`}
          >
            <MapPin
              className={`h-4 w-4 transition-colors duration-300 ${
                useDarkText ? "text-burgundy" : "text-gold"
              }`}
            />
            <span>400001</span>
            <ChevronRight className="h-3.5 w-3.5 -rotate-90" />
          </button>
          <div className="relative hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Search fresh produce..."
              suppressHydrationWarning
              className={`w-48 xl:w-64 rounded-full border bg-transparent pl-4 pr-10 py-2 text-sm outline-none transition-colors ${
                useDarkText
                  ? "border-parchment text-foreground placeholder:text-muted-foreground focus:border-burgundy focus:bg-cream"
                  : "border-cream/30 text-cream placeholder:text-cream/70 focus:border-gold focus:bg-cream/10"
              }`}
            />
            <Search className="absolute right-3 h-4 w-4 text-current opacity-70 pointer-events-none" />
          </div>
          <IconBtn label="Search" scrolled={useDarkText} className="lg:hidden">
            <Search className="h-5 w-5" />
          </IconBtn>
          <IconBtn label="Account" scrolled={useDarkText} className="hidden sm:flex">
            <User className="h-5 w-5" />
          </IconBtn>
          <button
            suppressHydrationWarning={true}
            className={`relative flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-300 ${
              useDarkText
                ? "bg-burgundy text-cream hover:bg-burgundy-dark"
                : "bg-cream text-burgundy hover:bg-cream-warm shadow-lg shadow-black/10"
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition-colors duration-300 ${
                useDarkText ? "bg-gold text-burgundy-dark" : "bg-burgundy text-cream"
              }`}
            >
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
