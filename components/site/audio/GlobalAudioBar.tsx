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
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-6xl rounded-[28px] border border-white/12 bg-[rgba(9,12,20,0.9)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
        >
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1.4fr_auto] lg:items-center">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/6">
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
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/38">
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
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-white"
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
                className="inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-white/14 bg-white text-slate-950 transition-colors duration-300 hover:bg-slate-100"
                aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <a
                href={currentTrack.appleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Apple Music
                <ExternalLink size={15} />
              </a>
              <button
                type="button"
                onClick={clear}
                className="inline-flex h-12 min-w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition-colors duration-300 hover:bg-white/10"
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
