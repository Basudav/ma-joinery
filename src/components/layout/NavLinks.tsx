"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

type NavLinksProps = {
  stacked?: boolean;
  onNavigate?: () => void;
};

function isActive(pathname: string, href: string) {
  const current = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  if (href === "/") {
    return current === "/";
  }
  return current === href || current.startsWith(`${href}/`);
}

export function NavLinks({ stacked = false, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={
        stacked
          ? "flex flex-col"
          : "hidden items-center gap-6 md:flex"
      }
    >
      {navigation.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href} className="min-w-0">
            <Link
              href={item.href}
              onClick={onNavigate}
              className={
                stacked
                  ? `block py-3 text-lg font-semibold ${active ? "text-brand-700" : "text-ink"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500`
                  : `border-b-2 py-1 text-base font-medium transition-colors duration-150 motion-reduce:transition-none ${
                      active
                        ? "border-brand-700 text-brand-700"
                        : "border-transparent text-ink hover:text-brand-700"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500`
              }
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
