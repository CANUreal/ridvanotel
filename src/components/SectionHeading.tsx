type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`mb-10 text-center sm:mb-14 md:mb-16 ${className}`} data-animate="title">
      <h2 className="text-2xl font-black uppercase tracking-tight text-theme-heading sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <div className="section-rule" aria-hidden />
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-xl px-1 text-sm leading-relaxed text-theme-accent sm:mt-5 sm:px-0 sm:text-base md:text-lg" data-animate="reveal">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
