"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Disc3, Sparkles } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { Reveal } from "@/components/ui/Reveal";

const heroStats = [
  { label: "Shared orbit", value: "VIPERR" },
  { label: "Era pulse", value: "2023 -> 2026" },
  { label: "Main code", value: "HEAVY METAL" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.6 });
  const stageX = useTransform(springX, (value) => value * 0.85);
  const stageY = useTransform(springY, (value) => value * 0.85);
  const chipX = useTransform(springX, (value) => value * -0.35);
  const chipY = useTransform(springY, (value) => value * -0.35);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;

    pointerX.set(x / 28);
    pointerY.set(y / 28);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0">
        <GradientOrb
          className="left-[8%] top-[18%] h-56 w-56 pulse-glow sm:h-72 sm:w-72"
          from="rgba(142, 123, 255, 0.32)"
          to="rgba(142, 123, 255, 0)"
        />
        <GradientOrb
          className="right-[10%] top-[14%] h-60 w-60 floating-slow sm:h-80 sm:w-80"
          from="rgba(114, 168, 255, 0.24)"
          to="rgba(114, 168, 255, 0)"
        />
        <div className="absolute inset-x-0 top-0 h-[72vh] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_54%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-10">
        <div className="relative z-10">
          <Reveal>
            <div className="hero-label inline-flex items-center gap-3 rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-white/62">
              <Sparkles className="size-3.5" />
              Dark luxury / music editorial / live archive
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[clamp(3.4rem,10vw,8rem)] uppercase leading-[0.86] tracking-[-0.04em] text-white">
              Kai Angel
              <br />
              <span className="title-gradient">x 9mice</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
              Не фан-шаблон и не набор блоков. Это цифровая сцена про холодный
              блеск, fashion-код, клубный импульс и ту самую энергию, в которой
              музыка уже чувствуется как кадр, свет и движение.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <GlowButton href="#releases" icon={Disc3}>
                Enter the archive
              </GlowButton>
              <GlowButton href="#tracks" variant="ghost" icon={ArrowDownRight}>
                Open featured tracks
              </GlowButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel editorial-border rounded-[1.5rem] px-4 py-4 sm:px-5"
                >
                  <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/42">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl uppercase text-white sm:text-[1.85rem]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative z-10">
          <motion.div style={{ x: stageX, y: stageY }} className="relative mx-auto max-w-[38rem]">
            <motion.div
              style={{ x: chipX, y: chipY }}
              className="glass-panel floating-fast absolute -left-3 top-6 z-20 rounded-[1.35rem] px-4 py-3 sm:-left-7"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/44">
                Twin signal
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/74">
                chrome romance / club pressure
              </p>
            </motion.div>

            <motion.div
              style={{ x: chipX, y: useTransform(chipY, (value) => value * -0.6) }}
              className="glass-panel floating-slow absolute -right-1 bottom-6 z-20 rounded-[1.35rem] px-4 py-3 sm:-right-8"
            >
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/44">
                Live note
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/74">
                Heavy Metal 2 / afterlight
              </p>
            </motion.div>

            <div className="glass-panel editorial-border glow-ring relative overflow-hidden rounded-[2.4rem] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.44)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_78%_0%,rgba(114,168,255,0.22),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,#09101c_4%,#070912_36%,#101528_100%)] px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.64rem] uppercase tracking-[0.32em] text-white/42">
                      Digital cover / live scene
                    </p>
                    <h2 className="mt-3 font-display text-3xl uppercase leading-[0.94] text-white sm:text-4xl">
                      No safe mode.
                      <br />
                      Only glow, blur and pressure.
                    </h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-white/58">
                    fashion-runway energy
                  </div>
                </div>

                <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#0a1020_0%,#0a0d17_42%,#07080d_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.18),transparent_20%),radial-gradient(circle_at_74%_8%,rgba(114,168,255,0.28),transparent_26%),radial-gradient(circle_at_50%_72%,rgba(255,92,114,0.18),transparent_28%)]" />
                  <div className="absolute left-[10%] top-[12%] h-24 w-24 rounded-full border border-white/16 bg-white/[0.08] blur-[2px]" />
                  <div className="absolute right-[9%] top-[20%] h-36 w-36 rounded-full border border-white/12 bg-white/[0.04] blur-[6px]" />
                  <div className="absolute bottom-[10%] left-[16%] h-56 w-40 rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(142,123,255,0.18)]" />
                  <div className="absolute bottom-[14%] right-[16%] h-60 w-44 rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(114,168,255,0.16)]" />
                  <div className="absolute inset-x-[18%] top-[18%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute inset-x-[12%] bottom-[28%] h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

                  <div className="absolute inset-x-0 bottom-8 px-6 sm:px-8">
                    <div className="rounded-[1.4rem] border border-white/12 bg-black/32 px-4 py-4 backdrop-blur-xl">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="font-display text-[1.45rem] uppercase tracking-[0.02em] text-white sm:text-[1.75rem]">
                          KAI ANGEL / 9MICE
                        </p>
                        <span className="text-[0.62rem] uppercase tracking-[0.3em] text-white/46">
                          digital luxury signal
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-16 top-[42%] rotate-[-90deg] font-display text-[2.7rem] uppercase tracking-[0.24em] text-white/10 sm:text-[3.3rem]">
                    VIPERR
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/42">
                      Visual code
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      Black chrome, pale blue light, violet haze and controlled
                      concert aggression.
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-white/42">
                      Motion feel
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      Scroll as stage drift: soft parallax, glowing edges and
                      layered transitions instead of noisy tricks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex">
        <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.32em] text-white/35">
          <span>Scroll deeper</span>
          <span className="h-px w-14 bg-white/18" />
          <span>01</span>
        </div>
      </div>
    </section>
  );
}
