import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ArtistProfile } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ArtistSpotlightCardProps = {
  artist: ArtistProfile;
};

const accentClass = {
  crimson: "from-rose-500/20 via-rose-500/8 to-transparent",
  cyan: "from-cyan-400/18 via-sky-500/8 to-transparent",
};

export function ArtistSpotlightCard({ artist }: ArtistSpotlightCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-[0_28px_70px_rgba(0,0,0,0.24)]">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b opacity-80",
          accentClass[artist.accent],
        )}
      />
      <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0c111a]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
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
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
              {artist.eyebrow}
            </div>
            <h3 className="font-display text-4xl text-white">{artist.name}</h3>
            <p className="text-base leading-8 text-white/66">{artist.intro}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {artist.stats.map((stat) => (
              <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-6 text-white/52">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${artist.slug}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/16 bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100"
            >
              Открыть страницу
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/releases"
              className="inline-flex min-h-12 items-center rounded-full border border-white/12 bg-white/6 px-5 text-sm font-semibold text-white/84 transition-all duration-300 hover:bg-white/10"
            >
              Смотреть релизы
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
