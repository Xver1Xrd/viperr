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
    "Каталог релизов Kai Angel и 9mice: даты, подписи, обложки и быстрые переходы на Spotify и Apple Music.",
  pathname: "/releases",
});

export default function ReleasesPage() {
  return (
    <>
      <PageContainer>
        <PageHero
          eyebrow="Discography"
          title="Релизы"
          description="Каталог собран как практическая страница: есть даты, подписи, визуалы, быстрый фильтр по артистам и прямые ссылки на Spotify там, где он подтверждён. Для остального сохранён аккуратный fallback на Apple Music."
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
            { label: "Источник переходов", value: "Spotify → Apple fallback" },
          ]}
        />
      </PageContainer>

      <PageContainer className="section-space space-y-20">
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Catalog"
            title="Полный архив"
            description="Фильтр ниже не перегружен лишним UI: можно быстро переключаться между общими релизами, Kai Angel и 9mice, не теряя общий контекст каталога."
          />
          <Reveal>
            <ReleaseCatalog releases={releases} />
          </Reveal>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Даты и порядок",
              text: "В релизах сохранён хронологический контекст, чтобы было проще понимать, где сольные этапы, а где важные совместные точки проекта.",
            },
            {
              title: "Обложки в каталоге",
              text: "Каждая карточка сразу привязана к визуалу релиза. Это делает страницу полезной не только для переходов, но и как для визуального обзора.",
            },
            {
              title: "Переходы на площадки",
              text: "У каждой карточки есть прямой выход на Spotify там, где он найден, и fallback на Apple Music для остальных релизов. Так страница не заканчивается на описании, а продолжает пользовательский маршрут.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="surface-card h-full p-6">
                <div className="club-tag">Archive note</div>
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
