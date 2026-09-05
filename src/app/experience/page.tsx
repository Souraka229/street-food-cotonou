"use client";

import { useEffect } from "react";
import Link from "next/link";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { unsplash } from "@/lib/utils";

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-street-black text-street-white">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={unsplash("photo-1504674900247-0877df9cc836", 1600)}
        bgImageSrc={unsplash("photo-1476224203421-9ac39bcb3327", 1920)}
        title="Street Food Cotonou"
        date="Haie Vive"
        scrollToExpand="Fais défiler pour agrandir"
        textBlend
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-display text-3xl uppercase md:text-5xl">
            Généreux. Rapide. Cotonou.
          </h2>
          <p className="mb-6 text-lg text-street-white/80">
            Chaque assiette est pensée pour rassasier sans faire mal au
            porte-monnaie. Des pâtes mijotées, des burgers montés minute, de
            l&apos;indomie comme à la maison — et le fameux Deal du jour à
            2 500 FCFA.
          </p>
          <p className="mb-10 text-lg text-street-white/80">
            On te sert vite, on te sert chaud. Sur place à Haie Vive, ou à
            emporter en deux clics sur WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-street-red px-7 py-4 font-black uppercase text-white transition hover:scale-105"
            >
              Voir le menu
            </Link>
            <Link
              href="/commander"
              className="rounded-full border-2 border-white px-7 py-4 font-black uppercase transition hover:bg-white hover:text-street-black"
            >
              Commander
            </Link>
          </div>
        </div>
      </ScrollExpandMedia>
    </main>
  );
}
