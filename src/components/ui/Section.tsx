type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}
