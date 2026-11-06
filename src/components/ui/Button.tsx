import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-ink hover:bg-brand-600",
  secondary:
    "bg-ink text-white hover:bg-dark",
  outline:
    "border border-line bg-white text-ink hover:bg-surface",
};

const baseClass =
  "inline-flex h-12 items-center justify-center rounded-xl px-6 text-base font-semibold transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick,
  ariaLabel,
  external,
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${className}`;

  if (href) {
    if (isInternal(href) && !external) {
      return (
        <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
