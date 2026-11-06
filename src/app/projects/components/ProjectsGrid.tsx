"use client";

import { useState } from "react";
import { CategoryFilter, type FilterCategory } from "@/app/projects/components/CategoryFilter";
import { ProjectCard } from "@/app/projects/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  const [category, setCategory] = useState<FilterCategory>("All");
  const visible =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div>
      <CategoryFilter selected={category} onChange={setCategory} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
