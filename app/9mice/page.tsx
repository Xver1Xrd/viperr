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

const artist = getArtist("9mice");
const releases = getReleasesByIds(artist.releaseIds);
const tracks = getPreviewTracksByIds(artist.previewTrackIds);
const galleryItems = getGalleryItemsByIds(artist.galleryIds);

export const metadata = createPageMetadata({
  title: "9mice",
  description:
    "Отдельная страница 9mice: сольные релизы, рабочие превью, медиа и подтверждённые платформы.",
  pathname: "/9mice",
});

export default function NineMicePage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow={artist.eyebrow}
          title="9mice"
          description={artist.heroCopy}
          quote={artist.heroQuote}
          image={artist.image}
          imageAlt={artist.imageAlt}
          accent="cyan"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "9mice" },
          ]}
          actions={[
            { label: "Слушать превью", href: "#audio" },
            {
              label: "Spotify",
              href: "https://open.spotify.com/artist/3v0qTkZvuro4johOZyIhOm",
              variant: "secondary",
              external: true,
            },
          ]}
          metrics={artist.stats}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-24">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-white/40">Подача 9mice</div>
            <p className="mt-4 text-base leading-8 text-white/68">{artist.intro}</p>
            <div className="mt-8 grid gap-3">
              {artist.features.map((feature) => (
                <div key={feature.title} className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-2xl text-white">{feature.title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/62">{feature.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {releases.slice(0, 3).map((release, index) => (
              <Reveal key={release.id} delay={index * 0.06} className="surface-card p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-[0.28fr_0.72fr]">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0d111c]">
                    <div className="relative aspect-square">
                      <Image
                        src={release.cover}
                        alt={release.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 18vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-white/40">
                      {release.dateLabel}
                    </div>
                    <div className="mt-2 font-display text-3xl text-white">{release.title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/64">{release.detail}</p>
                    <a
                      href={release.spotifyUrl ?? release.appleUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                    >
                      {release.spotifyUrl ? "Открыть в Spotify" : "Открыть в Apple Music"}
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="audio" className="space-y-10">
          <SectionHeading
            eyebrow="Audio"
            title="Треки и площадки 9mice"
            description="Здесь собраны три встроенных Apple Music-превью и один прямой внешний переход для трека, у которого на сайте не подтверждён отдельный фрагмент. Интерфейс остаётся честным: без фейкового play и псевдо-waveform."
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
              eyebrow="Releases"
              title="Сольный каталог и общие точки входа"
              description="В каталоге 9mice есть и собственные релизы, и совместные работы, если они важны для общей картины проекта."
            />
            <Link
              href="/releases"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Полный каталог
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {releases.slice(3).map((release, index) => (
              <Reveal key={release.id} delay={index * 0.05}>
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Visuals"
            title="Медиа-блок 9mice"
            description="Эта страница построена холоднее и чище, поэтому галерея здесь собрана как связка portrait + cover-wall + общий кадр проекта."
          />
          <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
            <Reveal className="surface-card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={galleryItems[0]?.src ?? artist.image}
                  alt={galleryItems[0]?.alt ?? artist.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                    {galleryItems[0]?.tone}
                  </div>
                  <div className="mt-2 font-display text-3xl text-white">{galleryItems[0]?.title}</div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {galleryItems.slice(1).map((item, index) => (
                <Reveal key={item.id} delay={index * 0.05} className="surface-card overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/24 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/38">
                        {item.tone}
                      </div>
                      <div className="mt-2 font-display text-2xl text-white">{item.title}</div>
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
            title="Площадки 9mice"
            description="Ссылки ниже подобраны так, чтобы оставаться полезными: никакой неподтверждённой мишуры, только рабочие переходы."
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
