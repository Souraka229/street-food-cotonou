import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { unsplash } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-street-black py-28 text-street-white"
    >
      <Image
        src={unsplash("photo-1414235077428-338989a2e8c0", 1600)}
        alt="Ambiance Street Food Cotonou"
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-30"
      />
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-street-yellow">
          L&apos;expérience
        </p>
        <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          Fais défiler, la faim monte.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-street-white/70">
          Une immersion plein écran dans nos plats : l&apos;assiette grandit au
          fil du scroll jusqu&apos;à remplir tout l&apos;écran.
        </p>
        <Link
          href="/experience"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-street-red px-7 py-4 font-black uppercase text-white transition hover:scale-105"
        >
          Vivre l&apos;expérience
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </section>
  );
}
