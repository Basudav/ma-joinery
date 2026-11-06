import fs from "fs";
import path from "path";

// Cloudinary upload helper for James Waters Gardening Services photos
const CLOUD_NAME = "s5weheq5";
const API_KEY = "797942729336197";
const API_SECRET = "mxt9DNm8V02tmRum2yu8Zp5aMm4";

interface UploadItem {
  localRelPath: string;
  folder: string;
  publicId: string;
}

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".svg") return "image/svg+xml";
  return "image/jpeg";
}

async function uploadFile(fullPath: string, folder: string, publicId: string) {
  const fileBuffer = fs.readFileSync(fullPath);
  const mime = getMimeType(fullPath);
  const base64Data = `data:${mime};base64,${fileBuffer.toString("base64")}`;

  const formData = new FormData();
  formData.append("file", base64Data);
  formData.append("public_id", publicId);
  formData.append("folder", folder);

  const authHeader = "Basic " + Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    headers: {
      Authorization: authHeader,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Upload failed for ${publicId}: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.secure_url;
}

export async function uploadAllPhotos() {
  const publicDir = path.join(process.cwd(), "public");
  const results: Record<string, string> = {};

  const filesToUpload: UploadItem[] = [
    { localRelPath: "all new photo/hero/new hero 1 (1).jpeg", folder: "james-waters/hero", publicId: "hero_1" },
    { localRelPath: "all new photo/hero/new hero 1 (2).jpeg", folder: "james-waters/hero", publicId: "hero_2" },
    { localRelPath: "all new photo/hero/new hero 1 (3).jpeg", folder: "james-waters/hero", publicId: "hero_3" },
  ];

  for (const item of filesToUpload) {
    const fullPath = path.join(publicDir, item.localRelPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File does not exist: ${fullPath}`);
      continue;
    }
    const secureUrl = await uploadFile(fullPath, item.folder, item.publicId);
    results[item.localRelPath] = secureUrl;
  }

  return results;
}
