import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} showGallery />
        ))}
      </div>
    </Container>
  );
}
