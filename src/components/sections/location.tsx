import { MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function Location() {
  return (
    <section
      id="localisation"
      className="bg-street-black py-24 text-street-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-street-yellow">
            Où nous trouver ?
          </p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl">
            Haie Vive
            <br />
            Cotonou
          </h2>
          <p className="mt-4 flex items-center gap-2 text-street-white/70">
            <MapPin className="size-5 shrink-0" />
            {SITE.address}
          </p>
          <p className="mt-1 text-street-white/70">{SITE.hours}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-black uppercase text-street-black transition hover:scale-105"
            >
              Google Maps
            </a>
            <a
              href={whatsappLink(`Bonjour ${SITE.name} !`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-street-red px-6 py-3 font-black uppercase text-white transition hover:scale-105"
            >
              <MessageCircle className="size-5" /> WhatsApp
            </a>
            <a
              href={`tel:${SITE.phoneIntl.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-black uppercase transition hover:bg-white hover:text-street-black"
            >
              <Phone className="size-5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border-2 border-street-white/20">
          <iframe
            title="Carte — Street Food Cotonou, Haie Vive"
            src="https://www.google.com/maps?q=Haie+Vive+Cotonou+3.14&output=embed"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
