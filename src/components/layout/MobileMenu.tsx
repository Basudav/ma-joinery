"use client";

import { useEffect } from "react";
import { NavLinks } from "@/components/layout/NavLinks";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  menuId: string;
};

export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      id={menuId}
      className="absolute inset-x-0 top-full z-40 border-b border-line bg-white md:hidden"
    >
      <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-4 sm:px-6">
        <nav aria-label="Mobile">
          <NavLinks stacked onNavigate={onClose} />
        </nav>
      </div>
    </div>
  );
}
