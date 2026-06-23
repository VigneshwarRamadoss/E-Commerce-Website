import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-burgundy-dark text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-burgundy-dark">
                <span className="font-display text-lg font-semibold leading-none">R</span>
              </span>
              <span className="font-display text-2xl font-medium text-cream">Red B</span>
            </div>
            <p className="font-display mt-6 max-w-sm text-xl font-light italic leading-snug text-cream">
              "The finest food, beautifully delivered."
            </p>
            <form className="mt-7 flex max-w-sm overflow-hidden rounded-full border border-cream/20 bg-cream/5">
              <input
                suppressHydrationWarning={true}
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:outline-none"
              />
              <button
                suppressHydrationWarning={true}
                type="button"
                className="shrink-0 bg-gold px-5 text-sm font-semibold text-burgundy-dark transition-colors hover:bg-cream"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-colors hover:bg-gold hover:text-burgundy-dark"
                  aria-label="social"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Shop",
              links: [
                { name: "Fresh Produce", path: "/fresh-produce" },
                { name: "Gourmet", path: "/gourmet" },
                { name: "Bakery", path: "/bakery" },
                { name: "Recipes", path: "/recipes" },
                { name: "Offers", path: "#" },
                { name: "Gift cards", path: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "Our Promise", path: "/our-promise" },
                { name: "Sourcing", path: "#" },
                { name: "Sustainability", path: "#" },
                { name: "Careers", path: "#" },
                { name: "Press", path: "#" },
                { name: "Blog", path: "#" },
              ],
            },
            {
              title: "Support",
              links: [
                { name: "Help center", path: "#" },
                { name: "Order tracking", path: "#" },
                { name: "Returns", path: "#" },
                { name: "Delivery zones", path: "#" },
                { name: "Contact", path: "#" },
                { name: "WhatsApp", path: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <a href={l.path} className="transition-colors hover:text-gold">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-7 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>© 2026 Red B Foods Pvt. Ltd. · Designed by The Dot · Made with care in India.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <a href="#" className="hover:text-gold">
              FSSAI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
