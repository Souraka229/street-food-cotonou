"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { formatFcfa } from "@/lib/utils";
import { SITE, whatsappLink } from "@/lib/site";

type Mode = "Sur place" | "À emporter";

export function CommanderForm() {
  const { lines, total, decrement, add, remove } = useCart();
  const [mode, setMode] = useState<Mode>("À emporter");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const ready = lines.length > 0 && name.trim().length > 1 && phone.trim().length >= 8;

  const message = useMemo(
    () =>
      [
        `Bonjour ${SITE.name}, nouvelle commande :`,
        ``,
        ...lines.map(
          (l) => `- ${l.quantity}x ${l.name} (${formatFcfa(l.price)})`,
        ),
        ``,
        `Total : ${formatFcfa(total)}`,
        `Mode : ${mode}`,
        `Nom : ${name}`,
        `Téléphone : ${phone}`,
      ].join("\n"),
    [lines, total, mode, name, phone],
  );

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-street-black p-10 text-center">
        <p className="text-lg text-muted-foreground">
          Ton panier est vide pour le moment.
        </p>
        <Link
          href="/menu"
          className="mt-6 inline-block rounded-full bg-street-red px-7 py-4 font-black uppercase text-white transition hover:scale-105"
        >
          Voir le menu
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <div className="space-y-8">
        <div>
          <h2 className="mb-4 font-display text-2xl uppercase">1. Ton panier</h2>
          <ul className="divide-y divide-street-black/15 border-2 border-street-black">
            {lines.map((line) => (
              <li
                key={line.id}
                className="flex items-center justify-between gap-4 p-4"
              >
                <div>
                  <p className="font-bold uppercase leading-tight">
                    {line.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatFcfa(line.price)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => decrement(line.id)}
                    className="size-8 border border-street-black"
                    aria-label="Retirer un"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-bold">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => add(line)}
                    className="size-8 border border-street-black"
                    aria-label="Ajouter un"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(line.id)}
                    className="ml-2 text-sm text-street-red underline"
                  >
                    Retirer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl uppercase">2. Récupération</h2>
          <div className="flex gap-3">
            {(["À emporter", "Sur place"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`border-2 border-street-black px-5 py-3 font-black uppercase transition ${
                  mode === m
                    ? "bg-street-black text-street-white"
                    : "bg-transparent"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl uppercase">3. Tes infos</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm font-bold uppercase">
              Nom
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-street-black bg-transparent px-4 py-3 text-base font-normal normal-case"
                placeholder="Ton nom"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm font-bold uppercase">
              Téléphone
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                className="border-2 border-street-black bg-transparent px-4 py-3 text-base font-normal normal-case"
                placeholder="97 00 00 00"
              />
            </label>
          </div>
        </div>
      </div>

      <aside className="h-fit border-2 border-street-black bg-street-white p-6 text-street-black lg:sticky lg:top-24">
        <div className="mb-4 flex items-center justify-between text-lg font-black uppercase">
          <span>Total</span>
          <span>{formatFcfa(total)}</span>
        </div>
        <a
          href={ready ? whatsappLink(message) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          className={`block rounded-full px-6 py-4 text-center font-black uppercase text-white transition ${
            ready
              ? "bg-street-red hover:scale-[1.02]"
              : "pointer-events-none bg-street-black/30"
          }`}
        >
          Envoyer sur WhatsApp
        </a>
        {!ready && (
          <p className="mt-3 text-center text-xs text-street-black/60">
            Renseigne ton nom et ton téléphone pour continuer.
          </p>
        )}
      </aside>
    </div>
  );
}
