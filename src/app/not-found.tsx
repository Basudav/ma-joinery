import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-20 text-center sm:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Page not found
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">
        That page does not exist. Head back to the homepage to see my work or
        request a free quote.
      </p>
      <Button href="/" className="mt-8 w-full sm:w-auto">
        Back to home
      </Button>
    </Container>
  );
}
