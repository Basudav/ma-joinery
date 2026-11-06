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
import { getCloudinaryUrl } from "@/lib/cloudinary";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  images: string[];
}

export const services: Service[] = [
  {
    slug: "lawn-care",
    title: "Lawn Care",
    description:
      "Professional mowing, edging and seasonal maintenance to keep your lawn looking its best.",
    icon: Scissors,
    images: [
      getCloudinaryUrl("james-waters/services/lawn-care/lawn_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/lawn-care/lawn_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/lawn-care/lawn_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/lawn-care/lawn_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "hedge-trimming",
    title: "Hedge Trimming & Maintenance",
    description:
      "Trimming and maintenance for neat, healthy hedges.",
    icon: Shovel,
    images: [
      getCloudinaryUrl("james-waters/services/hedges/hedge_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/hedges/hedge_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/hedges/hedge_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/hedges/hedge_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "pruning",
    title: "Pruning",
    description:
      "Expert pruning for healthy plants and beautiful results.",
    icon: Leaf,
    images: [
      getCloudinaryUrl("james-waters/services/pruning/pruning_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/pruning/pruning_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/pruning/pruning_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/pruning/pruning_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "planting",
    title: "Planting",
    description:
      "Seasonal planting to add colour and life to your garden.",
    icon: Flower2,
    images: [
      getCloudinaryUrl("james-waters/services/planting/planting_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/planting/planting_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/planting/planting_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/planting/planting_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "weeding-maintenance",
    title: "Weeding & Garden Maintenance",
    description:
      "Regular weeding and general upkeep to keep beds and borders tidy.",
    icon: Sprout,
    images: [
      getCloudinaryUrl("james-waters/services/weeding/weeding_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/weeding/weeding_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/weeding/weeding_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/weeding/weeding_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "garden-tidy-ups",
    title: "Garden Tidy-Ups",
    description:
      "A thorough tidy-up that leaves your garden neat, with everything cleared away afterwards.",
    icon: Sparkles,
    images: [
      getCloudinaryUrl("james-waters/services/tidy/tidy_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/tidy/tidy_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/tidy/tidy_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/tidy/tidy_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "overgrown-garden-clearance",
    title: "Overgrown Garden Clearance",
    description:
      "Overgrown gardens cleared back, including hedge removal, with advice on how to keep them maintained.",
    icon: Trees,
    images: [
      getCloudinaryUrl("james-waters/services/clearance/clearance_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/clearance/clearance_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/clearance/clearance_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/clearance/clearance_4", { width: 800, crop: "fill" }),
    ],
  },
  {
    slug: "patio-cleaning-furniture-restoration",
    title: "Patio Cleaning & Furniture Restoration",
    description:
      "Bring your patio and garden furniture back to life.",
    icon: Armchair,
    images: [
      getCloudinaryUrl("james-waters/services/patio/patio_1", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/patio/patio_2", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/patio/patio_3", { width: 800, crop: "fill" }),
      getCloudinaryUrl("james-waters/services/patio/patio_4", { width: 800, crop: "fill" }),
    ],
  },
];
