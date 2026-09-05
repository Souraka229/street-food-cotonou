import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-street-black bg-street-black text-street-white">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-3xl uppercase">Street Food</p>
          <p className="mt-1 font-display text-lg uppercase text-street-yellow">
            {SITE.slogan}
          </p>
          <p className="mt-2 max-w-sm text-street-white/60">
            {SITE.address}. Ouvert {SITE.hours.toLowerCase()}.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-wide text-street-yellow">
            Navigation
          </p>
          <ul className="space-y-2 text-street-white/70">
            <li>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/commander" className="hover:text-white">
                Commander
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-white">
                L&apos;expérience
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-wide text-street-yellow">
            Suivre
          </p>
          <ul className="space-y-2 text-street-white/70">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneIntl.replace(/\s/g, "")}`}
                className="hover:text-white"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-street-white/10 px-4 py-6 text-center text-xs text-street-white/40 md:px-8">
        © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
