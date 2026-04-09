"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { Reveal } from "@/components/ui/Reveal";

type ManifestSectionProps = {
  phrases: string[];
};

export function ManifestSection({ phrases }: ManifestSectionProps) {
  const { scrollYProgress } = useScroll();
  const offset = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MarqueeBand items={phrases} />

        <Reveal className="mt-8 overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/26 px-6 py-8 backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-12 lg:py-14">
            <motion.div
              style={{ y: offset }}
              className="pointer-events-none absolute inset-x-0 top-6 text-center font-display text-[4rem] uppercase tracking-[0.26em] text-white/5 sm:text-[6rem] lg:text-[9rem]"
            >
              VIPERR
            </motion.div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                Atmosphere / quote / manifest
              </p>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.8rem)] uppercase leading-[0.88] tracking-[-0.03em] text-white">
                No neutral palette.
                <br />
                <span className="title-gradient">No quiet silhouette.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
                Только блеск, напряжение, резкая мелодичность и ощущение, что
                каждый следующий шаг делается не в безопасный дизайн, а в
                собственную цифровую мифологию.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["chrome drama", "runway nerve", "afterlight tension"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[0.66rem] uppercase tracking-[0.3em] text-white/64"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
