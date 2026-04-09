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
    "Галерея VIPERR: портреты артистов, обложки релизов и кадры, которые держат общий визуальный код проекта.",
  pathname: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Media"
          title="Галерея"
          description="Здесь собраны портреты артистов, обложки релизов и кадры, которые лучше всего передают визуальный тон VIPERR."
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
            description="Портреты, постеры, обложки и общие кадры собраны в одну плотную сетку, чтобы лучше видеть, как рядом работают образ, музыка и обложка."
          />
          <Reveal>
            <GalleryMasonry items={galleryItems} />
          </Reveal>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Портреты",
              text: "Крупные портреты удерживают лица артистов в центре и не дают визуалу распадаться на просто красивые фоны.",
            },
            {
              title: "Обложки",
              text: "Обложки здесь важны не меньше фото: по ним хорошо видно, как менялись масштаб, энергия и тон релизов.",
            },
            {
              title: "Живые кадры",
              text: "Кадры добавляют движение и воздух, чтобы галерея не выглядела просто стеной квадратных картинок.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full p-6">
                <div className="club-tag">Слой</div>
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
