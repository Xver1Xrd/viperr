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
    "VIPERR: Kai Angel и 9mice, ключевые релизы, выбранные треки, визуальный архив и основные ссылки.",
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
          eyebrow="VIPERR archive"
          title="Kai Angel + 9mice"
          description="Kai Angel и 9mice идут рядом, но звучат по-разному: у одного больше драматичной собранности, у второго больше клубного давления, скорости и прямого хука."
          quote="Их сила в контрасте: у Kai Angel больше драматичной собранности, у 9mice — клубного давления и прямого хука."
          image="/media/artists/home-hero-user.jpg"
          imageAlt="Фото для главной страницы VIPERR"
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
            title="Две линии, два характера"
            description="Kai Angel и 9mice работают рядом, но ощущаются по-разному. Один держится на драматичном контроле, второй — на темпе, холоде и мгновенном припеве."
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
              description="Три релиза, через которые проще всего почувствовать масштаб VIPERR: сольные пики, совместный центр тяжести и общий визуальный код."
            />
            <Link
              href="/releases"
              className="club-button-secondary"
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
            title="Треки, с которых удобно начать"
            description="Короткая подборка, чтобы быстро поймать разницу между Kai Angel и 9mice: мелодия, темп, напряжение и хук."
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
              title="Кадры, постеры, обложки"
              description="Визуальный слой VIPERR строится не только на портретах, но и на обложках, общем кадре дуэта и плотной концертной энергии."
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
                    src={galleryPreview[2]?.src ?? "/media/artists/9mice-user.jpg"}
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
                <div className="club-tag">
                  Что внутри
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <ImageIcon size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Выбранные портреты Kai Angel и 9mice, общий кадр VIPERR и жёсткий крупный план Kai.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <LibraryBig size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Обложки крупных релизов, по которым хорошо видно, как менялись масштаб, настроение и общий визуальный тон.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones size={18} className="mt-1 text-white/60" />
                    <p className="text-sm leading-7 text-white/64">
                      Тот же визуальный язык продолжается в релизах и треках, поэтому атмосфера не ломается при переходе между разделами.
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
            title="Дальше по разделам"
            description="Если хочется углубиться, дальше можно пойти в сольную линию Kai Angel, в материал 9mice, в релизы или к основным ссылкам."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                href: "/kai-angel",
                title: "Kai Angel",
                text: "Сольные релизы, четыре сильных трека и более жёсткая драматичная подача.",
              },
              {
                href: "/9mice",
                title: "9mice",
                text: "Клубный темп, холодная мелодика и подборка треков, которые цепляют сразу.",
              },
              {
                href: "/links",
                title: "Ссылки",
                text: "Spotify, BandLink, SoundCloud, YouTube и все основные переходы в одном месте.",
              },
            ].map((item, index) => (
              <Reveal key={item.href} delay={index * 0.05}>
                <Link
                  href={item.href}
                  className="surface-card block p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                    Раздел
                  </div>
                  <div className="club-rule mt-3 w-20" />
                  <div className="mt-4 font-display text-3xl text-white">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/64">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#ffb998]">
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
