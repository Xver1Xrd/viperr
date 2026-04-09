import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ReleaseCard } from "@/components/site/cards/ReleaseCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrackPreviewCard } from "@/components/site/audio/TrackPreviewCard";
import { PageContainer } from "@/components/site/layout/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { getArtist, getGalleryItemsByIds, getPreviewTracksByIds, getReleasesByIds } from "@/lib/site-data";

const artist = getArtist("kai-angel");
const releases = getReleasesByIds(artist.releaseIds);
const tracks = getPreviewTracksByIds(artist.previewTrackIds);
const galleryItems = getGalleryItemsByIds(artist.galleryIds);

export const metadata = createPageMetadata({
  title: "Kai Angel",
  description:
    "Отдельная страница Kai Angel: сольные релизы, рабочие превью, галерея и подтверждённые внешние ссылки.",
  pathname: "/kai-angel",
});

export default function KaiAngelPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow={artist.eyebrow}
          title="Kai Angel"
          description={artist.heroCopy}
          quote={artist.heroQuote}
          image={artist.heroImage ?? artist.image}
          imageAlt={artist.heroImageAlt ?? artist.imageAlt}
          accent="crimson"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "Kai Angel" },
          ]}
          actions={[
            { label: "Смотреть релизы", href: "/releases" },
            {
              label: "Spotify",
              href: "https://open.spotify.com/artist/1pxLlPRiWRUBGdSOrVL4f0",
              variant: "secondary",
              external: true,
            },
          ]}
          metrics={artist.stats}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-24">
        <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <div className="club-tag">Об этой странице</div>
            <p className="mt-4 text-base leading-8 text-white/68">{artist.intro}</p>
            <Link
              href="/links"
              className="club-button-secondary mt-8"
            >
              Все площадки
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {artist.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <div className="surface-card h-full p-6">
                  <div className="club-tag">Focus</div>
                  <h2 className="mt-3 font-display text-2xl text-white">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/64">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Kai Angel Releases"
            title="Сольные и общие релизы"
            description="На странице Kai Angel есть и его сольные релизы, и совместные записи, если они важны для понимания общей линии проекта."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {releases.map((release, index) => (
              <Reveal key={release.id} delay={index * 0.05}>
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Audio"
            title="Рабочие превью Kai Angel"
            description="Здесь оставлены только треки с реальным встроенным звуком. Все четыре карточки ниже запускают рабочие 30-секундные preview-фрагменты."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track, index) => (
              <Reveal key={track.id} delay={index * 0.05}>
                <TrackPreviewCard track={track} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Visuals"
              title="Короткая галерея Kai Angel"
              description="Внутри страницы собраны artist-image, видео-кадр и ключевые обложки. Полная медиа-страница находится отдельно."
            />
            <Link
              href="/gallery"
              className="club-button-secondary"
            >
              Полная галерея
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="surface-card overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={galleryItems[0]?.src ?? artist.image}
                  alt={galleryItems[0]?.alt ?? artist.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/16 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                    {galleryItems[0]?.tone}
                  </div>
                  <div className="mt-2 font-display text-3xl text-white">{galleryItems[0]?.title}</div>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/66">
                    {galleryItems[0]?.caption}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {galleryItems.slice(1, 4).map((item, index) => (
                <Reveal key={item.id} delay={index * 0.05} className="surface-card overflow-hidden">
                  <div className="grid gap-0 sm:grid-cols-[0.7fr_1fr] lg:grid-cols-[0.64fr_1fr]">
                    <div className="relative aspect-square sm:aspect-auto">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                        {item.tone}
                      </div>
                      <div className="mt-2 font-display text-2xl text-white">{item.title}</div>
                      <p className="mt-3 text-sm leading-7 text-white/64">{item.caption}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Links"
            title="Официальные переходы"
            description="На этой странице сохранены только рабочие публичные переходы, которые можно безопасно использовать как базовые."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {artist.links.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.05}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                      {item.category}
                    </div>
                    <div className="mt-3 font-display text-3xl text-white">{item.label}</div>
                    <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Открыть
                    <ExternalLink size={16} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </PageContainer>
    </>
  );
}
