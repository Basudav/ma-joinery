type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  title,
  description,
  align = "left",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const headingClass =
    as === "h1"
      ? "text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
      : "text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl";

  return (
    <div
      className={`mb-8 min-w-0 sm:mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <Heading className={headingClass}>{title}</Heading>
      {description ? (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed text-ink-soft lg:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
