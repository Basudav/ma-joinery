import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const BEFORE_SRC = getCloudinaryUrl("james-waters/featured/before", { width: 1200, crop: "fill" });
const AFTER_SRC = getCloudinaryUrl("james-waters/featured/after", { width: 1200, crop: "fill" });

export function FeaturedTransformation() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              A closer look at the finish
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">
              Overgrown Garden Clearance. An overgrown garden cleared and tidied.
              Drag the slider to compare before and after.
            </p>
          </div>
          <div className="min-w-0 w-full">
            <BeforeAfterSlider
              beforeSrc={BEFORE_SRC}
              afterSrc={AFTER_SRC}
              beforeAlt="Overgrown garden before clearance"
              afterAlt="Garden cleared and tidied after James's work"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
