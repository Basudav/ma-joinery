export interface Review {
  name: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Tammy Donnelly",
    text: "James did a fantastic job tidying our garden up for us. He was really friendly, polite and he cleared everything up afterwards. Would definitely recommend!",
  },
  {
    // TODO: Replace with the full review text from the Facebook page (currently truncated).
    name: "Philippa Barrett",
    text: "James did an absolutely fantastic job of clearing up our overgrown garden. He had brilliant tips and advice on how best to maintain the garden and was super friendly and speedy at getting bac\u2026",
  },
  {
    // TODO: Add the reviewer's name from Facebook.
    name: "Facebook customer",
    text: "James came and removed a large hedge from our garden. He worked quickly, efficiently and tidied everything away after. Super impressed and would definitely recommend. Thanks",
  },
];
