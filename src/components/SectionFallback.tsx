interface SectionFallbackProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionFallback({ title, description, className }: SectionFallbackProps) {
  return (
    <section
      aria-busy="true"
      className={`relative py-24 bg-[#002B5B] text-white transition-colors duration-300 ${className ?? ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">{title}</p>
        {description ? (
          <p className="mt-4 max-w-2xl text-white/60">{description}</p>
        ) : null}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="h-40 rounded-3xl bg-white/10 backdrop-blur-sm animate-pulse" />
          <div className="h-40 rounded-3xl bg-white/10 backdrop-blur-sm animate-pulse delay-150" />
        </div>
      </div>
    </section>
  );
}
