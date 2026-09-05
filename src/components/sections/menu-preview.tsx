import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MenuBrowser } from "@/components/menu/menu-browser";

export function MenuPreview() {
  return (
    <section id="menu" className="mx-auto max-w-[1440px] px-4 py-24 md:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-street-red">
            À la carte
          </p>
          <h2 className="font-display text-4xl uppercase md:text-6xl">
            Le menu
          </h2>
        </div>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 font-black uppercase text-street-red hover:underline"
        >
          Tout voir
          <ArrowRight className="size-5" />
        </Link>
      </div>

      <MenuBrowser />
    </section>
  );
}
