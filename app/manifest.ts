import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VIPERR",
    short_name: "VIPERR",
    description:
      "VIPERR: Kai Angel и 9mice, релизы, визуалы и треки в одном архиве.",
    start_url: "/",
    display: "standalone",
    background_color: "#04060c",
    theme_color: "#04060c",
    lang: "ru",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
