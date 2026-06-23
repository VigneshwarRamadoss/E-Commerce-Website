import { Home, Store, Search, ShoppingBag, User } from "lucide-react";

export function MobileBottomNav() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Store, label: "Shop", path: "/shop" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: ShoppingBag, label: "Cart", path: "/cart", badge: 3 },
    { icon: User, label: "Account", path: "/account" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-parchment bg-card px-2 pb-safe sm:hidden">
      {navItems.map((item) => {
        const isActive =
          currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
        return (
          <a
            key={item.label}
            href={item.path}
            className={`relative flex flex-col items-center justify-center w-full h-full gap-1 ${
              isActive ? "text-burgundy" : "text-muted-foreground hover:text-burgundy/80"
            }`}
          >
            <div className="relative">
              <item.icon
                className={`h-5 w-5 transition-transform ${isActive ? "scale-110" : ""}`}
              />
              {item.badge && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 text-[9px] font-bold text-burgundy-dark">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
            {isActive && (
              <span className="absolute -top-[1px] left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-b-full bg-burgundy" />
            )}
          </a>
        );
      })}
    </div>
  );
}
