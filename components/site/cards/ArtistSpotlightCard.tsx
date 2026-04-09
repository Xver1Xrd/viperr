import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ArtistProfile } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ArtistSpotlightCardProps = {
  artist: ArtistProfile;
};

const accentClass = {
  crimson: "from-[#ff5a36]/22 via-[#ff5a36]/8 to-transparent",
  cyan: "from-[#4d7cff]/20 via-[#4d7cff]/8 to-transparent",
};

export function ArtistSpotlightCard({ artist }: ArtistSpotlightCardProps) {
  return (
    <article className="surface-card group relative overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(0,0,0,0.24)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5a36] via-[#ffb43a] to-transparent" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b opacity-80",
          accentClass[artist.accent],
        )}
      />
      <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0c0b0b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="relative aspect-[1/1.08] sm:aspect-[4/4.3]">
            <Image
              src={artist.image}
              alt={artist.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="club-tag">
              {artist.eyebrow}
            </div>
            <h3 className="font-display text-5xl leading-[0.92] text-white">{artist.name}</h3>
            <p className="text-base leading-8 text-white/68">{artist.intro}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {artist.stats.map((stat) => (
              <div key={stat.label} className="club-stat p-4">
                <div className="font-display text-2xl text-white">{stat.value}</div>
                <div className="mt-2 text-[11px] uppercase leading-5 tracking-[0.16em] text-white/56">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${artist.slug}`}
              className="club-button"
            >
              Открыть страницу
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/releases"
              className="club-button-secondary"
            >
              Смотреть релизы
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
