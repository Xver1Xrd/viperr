import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageContainer } from "@/components/site/layout/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { artists, linkGroups } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Ссылки",
  description:
    "Страница ссылок VIPERR: Apple Music, BandLink, SoundCloud, YouTube и полезные внутренние маршруты сайта.",
  pathname: "/links",
});

export default function LinksPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Platforms"
          title="Ссылки и площадки"
          description="Эта страница собрана как практический хаб. Здесь нет фейковых контактных форм и случайных иконок: только подтверждённые публичные ссылки и внутренние маршруты, которые реально помогают продолжить знакомство с проектом."
          image="/media/covers/heavy-metal-2.jpg"
          imageAlt="Обложка Heavy Metal 2"
          accent="violet"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "Ссылки" },
          ]}
          actions={[
            { label: "Смотреть релизы", href: "/releases" },
            { label: "Открыть галерею", href: "/gallery", variant: "secondary" },
          ]}
          metrics={[
            { label: "Групп ссылок", value: String(linkGroups.length) },
            { label: "Есть внутри", value: "Apple / BandLink / SoundCloud / YouTube" },
            { label: "Фокус страницы", value: "полезность" },
          ]}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-20">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Link Groups"
            title="Подтверждённые переходы"
            description="Ссылки разбиты по смыслу: где слушать, где смотреть и какие внутренние маршруты сайта полезно открыть следом."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {linkGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <div className="surface-card h-full p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                    {group.title}
                  </div>
                  <div className="mt-3 font-display text-3xl text-white">{group.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/64">{group.description}</p>
                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => {
                      const isInternal = item.href.startsWith("/");

                      if (isInternal) {
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-[22px] border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/8"
                          >
                            <div className="font-semibold text-white">{item.label}</div>
                            <div className="mt-1 text-sm leading-7 text-white/58">
                              {item.description}
                            </div>
                          </Link>
                        );
                      }

                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-[22px] border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/8"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="font-semibold text-white">{item.label}</div>
                            <ExternalLink size={16} className="text-white/48" />
                          </div>
                          <div className="mt-1 text-sm leading-7 text-white/58">
                            {item.description}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Artist Shortcuts"
            title="Быстрый переход к артистам"
            description="Страница links не оторвана от сайта: отсюда можно сразу уйти на нужную artist-page, а не искать её через меню."
          />
          <div className="grid gap-6 xl:grid-cols-2">
            {Object.values(artists).map((artist, index) => (
              <Reveal key={artist.slug} delay={index * 0.06}>
                <Link
                  href={`/${artist.slug}`}
                  className="surface-card block overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="grid gap-0 sm:grid-cols-[0.42fr_0.58fr]">
                    <div className="relative aspect-[4/4.2] sm:aspect-auto">
                      <Image
                        src={artist.image}
                        alt={artist.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                        {artist.eyebrow}
                      </div>
                      <div className="mt-3 font-display text-4xl text-white">{artist.name}</div>
                      <p className="mt-4 text-sm leading-7 text-white/64">{artist.tagline}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                        Открыть страницу
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Без фейковых контактов",
              text: "Если прямых публичных контактов нет, страница этого не выдумывает. Здесь только реальные открытые ссылки.",
            },
            {
              title: "Удобный маршрут",
              text: "Со links-страницы можно сразу уйти на артистов, релизы и галерею, не теряя контекст и не делая лишних кликов.",
            },
            {
              title: "Честный audio-flow",
              text: "Если нужен звук, дальше маршрут ведёт на страницы с реальными превью и на официальные музыкальные площадки.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-white/38">Why it works</div>
                <div className="mt-3 font-display text-3xl text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </PageContainer>
    </>
  );
}
