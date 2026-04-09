import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
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
  title: {
    default: "Kai Angel x 9mice | VIPERR",
    template: "%s | VIPERR",
  },
  description:
    "Атмосферный editorial-сайт о Kai Angel и 9mice: dark luxury, digital glamour, релизы, эпохи и визуальная энергия VIPERR.",
  applicationName: "VIPERR",
  keywords: [
    "Kai Angel",
    "9mice",
    "VIPERR",
    "music editorial site",
    "dark luxury design",
    "fashion music archive",
  ],
  openGraph: {
    title: "Kai Angel x 9mice | VIPERR",
    description:
      "Fashion-coded music universe with cinematic motion, releases, gallery frames and a live editorial rhythm.",
    type: "website",
    locale: "ru_RU",
    siteName: "VIPERR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Angel x 9mice | VIPERR",
    description:
      "Digital luxury promo site for the Kai Angel and 9mice orbit.",
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
        {children}
      </body>
    </html>
  );
}
