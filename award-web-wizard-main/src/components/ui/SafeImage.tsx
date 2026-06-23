import { useState, useEffect, useRef } from "react";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackIcon?: React.ComponentType<{ className?: string }>;
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackIcon: FallbackIcon = Leaf,
  ...props
}: SafeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Sync complete state on mount or when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);

    const img = imgRef.current;
    if (img) {
      if (img.complete) {
        if (img.naturalWidth > 0) {
          setIsLoaded(true);
        } else {
          setHasError(true);
        }
      }
    }
  }, [src]);

  // Extract layout and layout-position classes to apply to outer wrapper
  const classes = className ? className.split(" ") : [];
  const layoutClasses = classes.filter(
    (c) =>
      c.startsWith("absolute") ||
      c.startsWith("relative") ||
      c.startsWith("fixed") ||
      c.startsWith("inset-") ||
      c.startsWith("-z-") ||
      c.startsWith("z-") ||
      c.startsWith("w-") ||
      c.startsWith("h-") ||
      c.startsWith("top-") ||
      c.startsWith("bottom-") ||
      c.startsWith("left-") ||
      c.startsWith("right-") ||
      c.startsWith("aspect-"),
  );

  // Remain visual/effects classes for the img tag
  const imgClasses = classes.filter((c) => !layoutClasses.includes(c));

  return (
    <div
      className={cn(
        "overflow-hidden flex items-center justify-center bg-cream-warm transition-colors duration-500 rounded-[inherit]",
        layoutClasses.join(" "),
        isLoaded && "bg-transparent",
      )}
    >
      {/* Shimmer Skeleton Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-parchment/30 via-cream-warm to-parchment/30 animate-pulse z-0" />
      )}

      {/* Graceful Fallback if image fails to load */}
      {hasError ? (
        <div className="flex flex-col items-center justify-center text-burgundy-dark/30 gap-2 p-4 text-center w-full h-full select-none rounded-[inherit]">
          <FallbackIcon className="w-8 h-8 opacity-40 animate-pulse text-gold" />
          <span className="text-[10px] uppercase tracking-wider font-semibold opacity-60 text-burgundy">
            Premium Selection
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "object-cover w-full h-full transition-all duration-700",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
            imgClasses.join(" "),
          )}
          {...props}
        />
      )}
    </div>
  );
}
