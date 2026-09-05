import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-provider";
import { FloatingCart } from "@/components/cart/floating-cart";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Street Food Cotonou | Plats à partir de 1 000 FCFA",
    template: "%s | Street Food Cotonou",
  },
  description:
    "Street Food, Haie Vive (50 m après le 3.14), Cotonou. Goût de luxe, prix de rue : pâtes, burgers, indomie et boissons dès 1 000 FCFA. Ouvert mardi à dimanche, 17h – 06h. Sur place ou à emporter.",
  keywords: [
    "street food",
    "Cotonou",
    "Haie Vive",
    "restaurant Cotonou",
    "pâtes",
    "burger Cotonou",
    "indomie",
    "à emporter Cotonou",
  ],
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    url: siteUrl,
    siteName: "Street Food Cotonou",
    title: "Street Food Cotonou | Goût de luxe, prix de rue",
    description:
      "Pâtes, burgers, indomie et boissons dès 1 000 FCFA à Haie Vive, Cotonou. Ouvert mardi à dimanche, 17h – 06h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Street Food Cotonou",
    description: "La street food qui met tout le monde d'accord. Dès 1 000 FCFA.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          {children}
          <FloatingCart />
        </CartProvider>
      </body>
    </html>
  );
}
