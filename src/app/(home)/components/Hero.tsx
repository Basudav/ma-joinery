"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const HERO_IMAGES = [
  {
    src: getCloudinaryUrl("james-waters/hero/hero_1", { width: 1600, crop: "fill" }),
    alt: "Neatly trimmed lawn and hedges in a Leeds garden",
  },
  {
    src: getCloudinaryUrl("james-waters/hero/hero_2", { width: 1600, crop: "fill" }),
    alt: "Overgrown garden cleared and tidied in Headingley",
  },
  {
    src: getCloudinaryUrl("james-waters/hero/hero_3", { width: 1600, crop: "fill" }),
    alt: "Seasonal planting adding colour to a garden in Leeds",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-4 lg:pb-8">
      <Container>
        {/* Mobile Screen Size Layout (< lg): Looping photos with text & CTA overlay */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[700px] sm:min-h-[740px] flex items-start shadow-lg lg:hidden">
          {/* Background Photo Carousel (Loop) */}
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((img, index) => (
              <Image
                key={img.src + index}
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />
            ))}
            {/* Contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45" />
          </div>

          {/* Overlay Hero Text and CTA Buttons */}
          <div className="relative z-10 w-full px-5 pt-8 pb-10 sm:px-10 sm:pt-12 sm:pb-14 text-white">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium text-white/95 backdrop-blur-sm">
              Headingley · Leeds
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight drop-shadow-sm">
              Transforming your garden spaces.
            </h1>
            <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              Friendly, reliable gardening for local homeowners in Headingley,
              Leeds. Lawn care, hedges, pruning, planting and full garden
              tidy-ups, fully insured and treated as if the garden were my own.
            </p>
            <div className="mt-40 sm:mt-35 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto shadow-md">
                Free Quote
              </Button>
              <Button
                href="/projects"
                variant="outline"
                className="w-full sm:w-auto shadow-md"
              >
                View My Work
              </Button>
            </div>
            <p className="mt-5 flex max-w-xl items-start gap-2 text-xs sm:text-sm text-white/90">
              <Check
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
              />
              <span>
                Fully insured · Free no-obligation quotes · Recommended on
                Facebook
              </span>
            </p>

            {/* Mobile Carousel Indicators */}
            <div
              className="mt-6 flex items-center gap-2"
              aria-label="Hero photo indicators"
            >
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={activeIndex === idx}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeIndex === idx
                    ? "w-8 bg-brand-500"
                    : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Laptop / Desktop Layout (>= lg): 2 Columns with reduced navbar gap & photo carousel */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column: Hero Text and CTA Buttons */}
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft">
              Headingley · Leeds
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink lg:text-4xl xl:text-5xl leading-tight">
              Transforming your garden spaces.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
              Friendly, reliable gardening for local homeowners in Headingley,
              Leeds. Lawn care, hedges, pruning, planting and full garden
              tidy-ups, fully insured and treated as if the garden were my own.
            </p>
            <div className="mt-6 flex flex-row gap-3">
              <Button href="/contact">Free Quote</Button>
              <Button href="/projects" variant="outline">
                View My Work
              </Button>
            </div>
            <p className="mt-5 flex max-w-xl items-start gap-2 text-sm text-ink-soft">
              <Check
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
              />
              <span>
                Fully insured · Free no-obligation quotes · Recommended on
                Facebook
              </span>
            </p>
          </div>

          {/* Right Column: Photo Section Carousel in Loop */}
          <div
            className="relative min-w-0 w-full overflow-hidden rounded-2xl aspect-[4/3] xl:aspect-[16/11] max-h-[440px] shadow-lg bg-surface group"
            role="region"
            aria-label="Hero image carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {HERO_IMAGES.map((img, index) => (
              <Image
                key={img.src + index}
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />
            ))}

            {/* Prev Navigation Button */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
                )
              }
              aria-label="Previous slide"
              className="absolute top-1/2 left-3.5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-opacity opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Next Navigation Button */}
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
              }
              aria-label="Next slide"
              className="absolute top-1/2 right-3.5 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-opacity opacity-0 group-hover:opacity-100"
            >
              <ChevronRight aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={activeIndex === idx}
                  className={`h-2.5 rounded-full border border-white/80 shadow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${activeIndex === idx
                    ? "w-8 bg-white"
                    : "w-2.5 bg-black/40 hover:bg-black/60"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
