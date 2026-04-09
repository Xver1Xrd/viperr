"use client";

import { startTransition, useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Radio } from "lucide-react";
import type { TrackItem } from "@/lib/data";
import { cn, formatPlayerTime } from "@/lib/utils";

type TrackPlayerProps = {
  tracks: TrackItem[];
};

export function TrackPlayer({ tracks }: TrackPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeTrack = tracks[activeIndex];

  const tick = useEffectEvent(() => {
    if (!isPlaying) {
      return;
    }

    setProgress((current) => {
      const next = current + activeTrack.step;

      if (next >= 100) {
        startTransition(() => {
          setActiveIndex((prev) => (prev + 1) % tracks.length);
        });
        return 0;
      }

      return next;
    });
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      tick();
    }, 95);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="glass-panel editorial-border overflow-hidden rounded-[2rem]">
      <div className="grid gap-8 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:p-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-90">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 16% 18%, ${activeTrack.accent} 0%, transparent 26%), radial-gradient(circle at 82% 0%, rgba(255,255,255,0.18) 0%, transparent 18%), linear-gradient(180deg, rgba(5, 6, 10, 0.08), rgba(5, 6, 10, 0.5))`,
              }}
            />
          </div>

          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/45">
                Listening experience
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/70">
                <Radio className="size-3.5" />
                pseudo player / no streaming embed
              </p>
            </div>

            <button
              type="button"
              aria-label={isPlaying ? "Pause player" : "Play player"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] text-white transition-colors duration-300 hover:bg-white/[0.14]"
              onClick={() => setIsPlaying((value) => !value)}
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack.title}
              initial={{ opacity: 0, y: 18, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mt-8"
            >
              <p className="text-xs uppercase tracking-[0.26em] text-white/52">
                {activeTrack.artist}
              </p>
              <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
                {activeTrack.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                {activeTrack.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[activeTrack.phase, activeTrack.tempo, activeTrack.durationLabel].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[0.66rem] uppercase tracking-[0.28em] text-white/68"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 mt-10">
            <div className="flex h-28 items-end gap-1.5 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4">
              {activeTrack.waveform.map((height, index) => (
                <motion.span
                  key={`${activeTrack.title}-${index}`}
                  initial={{ height: `${Math.max(12, height * 0.5)}%` }}
                  animate={{
                    height: `${height}%`,
                    opacity: progress > (index / activeTrack.waveform.length) * 100 ? 1 : 0.48,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-full"
                  style={{
                    background:
                      progress > (index / activeTrack.waveform.length) * 100
                        ? `linear-gradient(180deg, rgba(255,255,255,0.96), ${activeTrack.accent})`
                        : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.28em] text-white/46">
              <span>{formatPlayerTime(progress, activeTrack.durationSeconds)}</span>
              <span>{activeTrack.durationLabel}</span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${activeTrack.accent}, rgba(255,255,255,0.95))`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {tracks.map((track, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={track.title}
                type="button"
                className={cn(
                  "group relative overflow-hidden rounded-[1.5rem] border px-4 py-4 text-left transition-all duration-300 sm:px-5",
                  isActive
                    ? "border-white/16 bg-white/[0.08] shadow-[0_0_40px_rgba(114,168,255,0.12)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/12 hover:bg-white/[0.06]",
                )}
                onClick={() => {
                  startTransition(() => {
                    setActiveIndex(index);
                  });
                  setProgress(0);
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-1 rounded-r-full transition-opacity duration-300"
                  style={{
                    background: track.accent,
                    opacity: isActive ? 1 : 0,
                  }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.28em] text-white/42">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 font-display text-2xl uppercase leading-none text-white sm:text-[1.85rem]">
                      {track.title}
                    </h4>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/45">
                      {track.artist}
                    </p>
                  </div>

                  <div className="text-right text-[0.66rem] uppercase tracking-[0.24em] text-white/42">
                    <p>{track.phase}</p>
                    <p className="mt-2">{track.durationLabel}</p>
                  </div>
                </div>

                <div className="relative mt-4 flex items-end gap-1">
                  {track.waveform.slice(0, 12).map((height, barIndex) => (
                    <span
                      key={`${track.title}-mini-${barIndex}`}
                      className="flex-1 rounded-full transition-all duration-300"
                      style={{
                        height: `${Math.max(18, height * 0.5)}px`,
                        background:
                          isActive || barIndex < 4
                            ? `linear-gradient(180deg, rgba(255,255,255,0.9), ${track.accent})`
                            : "rgba(255,255,255,0.12)",
                      }}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
