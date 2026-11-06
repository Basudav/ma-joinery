import { site } from "@/data/site";

export interface ContactFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

/**
 * Builds a prefilled WhatsApp URL from the contact form fields.
 * On submit the form opens WhatsApp with the message ready to send.
 */
export function buildWhatsAppUrl(fields: ContactFields): string {
  const lines = [
    `Hi James, I'd like a free quote.`,
    ``,
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.email.trim() ? `Email: ${fields.email.trim()}` : null,
    `Service: ${fields.service}`,
    ``,
    `Message:`,
    fields.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `${site.whatsAppUrl}?text=${encodeURIComponent(lines)}`;
}
