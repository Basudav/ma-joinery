import { SmartImage } from "@/components/ui/SmartImage";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white transition duration-150 motion-reduce:transform-none motion-reduce:transition-none md:hover:-translate-y-0.5 md:hover:shadow-md">
      <div className="relative aspect-[4/3] w-full">
        <SmartImage
          src={project.image}
          alt={project.alt}
          label="Project photo"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
          Illustrative photo
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm text-ink-soft">{project.category}</p>
          {project.hasBeforeAfter ? (
            <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
              Before &amp; after
            </span>
          ) : null}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-ink sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">
          {project.description}
        </p>
      </div>
    </article>
  );
}
