"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/cart-provider";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/#offres", label: "Nos offres" },
  { href: "/#experience", label: "L'expérience" },
  { href: "/#localisation", label: "Nous trouver" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-street-black text-street-white shadow-md"
          : "bg-transparent text-street-white",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-2xl uppercase tracking-tight md:text-3xl"
        >
          Street Food
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide transition hover:text-street-yellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Ouvrir le panier"
            className="relative"
          >
            <ShoppingBag className="size-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-street-yellow text-[11px] font-black text-street-black">
                {count}
              </span>
            )}
          </button>

          <Link
            href="/commander"
            className="hidden rounded-full bg-street-red px-5 py-2.5 text-sm font-black uppercase text-white transition hover:scale-105 md:inline-block"
          >
            Commander
          </Link>

          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-street-white/15 bg-street-black text-street-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-bold uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/commander"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-street-red px-5 py-3 text-center text-base font-black uppercase text-white"
            >
              Commander
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
