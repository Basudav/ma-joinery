"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
};

// Logo image is loaded from /public/images/logo.png
const HAS_LOGO_FILE = true;

export function Logo({ className = "" }: LogoProps) {
  const [logoAvailable, setLogoAvailable] = useState(HAS_LOGO_FILE);

  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${className}`}
    >
      {logoAvailable ? (
        <Image
          src="/images/logo.png"
          alt=""
          width={160}
          height={48}
          className="h-9 w-auto sm:h-12"
          onError={() => setLogoAvailable(false)}
        />
      ) : null}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate text-base font-bold text-ink sm:text-lg">
          {site.nameShort}
        </span>
        <span className="truncate text-xs font-medium text-ink-soft sm:text-sm">
          Gardening Services
        </span>
      </span>
    </Link>
  );
}
