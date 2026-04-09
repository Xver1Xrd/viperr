import type { LucideIcon } from "lucide-react";
import { AudioLines, ExternalLink, Headphones, RadioTower } from "lucide-react";
import type { SocialLink } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { GlowButton } from "@/components/ui/GlowButton";
import { Reveal } from "@/components/ui/Reveal";

type SocialSectionProps = {
  links: SocialLink[];
};

const iconMap: Record<SocialLink["kind"], LucideIcon> = {
  bandlink: ExternalLink,
  soundcloud: AudioLines,
  apple: Headphones,
  stream: RadioTower,
};

export function SocialSection({ links }: SocialSectionProps) {
  return (
    <Section
      id="connect"
      eyebrow="Fan / community / links"
      title="Pick a platform. Stay in the orbit."
      description="Финальный CTA-блок собран как чистая premium-сетка: аккуратные hover-состояния, читаемые ссылки и ощущение, что проект продолжается за пределами сайта."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <Reveal className="glass-panel editorial-border rounded-[2rem] p-6 sm:p-8 lg:col-span-5">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
            Keep the signal alive
          </p>
          <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
            Streaming, archive,
            <br />
            <span className="title-gradient">outside the page.</span>
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
            Если хочется уйти из сайта прямо в музыку, здесь собраны прямые
            переходы в актуальные точки входа. Без шумных баннеров и лишних
            отвлечений.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <GlowButton href="https://band.link/KAIANGEL9MICE">
              Open BandLink
            </GlowButton>
            <GlowButton href="#hero" variant="ghost">
              Back to top
            </GlowButton>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:col-span-7 sm:grid-cols-2">
          {links.map((link, index) => {
            const Icon = iconMap[link.kind];

            return (
              <Reveal key={link.href} delay={index * 0.06}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-panel editorial-border flex h-full flex-col rounded-[2rem] p-5 transition-transform duration-500 hover:-translate-y-1 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/76">
                      <Icon className="size-5" />
                    </div>
                    <ExternalLink className="size-4 text-white/42 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/76" />
                  </div>

                  <p className="mt-8 text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                    {link.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase leading-[0.92] text-white">
                    {link.handle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">
                    {link.description}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
