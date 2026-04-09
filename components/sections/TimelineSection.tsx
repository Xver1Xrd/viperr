import type { TimelineItem } from "@/lib/data";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";

type TimelineSectionProps = {
  items: TimelineItem[];
};

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <Section
      id="timeline"
      eyebrow="Era / evolution"
      title="From ignition to next transmission."
      description="Эта шкала не про скучную хронику. Здесь развитие считывается как смена плотности, цвета, масштаба и степени контроля над собственной эстетикой."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-8">
        <Reveal className="lg:sticky lg:top-28 lg:h-fit">
          <div className="glass-panel editorial-border rounded-[2rem] p-6 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/42">
              Timeline note
            </p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
              Style never stood still.
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
              От ранних сольных контуров к общей VIPERR-орбите и дальше — к
              расширению мира, где каждый релиз звучит ещё и как новый визуальный
              режим.
            </p>

            <div className="mt-8 grid gap-3">
              {["solo ignition", "shared signal", "world-building", "next transmission"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.68rem] uppercase tracking-[0.3em] text-white/62"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/18 to-white/0" />

          <div className="grid gap-6">
            {items.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>
                <article className="glass-panel editorial-border relative rounded-[2rem] p-6 sm:p-8">
                  <div className="absolute -left-[2.05rem] top-10 h-3 w-3 rounded-full bg-white shadow-[0_0_32px_rgba(255,255,255,0.45)]" />
                  <div className="absolute right-5 top-5 font-display text-6xl uppercase text-white/8 sm:text-[5.5rem]">
                    {item.year}
                  </div>

                  <p className="text-[0.66rem] uppercase tracking-[0.32em] text-white/42">
                    {item.phase}
                  </p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl uppercase leading-[0.94] text-white sm:text-[2.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-[0.64rem] uppercase tracking-[0.3em] text-white/62"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
