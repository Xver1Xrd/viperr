import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones, ImageIcon, LibraryBig } from "lucide-react";
import { ArtistSpotlightCard } from "@/components/site/cards/ArtistSpotlightCard";
import { ReleaseCard } from "@/components/site/cards/ReleaseCard";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrackPreviewCard } from "@/components/site/audio/TrackPreviewCard";
import { PageContainer } from "@/components/site/layout/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import {
  artists,
  getGalleryItemsByIds,
  getPreviewTracksByIds,
  getReleasesByIds,
  homeFeaturedReleaseIds,
  homeGalleryIds,
  homePreviewTrackIds,
  siteHighlights,
} from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Главная",
  description:
    "Главная страница VIPERR: Kai Angel и 9mice, отдельные страницы артистов, каталог релизов, галерея и рабочие официальные аудио-превью.",
  pathname: "/",
});

const featuredReleases = getReleasesByIds(homeFeaturedReleaseIds);
const featuredTracks = getPreviewTracksByIds(homePreviewTrackIds);
const galleryPreview = getGalleryItemsByIds(homeGalleryIds);

export default function HomePage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Multi-page music project"
          title="Kai Angel + 9mice"
          description="VIPERR собирает в одном месте ключевые релизы, отдельные страницы артистов, рабочие Apple Music-превью, Spotify-маршруты, архивные внешние ссылки, галерею и быстрые переходы на официальные площадки. Это не одностраничный концепт, а готовый музыкальный сайт с понятной структурой."
          quote="На сайте нет фальшивого плеера: если у карточки есть встроенное превью, оно реально играет. Если превью нет, карточка честно ведёт на внешнюю платформу."
          image="/media/artists/duo-bandlink.jpeg"
          imageAlt="Kai Angel и 9mice"
          accent="violet"
          actions={[
            { label: "Открыть релизы", href: "/releases" },
            { label: "Смотреть галерею", href: "/gallery", variant: "secondary" },
          ]}
          metrics={siteHighlights.slice(0, 3)}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-24">
        <section>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {siteHighlights.map((item) => (
                <div key={item.label} className="surface-card p-5 sm:p-6">
                  <div className="font-display text-4xl text-white">{item.value}</div>
                  <p className="mt-2 text-sm leading-7 text-white/62">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Artists"
            title="Две отдельные страницы, два разных акцента"
            description="Kai Angel и 9mice разведены по отдельным маршрутам не формально, а по подаче. У каждой страницы свой ритм, свой цветовой акцент и своя логика контента."
          />
          <div className="grid gap-6 xl:grid-cols-2">
            <Reveal>
              <ArtistSpotlightCard artist={artists["kai-angel"]} />
            </Reveal>
            <Reveal delay={0.08}>
              <ArtistSpotlightCard artist={artists["9mice"]} />
            </Reveal>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Releases"
              title="Выбранные релизы"
              description="На главной показаны три больших точки входа. Полный каталог с датами и быстрым фильтром собран на отдельной странице releases."
            />
            <Link
              href="/releases"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Весь каталог
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredReleases.map((release, index) => (
              <Reveal key={release.id} delay={index * 0.06}>
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Listen"
            title="Подборка для прослушивания"
            description="В блоке ниже собраны и встроенные Apple Music-превью, и прямые переходы на внешние платформы. Формат каждой карточки показан честно, без поддельного play."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredTracks.map((track, index) => (
              <Reveal key={track.id} delay={index * 0.05}>
                <TrackPreviewCard track={track} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Gallery"
              title="Галерея с реальными файлами"
              description="Внутри проекта уже лежат artist-изображения, видео-кадры и обложки релизов. На главной показан короткий фрагмент, а полная сетка с lightbox вынесена в отдельный маршрут."
            />
            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Полная галерея
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {galleryPreview.slice(0, 2).map((item) => (
                <div key={item.id} className="surface-card overflow-hidden">
                  <div className="relative aspect-[4/4.4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                        {item.tone}
                      </div>
                      <div className="mt-2 font-display text-2xl text-white">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>

            <div className="grid gap-4">
              <Reveal className="surface-card overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={galleryPreview[2]?.src ?? "/media/artists/9mice-portrait.jpg"}
                    alt={galleryPreview[2]?.alt ?? "9mice"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                      {galleryPreview[2]?.tone}
                    </div>
                    <div className="mt-2 font-display text-2xl text-white">
                      {galleryPreview[2]?.title}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="surface-card p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.24em] text-white/38">
                  Что внутри
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <ImageIcon size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Artist-изображения Kai Angel и 9mice, общая фотография VIPERR и
                      видео-кадр Kai Angel.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <LibraryBig size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Отдельный слой с обложками релизов, чтобы галерея работала не только
                      как moodboard, но и как визуальный архив.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Внутренние переходы связывают галерею с релизами и аудио-превью, а не
                      оставляют её отдельным декоративным блоком.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Explore"
            title="Сайт как связанный продукт"
            description="Отсюда можно уйти в разные сценарии: открыть артиста, посмотреть каталог релизов или перейти на страницу ссылок со всеми подтверждёнными площадками."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                href: "/kai-angel",
                title: "Страница Kai Angel",
                text: "Сольные релизы, галерея и отдельный crimson-акцент.",
              },
              {
                href: "/9mice",
                title: "Страница 9mice",
                text: "Холодный клубный ритм, отдельные превью и другой визуальный режим.",
              },
              {
                href: "/links",
                title: "Ссылки и площадки",
                text: "Практическая страница со Spotify, BandLink, SoundCloud и YouTube.",
              },
            ].map((item, index) => (
              <Reveal key={item.href} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="surface-card block p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                    Internal route
                  </div>
                  <div className="mt-3 font-display text-3xl text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Перейти
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </PageContainer>
    </>
  );
}
