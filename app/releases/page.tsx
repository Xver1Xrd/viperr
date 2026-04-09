import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageContainer } from "@/components/site/layout/PageContainer";
import { ReleaseCatalog } from "@/components/site/sections/ReleaseCatalog";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { releases } from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Релизы",
  description:
    "Каталог релизов Kai Angel и 9mice: сольные и совместные работы, даты, обложки и быстрые переходы на площадки.",
  pathname: "/releases",
});

export default function ReleasesPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Discography"
          title="Релизы"
          description="Хронология сольных и совместных релизов Kai Angel и 9mice: от ранних точек входа до более поздних и собранных работ."
          image="/media/covers/heavy-metal-2.jpg"
          imageAlt="Обложка альбома Heavy Metal 2"
          accent="violet"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "Релизы" },
          ]}
          actions={[
            { label: "Смотреть галерею", href: "/gallery" },
            { label: "Страница ссылок", href: "/links", variant: "secondary" },
          ]}
          metrics={[
            { label: "Карточек в каталоге", value: String(releases.length) },
            { label: "Диапазон по годам", value: "2021 → 2025" },
            { label: "Форматы", value: "albums / singles / EP" },
          ]}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-20">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Catalog"
            title="Полный архив"
            description="Каталог собран так, чтобы быстро переключаться между общими релизами, Kai Angel и 9mice и видеть всю линию по порядку."
          />
          <Reveal>
            <ReleaseCatalog releases={releases} />
          </Reveal>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Даты и порядок",
              text: "Хронология помогает видеть, где начинаются сольные этапы и в каких точках Kai Angel и 9mice особенно сильно сходятся вместе.",
            },
            {
              title: "Обложки в каталоге",
              text: "Каждый релиз держится не только на дате, но и на визуале, поэтому каталог читается как история образа, а не только как список названий.",
            },
            {
              title: "Переходы на площадки",
              text: "У каждого релиза есть прямой переход на платформу, так что после каталога можно сразу уходить в музыку.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full p-6">
                <div className="club-tag">В архиве</div>
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
