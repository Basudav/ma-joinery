import { CircleCheck, FileText, Shield, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Fully insured",
    text: "Fully insured, so you can book with confidence.",
    icon: Shield,
  },
  {
    title: "Friendly, personal service",
    text: "A small local business. I treat every garden as if it were my own.",
    icon: CircleCheck,
  },
  {
    title: "Free, no-obligation quotes",
    text: "Tell me about the job and I will come back with a free quote.",
    icon: FileText,
  },
  {
    title: "Tidy, reliable work",
    text: "I clear up after every job so you are left with a neat, tidy garden.",
    icon: Sparkles,
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading title="Why choose me" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <article
                key={point.title}
                className="min-w-0 rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                  <Icon aria-hidden="true" className="h-5 w-5 text-brand-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink sm:text-xl">
                  {point.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {point.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
