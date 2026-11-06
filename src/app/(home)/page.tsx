import type { Metadata } from "next";
import { FeaturedTransformation } from "@/app/(home)/components/FeaturedTransformation";
import { Hero } from "@/app/(home)/components/Hero";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Reviews } from "@/app/(home)/components/Reviews";
import { ServiceAreas } from "@/app/(home)/components/ServiceAreas";
import { ServicesPreview } from "@/app/(home)/components/ServicesPreview";
import { WhyChooseUs } from "@/app/(home)/components/WhyChooseUs";

export const metadata: Metadata = {
  title: {
    absolute: "James Waters Gardening Services | Gardener in Headingley, Leeds",
  },
  description:
    "Friendly, fully insured gardening in Headingley, Leeds. Lawn care, hedge trimming, pruning, planting and garden tidy-ups. Free no-obligation quotes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedTransformation />
      <Reviews />
      <ServiceAreas />
      <QuoteBanner />
    </>
  );
}
