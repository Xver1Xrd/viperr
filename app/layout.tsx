import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { GlobalAudioBar } from "@/components/site/audio/GlobalAudioBar";
import { AudioPreviewProvider } from "@/components/site/audio/AudioPreviewProvider";
import { SiteFooter } from "@/components/site/layout/SiteFooter";
import { SiteHeader } from "@/components/site/layout/SiteHeader";
import { siteUrl } from "@/lib/site-data";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
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
    "Многостраничный production-ready сайт о Kai Angel и 9mice: отдельные страницы артистов, каталог релизов, реальная галерея и рабочие 30-секундные превью Apple Music.",
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
      "Полноценный многостраничный сайт о Kai Angel и 9mice с релизами, галереей и рабочими аудио-превью.",
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
      "Многостраничный сайт о Kai Angel и 9mice: релизы, галерея, официальные превью и ссылки на площадки.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
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
      className={`${bricolageGrotesque.variable} ${manrope.variable} h-full scroll-smooth`}
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
            <div className="absolute left-[-10rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_70%)] blur-3xl" />
            <div className="absolute right-[-12rem] top-[12rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_70%)] blur-3xl" />
            <div className="absolute bottom-[-12rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.12),transparent_70%)] blur-3xl" />
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
