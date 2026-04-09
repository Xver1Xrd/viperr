import type { ArtistProfile } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type AboutSectionProps = {
  artists: ArtistProfile[];
};

export function AboutSection({ artists }: AboutSectionProps) {
  return (
    <Section
      id="identity"
      eyebrow="Identity"
      title="Two silhouettes. One high-contrast orbit."
      description="Вместо сухой биографии — редакционная подача. Это история о том, как два разных вектора сходятся в общем визуальном токе: глянец, уличная нервность, клубный импульс и чувство собственного стиля."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="glass-panel editorial-border rounded-[2rem] p-6 sm:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/42">
            Editorial note
          </p>
          <h3 className="mt-4 font-display text-3xl uppercase leading-[0.94] text-white sm:text-4xl">
            Controlled chaos,
            <br />
            <span className="title-gradient">not random noise.</span>
          </h3>
          <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
            Kai Angel и 9mice работают не только музыкой. У них сильный образ,
            резкая типажность и ощущение, что каждый релиз уже приходит со
            своей световой схемой, своим цветом и своим способом двигаться в
            кадре.
          </p>
          <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
            В тандеме это даёт редкое качество: проект чувствуется одновременно
            модным, опасным и очень собранным. Не просто звук, а полноценная
            digital-art direction система.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["fashion-coded delivery", "club pressure", "cold hooks", "editorial timing"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-white/62"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {artists.map((artist, index) => (
            <Reveal
              key={artist.name}
              delay={index * 0.08}
              className="glass-panel editorial-border group rounded-[2rem] p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
                  {artist.signal}
                </p>
                <div
                  className={`h-16 w-16 rounded-full bg-gradient-to-br opacity-80 blur-[2px] ${artist.accent}`}
                />
              </div>

              <h3 className="mt-8 font-display text-4xl uppercase leading-[0.92] text-white sm:text-[3rem]">
                {artist.name}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
                {artist.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {artist.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.66rem] uppercase tracking-[0.3em] text-white/64"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
