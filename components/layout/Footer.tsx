import Link from "next/link";
import type { NavItem, SocialLink } from "@/lib/data";

type FooterProps = {
  navigation: NavItem[];
  socialLinks: SocialLink[];
};

export function Footer({ navigation, socialLinks }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-black/28 pb-10 pt-16 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
            VIPERR universe
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
            Kai Angel
            <br />
            <span className="title-gradient">x 9mice</span>
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/62 sm:text-base">
            Digital luxury promo page with editorial rhythm, cinematic contrast
            and a live-scroll feeling from the first frame to the final glow.
          </p>
        </div>

        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
            Navigation
          </p>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.22em] text-white/72 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
            Outside links
          </p>
          <div className="mt-5 grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm uppercase tracking-[0.22em] text-white/72 transition-colors duration-300 hover:text-white"
              >
                {link.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/8 px-4 pt-6 text-xs uppercase tracking-[0.24em] text-white/35 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>Built for the VIPERR orbit</span>
        <span>Dark luxury / music archive / 2026</span>
      </div>
    </footer>
  );
}
