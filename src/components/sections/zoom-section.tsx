import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { unsplash } from "@/lib/utils";

const IMAGES = [
  { src: unsplash("photo-1504674900247-0877df9cc836", 1200), alt: "Assiette généreuse Street Food" },
  { src: unsplash("photo-1568901346375-23c9450c58cd", 1200), alt: "Street Burger cheddar" },
  { src: unsplash("photo-1621996346565-e3dbc646d9a9", 1200), alt: "Spaghetti sauce maison" },
  { src: unsplash("photo-1612929633738-8fe44f7ec841", 1200), alt: "Indomie sautée œuf" },
  { src: unsplash("photo-1573080496219-bb080dd4f877", 1200), alt: "Frites maison dorées" },
  { src: unsplash("photo-1550547660-d9450f859349", 1200), alt: "Chicken Burger croustillant" },
  { src: unsplash("photo-1497534446932-c925b458314e", 1200), alt: "Bissap maison bien frais" },
];

export function ZoomSection() {
  return (
    <section className="bg-street-white dark:bg-street-black">
      <div className="flex h-[45vh] flex-col items-center justify-center px-4 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-street-red">
          Plein les yeux
        </p>
        <h2 className="font-display text-4xl uppercase md:text-6xl">
          Fais défiler, ça zoome
        </h2>
      </div>
      <ZoomParallax images={IMAGES} />
    </section>
  );
}
