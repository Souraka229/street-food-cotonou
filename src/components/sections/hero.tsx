"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { unsplash } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-street-red text-street-white">
      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-10 px-4 py-28 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] md:text-sm">
            Street Food · Cotonou
          </p>

          <h1 className="font-display text-[clamp(3.25rem,9vw,8rem)] font-black uppercase leading-[0.82]">
            La street food
            <br />
            qui met tout
            <br />
            le monde
            <br />
            <span className="text-street-yellow">d&apos;accord.</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-street-yellow px-5 py-2 text-sm font-black uppercase text-street-black">
              À partir de 1 000 FCFA
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/commander"
              className="rounded-full bg-street-black px-7 py-4 font-black uppercase text-white transition-transform hover:scale-105"
            >
              Commander
            </Link>
            <Link
              href="/menu"
              className="rounded-full border-2 border-white px-7 py-4 font-black uppercase transition hover:bg-white hover:text-street-black"
            >
              Voir le menu
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-street-black shadow-2xl"
        >
          <Image
            src={unsplash("photo-1476224203421-9ac39bcb3327", 900)}
            alt="Assiette Street Food Cotonou"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
