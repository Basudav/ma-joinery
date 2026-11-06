import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { site } from "@/data/site";

type SocialLinksProps = {
  className?: string;
};

const iconButtonClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors duration-150 hover:bg-white/10 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500";

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a
        href={site.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="James Waters Gardening Services on Facebook"
        className={iconButtonClass}
      >
        <FaFacebook aria-hidden="true" className="h-5 w-5" />
      </a>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="James Waters Gardening Services on Instagram"
        className={iconButtonClass}
      >
        <FaInstagram aria-hidden="true" className="h-5 w-5" />
      </a>
    </div>
  );
}
