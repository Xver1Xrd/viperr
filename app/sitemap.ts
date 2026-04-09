import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";

const routes = ["/", "/kai-angel", "/9mice", "/releases", "/gallery", "/links"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-09T00:00:00.000Z");

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
