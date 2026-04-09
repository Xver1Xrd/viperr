"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { PreviewTrack } from "@/lib/site-data";
import { useAudioPreview } from "./AudioPreviewProvider";
import { cn, formatSeconds } from "@/lib/utils";

type TrackPreviewCardProps = {
  track: PreviewTrack;
};

export function TrackPreviewCard({ track }: TrackPreviewCardProps) {
  const { currentTrack, isPlaying, currentTime, duration, toggleTrack } = useAudioPreview();
  const hasPreview = Boolean(track.previewUrl);
  const active = currentTrack?.id === track.id;
  const progress = hasPreview && active && duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-white/8">
          <Image src={track.cover} alt={track.coverAlt} fill sizes="80px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            {track.previewLabel}
          </div>
          <h3 className="mt-2 truncate font-display text-2xl text-white">{track.title}</h3>
          <p className="text-sm text-white/54">{track.artistLabel}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/66">{track.note}</p>

      {hasPreview ? (
        <>
          <div className="mt-5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.16, ease: "linear" }}
              className="h-2 rounded-full bg-white"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/38">
            <span>{active ? formatSeconds(currentTime) : "00:00"}</span>
            <span>{formatSeconds(active ? duration : 30)}</span>
          </div>
        </>
      ) : (
        <div className="mt-5 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-white/42">
          Без встроенного аудио на сайте
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        {hasPreview ? (
          <>
            <button
              type="button"
              onClick={() => toggleTrack(track)}
              className={cn(
                "inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300",
                active
                  ? "border border-white/16 bg-white text-slate-950 hover:bg-slate-100"
                  : "border border-white/12 bg-white/6 text-white hover:bg-white/10",
              )}
            >
              {active && isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {active && isPlaying ? "Пауза" : active ? "Продолжить" : "Слушать превью"}
            </button>
            <a
              href={track.listenUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-white/12 bg-transparent px-5 text-sm font-semibold text-white/76 transition-all duration-300 hover:bg-white/8 hover:text-white"
            >
              {track.platformLabel}
            </a>
          </>
        ) : (
          <a
            href={track.listenUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full border border-white/16 bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100"
          >
            Открыть на {track.platformLabel}
          </a>
        )}
      </div>
    </article>
  );
}
