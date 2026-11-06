import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function ServiceAreas() {
  return (
    <Section>
      <Container>
        <SectionHeading title="Where I work" />
        <div className="flex flex-wrap gap-3">
          {site.areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-line px-4 py-2 text-base text-ink"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          Not sure if I cover you? Send me a message.
        </p>
      </Container>
    </Section>
  );
}
