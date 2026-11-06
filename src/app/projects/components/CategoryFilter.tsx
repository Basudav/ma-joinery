"use client";

import { projectCategories, type ProjectCategory } from "@/data/projects";

export type FilterCategory = "All" | ProjectCategory;

type CategoryFilterProps = {
  selected: FilterCategory;
  onChange: (category: FilterCategory) => void;
};

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
      {projectCategories.map((category) => {
        const isSelected = category === selected;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isSelected}
            className={`inline-flex h-11 items-center rounded-full px-4 text-base font-semibold transition-colors duration-150 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              isSelected
                ? "bg-ink text-white"
                : "border border-line bg-white text-ink hover:bg-surface"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
