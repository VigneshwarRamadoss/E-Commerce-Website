import { Heart, Plus } from "lucide-react";
import { SafeImage } from "../ui/SafeImage";

export interface ProductCardProps {
  id?: string;
  name: string;
  origin: string;
  price: number;
  mrp?: number;
  unit: string;
  badge?: string;
  image: string;
}

export function ProductCard({ name, origin, price, mrp, unit, badge, image }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-parchment bg-card transition-all duration-300 hover:-translate-y-1 hover:border-tan hover:shadow-[0_24px_60px_-24px_rgba(74,16,32,0.35)]">
      <div className="relative aspect-square overflow-hidden bg-cream-warm">
        <SafeImage
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={400}
          height={400}
          loading="lazy"
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-burgundy/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
            {badge}
          </span>
        )}
        <button
          suppressHydrationWarning={true}
          aria-label="Wishlist"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-cream/90 text-burgundy opacity-0 transition-all hover:bg-cream group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">
          {origin}
        </p>
        <h3 className="font-display line-clamp-2 text-[17px] font-medium leading-snug text-burgundy-dark">
          {name}
        </h3>
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-display text-lg font-medium text-burgundy">₹{price}</p>
              {mrp && <p className="text-xs text-muted-foreground line-through">₹{mrp}</p>}
            </div>
            <p className="text-[11px] text-muted-foreground">{unit}</p>
          </div>
          <button
            suppressHydrationWarning={true}
            className="inline-flex items-center gap-1 rounded-full border border-burgundy bg-cream px-3.5 py-1.5 text-xs font-semibold text-burgundy transition-all hover:bg-burgundy hover:text-cream"
          >
            <Plus className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
