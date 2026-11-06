import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesIntro() {
  return (
    <Container>
      <SectionHeading
        as="h1"
        title="Garden care and maintenance"
        description="Friendly, professional gardening for local homeowners. Tell me what your garden needs and I will give you a free, no-obligation quote."
      />
    </Container>
  );
}
