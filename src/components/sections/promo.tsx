import Link from "next/link";
import { Flame } from "lucide-react";

export function Promo() {
  return (
    <section id="offres" className="bg-street-red py-24 text-street-white">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="border-4 border-street-black bg-street-yellow p-8 text-center text-street-black shadow-[12px_12px_0_0_#090909] md:p-14">
          <p className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-[0.25em]">
            <Flame className="size-5" /> Deal du jour
          </p>
          <h2 className="mt-6 font-display text-4xl uppercase leading-none md:text-6xl">
            Plat + Boisson
          </h2>
          <p className="mt-4 font-display text-6xl md:text-8xl">2 500 FCFA</p>
          <Link
            href="/commander"
            className="mt-8 inline-block rounded-full bg-street-red px-8 py-4 font-black uppercase text-white transition hover:scale-105"
          >
            J&apos;en profite
          </Link>
        </div>
      </div>
    </section>
  );
}
