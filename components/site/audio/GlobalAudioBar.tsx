"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Pause, Play, X } from "lucide-react";
import { useAudioPreview } from "./AudioPreviewProvider";
import { formatSeconds } from "@/lib/utils";

export function GlobalAudioBar() {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    pause,
    resume,
    seek,
    clear,
  } = useAudioPreview();

  return (
    <AnimatePresence>
      {currentTrack ? (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-6xl rounded-[24px] p-3 backdrop-blur-xl"
        >
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1.4fr_auto] lg:items-center">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-[16px] border border-white/10 bg-[#120f0f]">
                <Image
                  src={currentTrack.cover}
                  alt={currentTrack.coverAlt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="truncate font-display text-lg text-white">
                  {currentTrack.title}
                </div>
                <div className="truncate text-sm text-white/56">{currentTrack.artistLabel}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-[#ffb998]">
                  {currentTrack.previewLabel}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min={0}
                max={duration || 30}
                value={Math.min(currentTime, duration || 30)}
                onChange={(event) => seek(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#ff5a36]"
                aria-label="Перемотка аудио-превью"
              />
              <div className="flex items-center justify-between text-xs text-white/44">
                <span>{formatSeconds(currentTime)}</span>
                <span>{formatSeconds(duration || 30)}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={isPlaying ? pause : resume}
                className="club-button !h-12 !min-w-12 !px-0"
                aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <a
                href={currentTrack.listenUrl}
                target="_blank"
                rel="noreferrer"
                className="club-button-secondary"
              >
                {currentTrack.platformLabel}
                <ExternalLink size={15} />
              </a>
              <button
                type="button"
                onClick={clear}
                className="club-icon-button"
                aria-label="Закрыть плеер"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
