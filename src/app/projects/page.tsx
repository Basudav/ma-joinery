import type { Metadata } from "next";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectsGrid } from "@/app/projects/components/ProjectsGrid";
import { ProjectsIntro } from "@/app/projects/components/ProjectsIntro";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of garden projects around Headingley and Leeds by James Waters Gardening Services.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <ProjectsIntro />
        <Container>
          <ProjectsGrid />
        </Container>
      </Section>
      <QuoteBanner />
    </>
  );
}
