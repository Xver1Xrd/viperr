import { ArrowUpRight } from "lucide-react";
import type { ReleaseItem } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type DiscographySectionProps = {
  releases: ReleaseItem[];
};

export function DiscographySection({ releases }: DiscographySectionProps) {
  return (
    <Section
      id="releases"
      eyebrow="Discography"
      title="Releases as visual objects."
      description="Карточки собраны как digital archive, а не как обычный список. Каждый релиз здесь ощущается как самостоятельная атмосфера со своим цветом, плотностью и ритмом."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        {releases.map((release, index) => (
          <Reveal
            key={release.title}
            delay={index * 0.06}
            className={cn(
              "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 transition-transform duration-500 hover:-translate-y-1 sm:p-5",
              release.layout,
            )}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", release.accent)} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,rgba(5,6,10,0.12),rgba(5,6,10,0.82))]" />

            <div className="relative z-10 flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-black/28 p-5 backdrop-blur-xl sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/42">
                    {release.date}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.26em] text-white/56">
                    {release.artist}
                  </p>
                </div>
                <div className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.62rem] uppercase tracking-[0.3em] text-white/56">
                  {release.type}
                </div>
              </div>

              <div className="relative mt-8 flex-1 overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5 sm:p-6">
                <div className="absolute -right-10 top-4 font-display text-7xl uppercase tracking-[0.18em] text-white/8 sm:text-[6.5rem]">
                  {release.year}
                </div>
                <div className="absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                  {release.details}
                </p>
                <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-white sm:text-[3rem]">
                  {release.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/68 sm:text-base">
                  {release.description}
                </p>
              </div>

              <a
                href={release.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start text-[0.68rem] uppercase tracking-[0.28em] text-white/66 transition-colors duration-300 hover:text-white"
              >
                Open release
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
