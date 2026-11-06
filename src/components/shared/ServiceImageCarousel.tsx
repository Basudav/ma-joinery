"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ServiceImageCarouselProps = {
  images: string[];
  serviceTitle: string;
};

export function ServiceImageCarousel({
  images,
  serviceTitle,
}: ServiceImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [images.length]);

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden bg-surface"
      role="group"
      aria-label={`${serviceTitle} photos`}
    >
      {images.map((image, index) => (
        <Image
          key={`${image}-${index}`}
          src={image}
          alt={
            activeIndex === index
              ? `${serviceTitle} project photo ${index + 1}`
              : ""
          }
          aria-hidden={activeIndex !== index}
          fill
          loading={index === 0 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label={`Previous ${serviceTitle} photo`}
            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span aria-hidden="true">&lsaquo;</span>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label={`Next ${serviceTitle} photo`}
            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <span aria-hidden="true">&rsaquo;</span>
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={`dot-${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${serviceTitle} photo ${index + 1}`}
                aria-pressed={activeIndex === index}
                className={`h-2.5 w-2.5 rounded-full border border-white shadow ${
                  activeIndex === index ? "bg-white" : "bg-black/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
