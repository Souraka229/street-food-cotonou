import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center bg-street-red px-4 py-32 text-center text-street-white">
        <p className="font-display text-[clamp(4rem,18vw,12rem)] leading-none">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl uppercase md:text-5xl">
          Cette page a été mangée.
        </h1>
        <p className="mt-3 max-w-md text-street-white/80">
          La page que tu cherches n&apos;existe pas (ou plus). Mais le menu, lui,
          est toujours servi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-street-black px-7 py-4 font-black uppercase text-white transition hover:scale-105"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/menu"
            className="rounded-full border-2 border-white px-7 py-4 font-black uppercase transition hover:bg-white hover:text-street-black"
          >
            Voir le menu
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
