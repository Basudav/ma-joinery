import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="What I do"
          description="From regular lawn care to a complete garden refresh."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              showGallery
              className={index >= 4 ? "hidden sm:block" : ""}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="outline" className="w-full sm:w-auto">
            View all services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
