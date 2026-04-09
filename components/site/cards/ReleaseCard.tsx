import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReleaseItem } from "@/lib/site-data";

type ReleaseCardProps = {
  release: ReleaseItem;
};

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1">
      <div className="grid gap-5 p-5 sm:p-6">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d111c]">
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

        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/42">
          <span>{release.dateLabel}</span>
          <span className="text-white/22">•</span>
          <span>{release.format}</span>
        </div>

        <div>
          <h3 className="font-display text-3xl text-white">{release.title}</h3>
          <p className="mt-2 text-sm text-white/54">{release.artistLabel}</p>
        </div>

        <div className="grid gap-3 text-sm text-white/64 sm:grid-cols-2">
          <div className="rounded-[18px] border border-white/10 bg-white/5 p-3">
            <div className="text-xs uppercase tracking-[0.22em] text-white/38">Объём</div>
            <div className="mt-1 text-white">{release.trackCount}</div>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-white/5 p-3">
            <div className="text-xs uppercase tracking-[0.22em] text-white/38">Контекст</div>
            <div className="mt-1 text-white">{release.runtime}</div>
          </div>
        </div>

        <p className="text-sm leading-7 text-white/66">{release.detail}</p>

        <a
          href={release.appleUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-between rounded-full border border-white/12 bg-white/6 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
        >
          Открыть в Apple Music
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
