import Image from "next/image";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type SmartImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SmartImage({
  src,
  alt,
  label = "Project photo",
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: SmartImageProps) {
  if (!src) {
    return <ImagePlaceholder label={label} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
