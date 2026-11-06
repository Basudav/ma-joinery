import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

type ContactDetailsProps = {
  variant: "actions" | "info" | "full";
  className?: string;
};

function QuickActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button href={`tel:${site.phoneTel}`} className="w-full sm:w-auto">
        Call
      </Button>
      <Button
        href={site.whatsAppUrl}
        variant="outline"
        external
        className="w-full min-w-0 sm:w-auto"
      >
        WhatsApp
      </Button>
    </div>
  );
}

function InfoCards() {
  const items = [
    {
      icon: Phone,
      label: "Phone",
      content: (
        <a
          href={`tel:${site.phoneTel}`}
          className="break-words text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {site.phoneDisplay}
        </a>
      ),
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      content: (
        <a
          href={site.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {site.phoneDisplay}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: "Area",
      content: (
        <p className="text-ink-soft">
          Based in Headingley, Leeds.
        </p>
      ),
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      content: (
        <a
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {site.facebookName}
        </a>
      ),
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      content: (
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {site.instagramHandle}
        </a>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.label}
            className="min-w-0 rounded-2xl border border-line bg-white p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <Icon aria-hidden="true" className="h-5 w-5 text-brand-700" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-ink">{item.label}</h2>
                <div className="mt-1 text-base leading-relaxed">{item.content}</div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ContactDetails({ variant, className = "" }: ContactDetailsProps) {
  return (
    <div className={className}>
      {variant === "actions" ? <QuickActions /> : null}
      {variant === "info" ? <InfoCards /> : null}
      {variant === "full" ? (
        <div className="space-y-6">
          <QuickActions />
          <InfoCards />
        </div>
      ) : null}
    </div>
  );
}
