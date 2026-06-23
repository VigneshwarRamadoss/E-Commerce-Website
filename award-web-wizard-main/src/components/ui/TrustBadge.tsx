import { LucideIcon } from "lucide-react";

export interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  copy: string;
  variant?: "dark" | "offer" | "health" | "membership";
}

export function TrustBadge({ icon: Icon, title, copy, variant = "dark" }: TrustBadgeProps) {
  const variants = {
    dark: "bg-card border-parchment text-burgundy-dark hover:bg-burgundy hover:text-cream",
    offer: "bg-crimson/10 border-crimson/20 text-crimson hover:bg-crimson hover:text-cream",
    health: "bg-cream-warm border-cream/50 text-burgundy hover:bg-cream hover:border-gold",
    membership:
      "bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30 text-burgundy-dark hover:from-gold/30 hover:to-gold/10",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 transition-colors ${variants[variant]}`}
    >
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-background/50 backdrop-blur-sm transition-colors group-hover:bg-background/20">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-medium leading-snug">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed opacity-80">{copy}</p>
        </div>
      </div>
    </div>
  );
}
