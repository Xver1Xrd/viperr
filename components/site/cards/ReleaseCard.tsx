import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReleaseItem } from "@/lib/site-data";

type ReleaseCardProps = {
  release: ReleaseItem;
};

export function ReleaseCard({ release }: ReleaseCardProps) {
  const href = release.spotifyUrl ?? release.appleUrl;
  const label = release.spotifyUrl ? "Открыть в Spotify" : "Открыть в Apple Music";

  return (
    <article className="surface-card group relative overflow-hidden rounded-[24px] transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5a36] via-[#ffb43a] to-transparent" />
      <div className="grid gap-5 p-5 sm:p-6">
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0f0c0b]">
          <div className="relative aspect-square">
            <Image
              src={release.cover}
              alt={release.coverAlt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="club-tag">{release.format}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/36">{release.dateLabel}</span>
        </div>

        <div>
          <h3 className="font-display text-4xl leading-[0.94] text-white">{release.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/52">{release.artistLabel}</p>
        </div>

        <div className="grid gap-3 text-sm text-white/64 sm:grid-cols-2">
          <div className="club-inset p-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/38">Объём</div>
            <div className="mt-1 text-white">{release.trackCount}</div>
          </div>
          <div className="club-inset p-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/38">Контекст</div>
            <div className="mt-1 text-white">{release.runtime}</div>
          </div>
        </div>

        <p className="text-sm leading-7 text-white/66">{release.detail}</p>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="club-button-secondary inline-flex min-h-12 items-center justify-between"
        >
          {label}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
