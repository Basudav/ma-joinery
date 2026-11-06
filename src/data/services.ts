import type { LucideIcon } from "lucide-react";
import {
  Scissors,
  Shovel,
  Sprout,
  Flower2,
  Leaf,
  Sparkles,
  Trees,
  Armchair,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  // TODO: Replace placeholder images with real photos of James's work for each service.
  images: string[];
}

// Placeholder image used while real photos are being gathered.
// Each entry uses the same neutral placeholder; swap out when real photos are ready.
const placeholder = "/images/placeholder-garden.jpg";

export const services: Service[] = [
  {
    slug: "lawn-care",
    title: "Lawn Care",
    description:
      "Professional mowing, edging and seasonal maintenance to keep your lawn looking its best.",
    icon: Scissors,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming & Maintenance",
    description:
      "Trimming and maintenance for neat, healthy hedges.",
    icon: Shovel,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "pruning",
    title: "Pruning",
    description:
      "Expert pruning for healthy plants and beautiful results.",
    icon: Leaf,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "planting",
    title: "Planting",
    description:
      "Seasonal planting to add colour and life to your garden.",
    icon: Flower2,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "weeding-maintenance",
    title: "Weeding & Garden Maintenance",
    description:
      "Regular weeding and general upkeep to keep beds and borders tidy.",
    icon: Sprout,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "garden-tidy-ups",
    title: "Garden Tidy-Ups",
    description:
      "A thorough tidy-up that leaves your garden neat, with everything cleared away afterwards.",
    icon: Sparkles,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "overgrown-garden-clearance",
    title: "Overgrown Garden Clearance",
    description:
      "Overgrown gardens cleared back, including hedge removal, with advice on how to keep them maintained.",
    icon: Trees,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "patio-cleaning-furniture-restoration",
    title: "Patio Cleaning & Furniture Restoration",
    description:
      "Bring your patio and garden furniture back to life.",
    icon: Armchair,
    images: [placeholder, placeholder, placeholder, placeholder],
  },
];
