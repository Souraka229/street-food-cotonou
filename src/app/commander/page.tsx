import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommanderForm } from "@/components/checkout/commander-form";

export const metadata: Metadata = {
  title: "Commander",
  description:
    "Compose ta commande Street Food Cotonou et envoie-la sur WhatsApp. Sur place ou à emporter, en moins d'une minute.",
};

export default function CommanderPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="bg-street-black px-4 pb-12 pt-28 text-street-white md:px-8">
          <div className="mx-auto max-w-[1100px]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-street-yellow">
              En 1 minute
            </p>
            <h1 className="font-display text-6xl uppercase md:text-8xl">
              Commander
            </h1>
          </div>
        </section>
        <div className="mx-auto max-w-[1100px] px-4 py-16 md:px-8">
          <CommanderForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
