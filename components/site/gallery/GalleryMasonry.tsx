"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import type { GalleryItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type GalleryMasonryProps = {
  items: GalleryItem[];
};

const filters = [
  { key: "all", label: "Все" },
  { key: "artists", label: "Артисты" },
  { key: "stills", label: "Кадры" },
  { key: "covers", label: "Обложки" },
] as const;

export function GalleryMasonry({ items }: GalleryMasonryProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const visibleItems = items.filter((item) => filter === "all" || item.category === filter);
  const activeIndex = visibleItems.findIndex((item) => item.id === activeId);
  const activeItem = activeIndex >= 0 ? visibleItems[activeIndex] : null;

  const showPrev = () => {
    if (!visibleItems.length || activeIndex < 0) {
      return;
    }

    const nextIndex = activeIndex === 0 ? visibleItems.length - 1 : activeIndex - 1;
    setActiveId(visibleItems[nextIndex]?.id ?? null);
  };

  const showNext = () => {
    if (!visibleItems.length || activeIndex < 0) {
      return;
    }

    const nextIndex = activeIndex === visibleItems.length - 1 ? 0 : activeIndex + 1;
    setActiveId(visibleItems[nextIndex]?.id ?? null);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setFilter(item.key);
              setActiveId(null);
            }}
            className={cn(
              filter === item.key ? "club-chip-active" : "club-chip",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className={cn(
              "surface-card group relative overflow-hidden rounded-[24px] text-left shadow-[0_24px_70px_rgba(0,0,0,0.22)]",
              item.size === "wide" && "xl:col-span-2",
              item.size === "portrait" && "md:row-span-2 md:auto-rows-[240px]",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-white/42">{item.tone}</div>
              <div className="mt-2 font-display text-2xl text-white">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-white/66">{item.caption}</div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[rgba(8,7,7,0.94)] p-4 backdrop-blur-xl"
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-center gap-4">
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  className="club-icon-button"
                  aria-label="Предыдущее изображение"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="club-icon-button"
                  aria-label="Следующее изображение"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="club-icon-button"
                  aria-label="Закрыть lightbox"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="surface-card relative overflow-hidden rounded-[24px] bg-[#0b0a0a]">
                  <div className="relative aspect-[4/3] min-h-[320px]">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="surface-card space-y-4 rounded-[24px] p-6">
                  <div className="club-tag">
                    {activeItem.tone}
                  </div>
                  <div className="font-display text-4xl text-white">{activeItem.title}</div>
                  <p className="text-base leading-8 text-white/68">{activeItem.caption}</p>
                  <div className="club-inset p-4 text-sm leading-7 text-white/58">
                    Эта галерея собрана из реальных файлов внутри проекта: официальных artist-изображений,
                    видео-кадров и обложек релизов.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
