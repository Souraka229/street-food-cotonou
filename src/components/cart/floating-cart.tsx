"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { formatFcfa } from "@/lib/utils";
import { SITE, whatsappLink } from "@/lib/site";

export function FloatingCart() {
  const { lines, count, total, isOpen, setOpen, add, decrement, remove, clear } =
    useCart();

  const orderMessage = [
    `Bonjour ${SITE.name}, je voudrais commander :`,
    ...lines.map(
      (line) => `- ${line.quantity}x ${line.name} (${formatFcfa(line.price)})`,
    ),
    ``,
    `Total : ${formatFcfa(total)}`,
  ].join("\n");

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-label="Ouvrir le panier"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-street-red text-white shadow-lg transition hover:scale-105"
      >
        <ShoppingBag className="size-6" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-street-yellow text-xs font-black text-street-black">
            {count}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-street-white text-street-black"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <header className="flex items-center justify-between border-b-2 border-street-black p-5">
                <h2 className="font-display text-2xl uppercase">Ton panier</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le panier"
                >
                  <X className="size-6" />
                </button>
              </header>

              <div className="flex-1 overflow-y-auto p-5">
                {lines.length === 0 ? (
                  <p className="mt-10 text-center text-street-black/60">
                    Ton panier est vide. Ajoute un plat depuis le menu.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {lines.map((line) => (
                      <li
                        key={line.id}
                        className="flex items-center gap-3 border-b border-street-black/15 pb-4"
                      >
                        <div className="flex-1">
                          <p className="font-bold uppercase leading-tight">
                            {line.name}
                          </p>
                          <p className="text-sm text-street-black/60">
                            {formatFcfa(line.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => decrement(line.id)}
                            aria-label="Retirer un"
                            className="grid size-7 place-items-center border border-street-black"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-5 text-center font-bold">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => add(line)}
                            aria-label="Ajouter un"
                            className="grid size-7 place-items-center border border-street-black"
                          >
                            <Plus className="size-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => remove(line.id)}
                            aria-label="Supprimer la ligne"
                            className="ml-1 text-street-red"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <footer className="border-t-2 border-street-black p-5">
                <div className="mb-4 flex items-center justify-between text-lg font-black uppercase">
                  <span>Total</span>
                  <span>{formatFcfa(total)}</span>
                </div>
                <a
                  href={lines.length ? whatsappLink(orderMessage) : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={lines.length === 0}
                  className={`block rounded-full px-6 py-4 text-center font-black uppercase text-white transition ${
                    lines.length
                      ? "bg-street-red hover:scale-[1.02]"
                      : "pointer-events-none bg-street-black/30"
                  }`}
                >
                  Commander sur WhatsApp
                </a>
                {lines.length > 0 && (
                  <button
                    type="button"
                    onClick={clear}
                    className="mt-3 w-full text-center text-sm text-street-black/60 underline"
                  >
                    Vider le panier
                  </button>
                )}
              </footer>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
