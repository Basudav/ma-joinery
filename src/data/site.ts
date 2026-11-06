// TODO: replace FACEBOOK_URL with the real James Waters Gardening Services Facebook page URL when it is known.
export const FACEBOOK_URL = "https://www.facebook.com/";

// TODO: replace SITE_URL with the real production domain once hosting is confirmed.
export const SITE_URL = "https://jameswatersgardeningservices.co.uk";

export const site = {
  name: "James Waters Gardening Services",
  nameShort: "James Waters",
  tagline: "Transforming your garden spaces.",
  taglineAlt: "Transforming your garden spaces.",
  phoneDisplay: "07518 551628",
  phoneTel: "+447518551628",
  whatsAppUrl: "https://wa.me/447518551628",
  instagramUrl: "https://www.instagram.com/jameswatersgardeningservices/",
  instagramHandle: "@jameswatersgardeningservices",
  facebookName: "James Waters Gardening Services",
  facebookUrl: FACEBOOK_URL,
  facebookRecommend: "Recommended by customers on Facebook · 3 reviews",
  areas: ["Headingley", "Leeds", "& surrounding areas"] as const,
  locality: "Headingley, Leeds",
} as const;

export type Site = typeof site;
