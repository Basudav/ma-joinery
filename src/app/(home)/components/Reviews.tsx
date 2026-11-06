import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

export function Reviews() {
  const cards = reviews.slice(0, 3);

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading title="What customers say" align="center" />
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-base font-semibold text-ink lg:text-lg">
            Recommended by customers on Facebook · 3 reviews
          </p>
          <p className="mt-1 text-sm text-ink-soft">{site.facebookRecommend}</p>
          <Button
            href={site.facebookUrl}
            variant="outline"
            external
            className="mt-6 w-full sm:w-auto"
          >
            Read reviews on Facebook
          </Button>
        </div>
        {cards.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
            {cards.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="min-w-0 rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <p className="text-base leading-relaxed text-ink-soft">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-4 text-base font-semibold text-ink">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
