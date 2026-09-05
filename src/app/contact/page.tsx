import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Location } from "@/components/sections/location";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Street Food Cotonou — Haie Vive, à proximité du 3.14. WhatsApp, téléphone et itinéraire Google Maps.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-16">
        <Location />
      </main>
      <Footer />
    </>
  );
}
