import { BEST_SELLERS } from "@/lib/menu-data";
import { MenuCard } from "@/components/menu/menu-card";

export function BestSellers() {
  return (
    <section className="bg-street-black py-24 text-street-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-street-yellow">
              Les incontournables
            </p>
            <h2 className="font-display text-4xl uppercase md:text-6xl">
              Best-sellers
            </h2>
          </div>
          <p className="max-w-sm text-street-white/60">
            Ceux que tout le monde commande. Ajoute-les au panier et file sur
            WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BEST_SELLERS.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
