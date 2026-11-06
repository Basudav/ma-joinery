import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80">
              {site.taglineAlt}
            </p>
            <SocialLinks className="mt-6" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">Quick links</h2>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex h-11 items-center text-base text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2 text-base text-white/80">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex min-h-11 items-center hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {site.facebookName}
                </a>
              </li>
              <li className="pt-1">
                Based in Headingley, Leeds.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-sm text-white/70 sm:flex-row sm:text-left">
          <p>
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
