import type { Service } from "@/data/services";
import { ServiceImageCarousel } from "@/components/shared/ServiceImageCarousel";

type ServiceCardProps = {
  service: Service;
  showGallery?: boolean;
  className?: string;
};

export function ServiceCard({
  service,
  showGallery = false,
  className = "",
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={`min-w-0 overflow-hidden rounded-2xl border border-line bg-white transition duration-150 motion-reduce:transform-none motion-reduce:transition-none md:hover:-translate-y-0.5 md:hover:shadow-md ${className} ${
        showGallery ? "" : "p-5 sm:p-6"
      }`}
    >
      {showGallery && (
        <ServiceImageCarousel
          images={service.images}
          serviceTitle={service.title}
        />
      )}
      <div className={showGallery ? "p-5 sm:p-6" : ""}>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
          <Icon aria-hidden="true" className="h-5 w-5 text-brand-700" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-ink sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">
          {service.description}
        </p>
      </div>
    </article>
  );
}
