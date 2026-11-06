import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function QuoteBanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="-mx-4 bg-dark px-4 py-12 text-center sm:mx-0 sm:rounded-3xl sm:px-10 lg:px-16 lg:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Ready to tidy up your garden?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">
            Get a free, no-obligation quote. Message or call James today and I
            will get back to you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Button href="/contact" className="w-full sm:w-auto">
              Free Quote
            </Button>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex h-12 items-center text-base font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
