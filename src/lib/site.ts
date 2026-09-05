/** Central place for the info the owner will want to edit. */
export const SITE = {
  name: "Street Food Cotonou",
  slogan: "Goût de luxe, prix de rue",
  url: "https://street-sepia.vercel.app",
  /** WhatsApp number in international format, digits only. */
  whatsapp: "2290197030344",
  phoneDisplay: "01 97 03 03 44",
  phoneIntl: "+229 01 97 03 03 44",
  address: "Haie Vive, Cotonou — 50 m après le 3.14",
  mapsUrl: "https://maps.google.com/?q=Street+Food+Haie+Vive+Cotonou+3.14",
  instagram: "https://instagram.com/streetfoodcotonou",
  tiktok: "https://www.tiktok.com/@streetfoodbenin",
  /** Open Tuesday to Sunday, 5 PM – 6 AM. */
  hours: "Mardi à dimanche · 17h – 06h",
  hoursSchemaOrg: "Tu-Su 17:00-06:00",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
