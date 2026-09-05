import Image from "next/image";
import { unsplash } from "@/lib/utils";

export function WhyBento() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-8">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-street-red">
        Pourquoi Street Food ?
      </p>
      <h2 className="mb-10 font-display text-4xl uppercase md:text-6xl">
        4 bonnes raisons
      </h2>

      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <article className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border-2 border-street-black bg-street-black p-6 text-street-white md:col-span-2 md:row-span-1">
          <Image
            src={unsplash("photo-1550547660-d9450f859349", 1200)}
            alt="Plats généreux Street Food"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover opacity-45"
          />
          <h3 className="relative font-display text-3xl uppercase md:text-4xl">
            Des plats généreux
          </h3>
          <p className="relative mt-1 text-street-white/70">
            On ne compte pas les portions. Tu repars calé.
          </p>
        </article>

        <article className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-street-black bg-street-yellow p-6 text-center text-street-black">
          <p className="font-display text-5xl uppercase leading-none md:text-6xl">
            1 000 F
          </p>
          <p className="mt-2 font-bold uppercase">Le premier prix</p>
        </article>

        <article className="flex min-h-[220px] flex-col justify-end rounded-2xl border-2 border-street-black bg-street-red p-6 text-street-white">
          <h3 className="font-display text-3xl uppercase md:text-4xl">Cotonou</h3>
          <p className="mt-1 text-street-white/80">
            Haie Vive. Le goût de la ville, à côté du 3.14.
          </p>
        </article>

        <article className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl border-2 border-street-black bg-street-black p-6 text-street-white md:col-span-2">
          <Image
            src={unsplash("photo-1541544741938-0af808871cc0", 1200)}
            alt="Bonne ambiance chez Street Food"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover opacity-45"
          />
          <h3 className="relative font-display text-3xl uppercase md:text-4xl">
            Des bonnes vibes
          </h3>
          <p className="relative mt-1 text-street-white/70">
            On vient pour manger, on reste pour l&apos;ambiance.
          </p>
        </article>
      </div>
    </section>
  );
}
