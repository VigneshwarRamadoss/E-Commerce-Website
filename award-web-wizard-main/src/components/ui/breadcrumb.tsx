export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-[13px] font-medium text-muted-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center space-x-2">
            {item.href && !isLast ? (
              <a href={item.href} className="hover:text-burgundy transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-burgundy-dark">{item.label}</span>
            )}
            {!isLast && <span className="text-parchment">/</span>}
          </div>
        );
      })}
    </nav>
  );
}
