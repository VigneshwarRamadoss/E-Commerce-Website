export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-burgundy">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-balance text-4xl font-light leading-[1.05] text-burgundy-dark sm:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{copy}</p>}
    </div>
  );
}
