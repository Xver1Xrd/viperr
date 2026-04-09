import { GalleryMasonry } from "@/components/site/gallery/GalleryMasonry";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageContainer } from "@/components/site/layout/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { galleryItems } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Галерея",
  description:
    "Галерея VIPERR: изображения артистов, обложки релизов и видео-кадры в отдельной медиа-странице с lightbox.",
  pathname: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Media"
          title="Галерея"
          description="Здесь собраны реальные медиафайлы из проекта: artist-изображения, cover art и видео-кадры. Страница работает как отдельный visual archive, а не как случайная сетка картинок."
          image="/media/artists/duo-bandlink.jpeg"
          imageAlt="Kai Angel и 9mice"
          accent="violet"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "Галерея" },
          ]}
          actions={[
            { label: "Открыть релизы", href: "/releases" },
            { label: "Официальные ссылки", href: "/links", variant: "secondary" },
          ]}
          metrics={[
            { label: "Всего медиа-элементов", value: String(galleryItems.length) },
            { label: "Категории", value: "artists / stills / covers" },
            { label: "Режим просмотра", value: "lightbox" },
          ]}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-20">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Media Grid"
            title="Полная визуальная сетка"
            description="В отличие от прошлой версии, здесь есть настоящие изображения, а не пустые блоки. Любую карточку можно раскрыть в отдельный lightbox."
          />
          <Reveal>
            <GalleryMasonry items={galleryItems} />
          </Reveal>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Artist images",
              text: "Официальные artist-изображения помогают удерживать лицо проекта, а не подменять его абстрактной графикой.",
            },
            {
              title: "Cover archive",
              text: "Обложки релизов встроены в галерею как часть общей истории: это и музыкальный архив, и рабочий визуальный слой.",
            },
            {
              title: "Video stills",
              text: "Кадры из видео добавляют живое движение и не дают галерее превратиться в просто витрину квадратных картинок.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-white/38">Source layer</div>
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
