import Image from "next/image";
import { unsplash } from "@/lib/utils";

export function Intro() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-8">
      <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.25em] text-street-red">
        Chez Street Food
      </p>
      <h2 className="mx-auto max-w-4xl text-center font-display text-4xl uppercase leading-[0.95] md:text-6xl">
        On ne vient pas seulement manger.
        <br />
        <span className="text-street-red">On vient passer un bon moment.</span>
      </h2>

      <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-street-black">
          <Image
            src={unsplash("photo-1552566626-52f8b828add9", 1000)}
            alt="La salle de Street Food à Haie Vive, Cotonou"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="text-lg leading-relaxed text-muted-foreground">
          <p>
            Né dans les rues de Cotonou, Street Food, c&apos;est l&apos;énergie
            de la ville dans une assiette : des pâtes qui mijotent, des burgers
            qui claquent, de l&apos;indomie comme à la maison — et toujours un
            prix qui laisse sourire.
          </p>
          <p className="mt-4">
            À Haie Vive, on sert vite, on sert chaud, on sert généreux. Sur place
            ou à emporter, tu repars le ventre plein et de bonne humeur.
          </p>
        </div>
      </div>
    </section>
  );
}
