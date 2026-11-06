// TODO: All project photos are placeholders — replace with James's real photos once available.

// Placeholder image used while real photos are being gathered.
const placeholder = "/images/placeholder-garden.jpg";

export const projectCategories = [
  "All",
  "Lawns",
  "Hedges",
  "Gardens",
  "Patios & Furniture",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  hasBeforeAfter: boolean;
  alt: string;
}

export const projects: Project[] = [
  {
    id: "overgrown-garden-clearance",
    title: "Overgrown Garden Clearance",
    category: "Gardens",
    description: "An overgrown garden cleared back and tidied up.",
    image: placeholder,
    beforeImage: placeholder,
    afterImage: placeholder,
    hasBeforeAfter: true,
    alt: "Overgrown garden cleared and tidied in Headingley, Leeds",
  },
  {
    id: "large-hedge-removal",
    title: "Large Hedge Removal",
    category: "Hedges",
    description: "A large hedge removed and the area cleared away afterwards.",
    image: placeholder,
    hasBeforeAfter: false,
    alt: "Large garden hedge removed and area cleared in Leeds",
  },
  {
    id: "hedge-trimming",
    title: "Hedge Trimming",
    category: "Hedges",
    description: "Overgrown hedges cut back to a neat, tidy shape.",
    image: placeholder,
    beforeImage: placeholder,
    afterImage: placeholder,
    hasBeforeAfter: true,
    alt: "Neatly trimmed hedge in a Leeds garden",
  },
  {
    id: "lawn-mowing-edging",
    title: "Lawn Mowing & Edging",
    category: "Lawns",
    description: "Regular mowing and crisp edging for a tidy lawn.",
    image: placeholder,
    hasBeforeAfter: false,
    alt: "Neat lawn mowing and crisp edging for a Leeds garden",
  },
  {
    id: "garden-tidy-up",
    title: "Garden Tidy-Up",
    category: "Gardens",
    description: "Weeding, clearing and tidying, with everything cleared away.",
    image: placeholder,
    hasBeforeAfter: false,
    alt: "Garden beds weeded and cleared during a tidy-up in Headingley",
  },
  {
    id: "seasonal-planting",
    title: "Seasonal Planting",
    category: "Gardens",
    description: "Planting to add colour and life through the seasons.",
    image: placeholder,
    hasBeforeAfter: false,
    alt: "Seasonal planting adding vibrant colour to garden borders in Leeds",
  },
  {
    id: "patio-cleaning",
    title: "Patio Cleaning",
    category: "Patios & Furniture",
    description: "A patio brought back to life.",
    image: placeholder,
    beforeImage: placeholder,
    afterImage: placeholder,
    hasBeforeAfter: true,
    alt: "Restored stone patio brought back to life after cleaning in Leeds",
  },
  {
    id: "furniture-restoration",
    title: "Furniture Restoration",
    category: "Patios & Furniture",
    description: "Garden furniture restored and refreshed.",
    image: placeholder,
    hasBeforeAfter: false,
    alt: "Restored garden furniture refreshed and ready for use",
  },
];
