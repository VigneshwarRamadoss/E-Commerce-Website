import { SafeImage } from "../ui/SafeImage";

export interface CategoryHeroProps {
  title: string;
  image: string;
  theme?: "burgundy" | "dark" | "warm";
}

export function CategoryHero({ title, image, theme = "burgundy" }: CategoryHeroProps) {
  const overlayClasses = {
    burgundy: "from-burgundy/90 via-burgundy/60 to-transparent",
    dark: "from-espresso/90 via-espresso/60 to-transparent",
    warm: "from-terracotta/80 via-terracotta/40 to-transparent",
  };

  return (
    <div className="relative h-40 sm:h-56 md:h-64 overflow-hidden rounded-2xl md:rounded-[2rem] mx-4 sm:mx-6 mt-4 sm:mt-6 group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClasses[theme]}`} />
      <div className="absolute inset-0 flex items-center p-6 sm:p-12">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream font-light tracking-tight drop-shadow-md">
          {title}
        </h1>
      </div>
    </div>
  );
}
