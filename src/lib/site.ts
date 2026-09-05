/** Central place for the info the owner will want to edit. */
export const SITE = {
  name: "Street Food Cotonou",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "22990000000",
  phoneDisplay: "+229 90 00 00 00",
  address: "Haie Vive, Cotonou — à proximité du 3.14",
  mapsUrl: "https://maps.google.com/?q=Haie+Vive+Cotonou",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  hours: "Tous les jours · 11h – 23h",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
