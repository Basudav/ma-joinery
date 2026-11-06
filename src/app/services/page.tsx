import type { Metadata } from "next";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Section } from "@/components/ui/Section";
import { ServicesGrid } from "@/app/services/components/ServicesGrid";
import { ServicesIntro } from "@/app/services/components/ServicesIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lawn care, hedge trimming, pruning, planting, garden tidy-ups and more from James Waters Gardening Services in Headingley, Leeds.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="space-y-0">
        <ServicesIntro />
        <ServicesGrid />
      </Section>
      <QuoteBanner />
    </>
  );
}
