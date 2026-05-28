type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`mb-14 text-center md:mb-16 ${className}`} data-animate="title">
      <h2 className="text-3xl font-black uppercase tracking-tight text-theme-heading sm:text-4xl">
        {title}
      </h2>
      <div className="section-rule" aria-hidden />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-theme-accent sm:text-lg" data-animate="reveal">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
