"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { formatFcfa } from "@/lib/utils";
import { useCart } from "@/components/cart/cart-provider";

export function MenuCard({ item }: { item: MenuItem }) {
  const { add } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden border-2 border-street-black bg-street-white text-street-black">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} — Street Food Cotonou`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {item.bestSeller && (
          <span className="absolute left-3 top-3 bg-street-yellow px-3 py-1 text-xs font-black uppercase tracking-wide text-street-black">
            Best-seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl uppercase leading-none md:text-3xl">
          {item.name}
        </h3>
        <p className="mt-3 flex-1 text-sm text-street-black/60">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <strong className="text-xl">{formatFcfa(item.price)}</strong>
          <button
            type="button"
            onClick={() => add(item)}
            className="inline-flex items-center gap-1 rounded-full bg-street-red px-5 py-3 text-sm font-bold uppercase text-white transition hover:scale-105"
          >
            <Plus className="size-4" strokeWidth={3} />
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
