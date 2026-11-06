import { getCloudinaryUrl } from "@/lib/cloudinary";

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
    image: getCloudinaryUrl("james-waters/projects/clearance", { width: 800, crop: "fill" }),
    beforeImage: getCloudinaryUrl("james-waters/projects/clearance-before", { width: 1200, crop: "fill" }),
    afterImage: getCloudinaryUrl("james-waters/projects/clearance-after", { width: 1200, crop: "fill" }),
    hasBeforeAfter: true,
    alt: "Overgrown garden cleared and tidied in Headingley, Leeds",
  },
  {
    id: "large-hedge-removal",
    title: "Large Hedge Removal",
    category: "Hedges",
    description: "A large hedge removed and the area cleared away afterwards.",
    image: getCloudinaryUrl("james-waters/projects/large-hedge-removal", { width: 800, crop: "fill" }),
    hasBeforeAfter: false,
    alt: "Large garden hedge removed and area cleared in Leeds",
  },
  {
    id: "hedge-trimming",
    title: "Hedge Trimming",
    category: "Hedges",
    description: "Overgrown hedges cut back to a neat, tidy shape.",
    image: getCloudinaryUrl("james-waters/projects/hedge-trimming", { width: 800, crop: "fill" }),
    beforeImage: getCloudinaryUrl("james-waters/projects/hedge-before", { width: 1200, crop: "fill" }),
    afterImage: getCloudinaryUrl("james-waters/projects/hedge-after", { width: 1200, crop: "fill" }),
    hasBeforeAfter: true,
    alt: "Neatly trimmed hedge in a Leeds garden",
  },
  {
    id: "lawn-mowing-edging",
    title: "Lawn Mowing & Edging",
    category: "Lawns",
    description: "Regular mowing and crisp edging for a tidy lawn.",
    image: getCloudinaryUrl("james-waters/projects/lawn-mowing", { width: 800, crop: "fill" }),
    hasBeforeAfter: false,
    alt: "Neat lawn mowing and crisp edging for a Leeds garden",
  },
  {
    id: "garden-tidy-up",
    title: "Garden Tidy-Up",
    category: "Gardens",
    description: "Weeding, clearing and tidying, with everything cleared away.",
    image: getCloudinaryUrl("james-waters/projects/garden-tidy", { width: 800, crop: "fill" }),
    hasBeforeAfter: false,
    alt: "Garden beds weeded and cleared during a tidy-up in Headingley",
  },
  {
    id: "seasonal-planting",
    title: "Seasonal Planting",
    category: "Gardens",
    description: "Planting to add colour and life through the seasons.",
    image: getCloudinaryUrl("james-waters/projects/seasonal-planting", { width: 800, crop: "fill" }),
    hasBeforeAfter: false,
    alt: "Seasonal planting adding vibrant colour to garden borders in Leeds",
  },
  {
    id: "patio-cleaning",
    title: "Patio Cleaning",
    category: "Patios & Furniture",
    description: "A patio brought back to life.",
    image: getCloudinaryUrl("james-waters/projects/patio-cleaning", { width: 800, crop: "fill" }),
    beforeImage: getCloudinaryUrl("james-waters/projects/patio-before", { width: 1200, crop: "fill" }),
    afterImage: getCloudinaryUrl("james-waters/projects/patio-after", { width: 1200, crop: "fill" }),
    hasBeforeAfter: true,
    alt: "Restored stone patio brought back to life after cleaning in Leeds",
  },
  {
    id: "furniture-restoration",
    title: "Furniture Restoration",
    category: "Patios & Furniture",
    description: "Garden furniture restored and refreshed.",
    image: getCloudinaryUrl("james-waters/projects/furniture-restoration", { width: 800, crop: "fill" }),
    hasBeforeAfter: false,
    alt: "Restored garden furniture refreshed and ready for use",
  },
];
