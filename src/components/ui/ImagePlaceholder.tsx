import { Image as ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export function ImagePlaceholder({
  label = "Project photo",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 border border-line bg-surface ${className}`}
    >
      <ImageIcon aria-hidden="true" className="h-8 w-8 text-grey-brand" />
      <p className="text-sm text-ink-soft">{label}</p>
    </div>
  );
}
