// Cloudinary image helper with optimal transformations for James Waters Gardening Services
export const CLOUDINARY_CLOUD_NAME = "s5weheq5";
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; height?: number; crop?: string }
): string {
  const transforms: string[] = ["f_auto", "q_auto"];
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  if (options?.crop) transforms.push(`c_${options.crop}`);

  const transformString = transforms.join(",");
  const cleanId = publicId.startsWith("/") ? publicId.slice(1) : publicId;
  return `${CLOUDINARY_BASE_URL}/${transformString}/${cleanId}`;
}
