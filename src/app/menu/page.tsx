import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MenuBrowser } from "@/components/menu/menu-browser";
import { PosterMarquee } from "@/components/sections/poster-marquee";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Le menu Street Food Cotonou : pâtes, spaghetti, coquillettes, indomie, burgers, boissons et promotions. Dès 1 000 FCFA.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="bg-street-red px-4 pb-14 pt-28 text-street-white md:px-8">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em]">
              À la carte
            </p>
            <h1 className="font-display text-6xl uppercase md:text-8xl">
              Le menu
            </h1>
          </div>
        </section>
        <PosterMarquee />
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8">
          <MenuBrowser />
        </div>
      </main>
      <Footer />
    </>
  );
}
