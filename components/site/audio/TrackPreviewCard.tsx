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
    <article className="surface-card relative overflow-hidden rounded-[24px] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5a36] via-[#ffb43a] to-transparent" />
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[16px] border border-white/10 bg-[#120f0f]">
          <Image src={track.cover} alt={track.coverAlt} fill sizes="80px" className="object-cover" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="club-tag inline-flex">
            {track.previewLabel}
          </div>
          <h3 className="mt-3 truncate font-display text-3xl leading-[0.94] text-white">{track.title}</h3>
          <p className="text-sm uppercase tracking-[0.12em] text-white/54">{track.artistLabel}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/68">{track.note}</p>

      {hasPreview ? (
        <>
          <div className="mt-5 overflow-hidden rounded-full bg-white/8">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.16, ease: "linear" }}
              className="h-2 rounded-full bg-gradient-to-r from-[#ff5a36] to-[#ffb43a]"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/38">
            <span>{active ? formatSeconds(currentTime) : "00:00"}</span>
            <span>{formatSeconds(active ? duration : 30)}</span>
          </div>
        </>
      ) : (
        <div className="club-inset mt-5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-white/42">
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
                active ? "club-button" : "club-button-secondary",
              )}
            >
              {active && isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {active && isPlaying ? "Пауза" : active ? "Продолжить" : "Слушать превью"}
            </button>
            <a
              href={track.listenUrl}
              target="_blank"
              rel="noreferrer"
              className="club-button-secondary"
            >
              {track.platformLabel}
            </a>
          </>
        ) : (
          <a
            href={track.listenUrl}
            target="_blank"
            rel="noreferrer"
            className="club-button"
          >
            Открыть на {track.platformLabel}
          </a>
        )}
      </div>
    </article>
  );
}
