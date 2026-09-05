import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PosterMarquee } from "@/components/sections/poster-marquee";
import { Intro } from "@/components/sections/intro";
import { BestSellers } from "@/components/sections/best-sellers";
import { MenuPreview } from "@/components/sections/menu-preview";
import { Promo } from "@/components/sections/promo";
import { Experience } from "@/components/sections/experience";
import { WhyBento } from "@/components/sections/why-bento";
import { GallerySection } from "@/components/sections/gallery-section";
import { ZoomSection } from "@/components/sections/zoom-section";
import { Reviews } from "@/components/sections/reviews";
import { Location } from "@/components/sections/location";
import { FinalCta } from "@/components/sections/final-cta";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  servesCuisine: ["Street food", "Africaine", "Fast food"],
  priceRange: "1000 - 3000 FCFA",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    streetAddress: "Haie Vive",
    addressCountry: "BJ",
  },
  telephone: `+${SITE.whatsapp}`,
  openingHours: "Mo-Su 11:00-23:00",
  url: "https://street-food-cotonou.vercel.app",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <PosterMarquee />
        <Intro />
        <BestSellers />
        <MenuPreview />
        <Promo />
        <Experience />
        <WhyBento />
        <GallerySection />
        <ZoomSection />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
