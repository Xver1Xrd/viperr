import Link from "next/link";
import { mainNav } from "@/lib/site-data";
import { PageContainer } from "./PageContainer";

const footerLinks = [
  {
    label: "Spotify · Kai Angel",
    href: "https://open.spotify.com/artist/1pxLlPRiWRUBGdSOrVL4f0",
  },
  {
    label: "Spotify · 9mice",
    href: "https://open.spotify.com/artist/3v0qTkZvuro4johOZyIhOm",
  },
  {
    label: "BandLink",
    href: "https://band.link/KAIANGEL9MICE",
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/viperrviperr",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(4,5,10,0.82)]">
      <PageContainer className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="font-display text-2xl tracking-[0.18em] text-white">
            VIPERR
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">
            Многостраничный сайт о Kai Angel и 9mice с отдельными страницами артистов,
            каталогом релизов, реальными 30-секундными превью и аккуратной
            галереей.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/42">
            Навигация
          </div>
          <div className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/68 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/42">
            Площадки
          </div>
          <div className="flex flex-col gap-2">
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/68 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
