const WORDS = "PÂTES ★ BURGERS ★ INDOMIE ★ COQUILLETTES ★ BOISSONS ★ COTONOU ★ ";

export function PosterMarquee() {
  return (
    <div className="overflow-hidden border-y-2 border-street-black bg-street-yellow py-4 text-street-black">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="font-display text-3xl uppercase md:text-4xl">
          {WORDS.repeat(4)}
        </span>
        <span
          className="font-display text-3xl uppercase md:text-4xl"
          aria-hidden="true"
        >
          {WORDS.repeat(4)}
        </span>
      </div>
    </div>
  );
}
