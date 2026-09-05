import Link from "next/link";

export function FinalCta() {
  return (
    <section className="bg-street-red py-24 text-street-white">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">
          On a faim pour toi.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-street-white/80">
          Compose ton panier, envoie-le sur WhatsApp, viens récupérer. Une
          minute, pas plus.
        </p>
        <Link
          href="/commander"
          className="mt-8 inline-block rounded-full bg-street-black px-9 py-5 text-lg font-black uppercase text-white transition hover:scale-105"
        >
          Commander maintenant
        </Link>
      </div>
    </section>
  );
}
