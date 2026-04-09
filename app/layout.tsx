import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import { GlobalAudioBar } from "@/components/site/audio/GlobalAudioBar";
import { AudioPreviewProvider } from "@/components/site/audio/AudioPreviewProvider";
import { SiteFooter } from "@/components/site/layout/SiteFooter";
import { SiteHeader } from "@/components/site/layout/SiteHeader";
import { siteUrl } from "@/lib/site-data";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VIPERR | Kai Angel + 9mice",
    template: "%s | VIPERR",
  },
  description:
    "VIPERR посвящён Kai Angel и 9mice: сольным релизам, общим работам, визуальному архиву и выбранным трекам для быстрого входа.",
  applicationName: "VIPERR",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Kai Angel",
    "9mice",
    "VIPERR",
    "музыкальный сайт",
    "релизы Kai Angel",
    "релизы 9mice",
    "VIPERR site",
  ],
  openGraph: {
    title: "VIPERR | Kai Angel + 9mice",
    description:
      "Kai Angel и 9mice: релизы, визуалы и треки, с которых удобно начинать знакомство.",
    type: "website",
    locale: "ru_RU",
    siteName: "VIPERR",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "VIPERR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIPERR | Kai Angel + 9mice",
    description:
      "Kai Angel и 9mice: релизы, визуалы и треки для быстрого входа.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

export const viewport: Viewport = {
  themeColor: "#080707",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${oswald.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <AudioPreviewProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
          >
            Перейти к контенту
          </a>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-12rem] top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,84,44,0.26),transparent_68%)] blur-[130px]" />
            <div className="absolute right-[-10rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,58,0.14),transparent_68%)] blur-[110px]" />
            <div className="absolute bottom-[-14rem] left-[18%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(77,124,255,0.12),transparent_72%)] blur-[140px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff5a36]/60 to-transparent" />
          </div>
          <SiteHeader />
          <main id="content" className="relative overflow-x-clip pb-28">
            {children}
          </main>
          <SiteFooter />
          <GlobalAudioBar />
        </AudioPreviewProvider>
      </body>
    </html>
  );
}
