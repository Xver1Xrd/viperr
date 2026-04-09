import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  pathname: string;
};

export function createPageMetadata({
  title,
  description,
  pathname,
}: MetadataInput): Metadata {
  const url = new URL(pathname, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "VIPERR",
      locale: "ru_RU",
      images: [
        {
          url: new URL("/opengraph-image", siteUrl),
          width: 1200,
          height: 630,
          alt: "VIPERR",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/opengraph-image", siteUrl)],
    },
  };
}
