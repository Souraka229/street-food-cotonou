import type { MetadataRoute } from "next";

const base = "https://street-food-cotonou.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/menu", "/commander", "/experience", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
