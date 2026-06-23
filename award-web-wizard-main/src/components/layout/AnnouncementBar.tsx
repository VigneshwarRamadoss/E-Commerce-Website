export function AnnouncementBar() {
  return (
    <div className="bg-burgundy-dark text-cream/90 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="truncate">
            Free delivery over ₹699 · Same-day across Mumbai, Bengaluru & Delhi NCR
          </span>
        </div>
        <div className="hidden items-center gap-5 sm:flex">
          <a href="#" className="hover:text-gold transition-colors">
            Track order
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Help
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Download app
          </a>
        </div>
      </div>
    </div>
  );
}
