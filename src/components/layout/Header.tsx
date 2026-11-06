"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";

const MENU_ID = "mobile-navigation";

export function Header() {
  const pathname = usePathname();

  return <HeaderBar key={pathname} />;
}

function HeaderBar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !open) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-line bg-white/90 backdrop-blur sm:h-20">
      <Container className="relative flex h-full items-center justify-between gap-3">
        <Logo />
        <nav aria-label="Primary" className="flex items-center gap-6">
          <NavLinks />
          <div className="hidden lg:block">
            <Button href="/contact">Free Quote</Button>
          </div>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={MENU_ID}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </nav>
        <MobileMenu open={open} onClose={() => setOpen(false)} menuId={MENU_ID} />
      </Container>
    </header>
  );
}
