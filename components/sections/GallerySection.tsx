"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  return (
    <Section
      id="gallery"
      eyebrow="Visual gallery"
      title="Frames, posters and imagined media stills."
      description="Даже без официальных фото секция не выглядит пустой: это коллекция стилизованных кадров и poster-объектов, которые держат характер и добавляют тот самый вау-эффект."
    >
      <div className="grid auto-rows-[11rem] gap-5 md:grid-cols-8">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.05}
            className={cn("min-h-0", item.layout)}
          >
            <button
              type="button"
              className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition-transform duration-500 hover:-translate-y-1"
              onClick={() => setActiveItem(item)}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", item.accent)} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.18),transparent_20%),linear-gradient(180deg,rgba(5,6,10,0.08),rgba(5,6,10,0.82))]" />
              <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-white/16 bg-white/[0.08] blur-[2px]" />
              <div className="absolute bottom-10 right-8 h-24 w-16 rounded-[999px] border border-white/10 bg-white/[0.05] blur-[3px]" />
              <div className="absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/42">
                    {item.subtitle}
                  </p>
                  <ArrowUpRight className="size-4 text-white/52 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div>
                  <h3 className="font-display text-[1.8rem] uppercase leading-[0.92] text-white sm:text-[2.2rem]">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-black/22 px-3 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-white/64 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/82 px-4 py-8 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel editorial-border relative grid w-full max-w-5xl gap-6 overflow-hidden rounded-[2.4rem] p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close gallery modal"
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/72 transition-colors duration-300 hover:bg-white/[0.12] hover:text-white"
                onClick={() => setActiveItem(null)}
              >
                <X className="size-4" />
              </button>

              <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-85", activeItem.accent)} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_84%_6%,rgba(114,168,255,0.22),transparent_20%),linear-gradient(180deg,rgba(5,6,10,0.05),rgba(5,6,10,0.84))]" />
                <div className="absolute left-[10%] top-[14%] h-28 w-28 rounded-full border border-white/16 bg-white/[0.08] blur-[2px]" />
                <div className="absolute bottom-[10%] right-[12%] h-52 w-36 rounded-[999px] border border-white/10 bg-white/[0.05] blur-[4px]" />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/12 bg-black/28 px-5 py-4 backdrop-blur-xl">
                  <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/42">
                    gallery note
                  </p>
                  <p className="mt-3 font-display text-3xl uppercase leading-[0.92] text-white">
                    {activeItem.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center px-2 py-4 sm:px-4">
                <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/42">
                  {activeItem.subtitle}
                </p>
                <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                  {activeItem.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {activeItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.66rem] uppercase tracking-[0.3em] text-white/64"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
