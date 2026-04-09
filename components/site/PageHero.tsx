import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type HeroMetric = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  quote?: string;
  image: string;
  imageAlt: string;
  accent: "crimson" | "cyan" | "violet";
  actions: HeroAction[];
  metrics: HeroMetric[];
  breadcrumbs?: Array<{ label: string; href?: string }>;
};

const accentMap = {
  crimson: {
    orbA: "from-[#ff5a36]/34 via-[#ff5a36]/10 to-transparent",
    orbB: "from-[#ffb43a]/14 via-[#ff7a35]/10 to-transparent",
    border: "from-[#ff5a36]/80 via-[#ffb43a]/18 to-transparent",
  },
  cyan: {
    orbA: "from-[#4d7cff]/24 via-[#4d7cff]/10 to-transparent",
    orbB: "from-[#ff5a36]/14 via-[#ffb43a]/10 to-transparent",
    border: "from-[#4d7cff]/70 via-[#ff5a36]/18 to-transparent",
  },
  violet: {
    orbA: "from-[#ff5a36]/30 via-[#ff5a36]/10 to-transparent",
    orbB: "from-[#4d7cff]/12 via-[#ffb43a]/10 to-transparent",
    border: "from-[#ff5a36]/70 via-[#4d7cff]/18 to-transparent",
  },
};

export function PageHero({
  eyebrow,
  title,
  description,
  quote,
  image,
  imageAlt,
  accent,
  actions,
  metrics,
  breadcrumbs,
}: PageHeroProps) {
  const theme = accentMap[accent];

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-18">
      <div className="club-rule mb-8 w-full max-w-xs" />
      <div
        className={cn(
          "pointer-events-none absolute left-[-12rem] top-8 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br blur-[120px]",
          theme.orbA,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-[-14rem] top-16 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br blur-[120px]",
          theme.orbB,
        )}
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="space-y-8">
          {breadcrumbs?.length ? (
            <Reveal className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <div key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="club-chip !px-3 !py-1.5 !text-[11px]"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="club-chip-active !px-3 !py-1.5 !text-[11px]">
                        {crumb.label}
                      </span>
                    )}
                    {!isLast ? <span className="text-white/18">/</span> : null}
                  </div>
                );
              })}
            </Reveal>
          ) : null}

          <Reveal className="space-y-5">
            <div className="club-tag">
              {eyebrow}
            </div>
            <h1 className="club-title max-w-5xl font-display text-6xl leading-[0.88] text-white sm:text-7xl lg:text-[7rem]">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {description}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3" delay={0.06}>
            {actions.map((action) => {
              const className =
                action.variant === "secondary"
                  ? "club-button-secondary"
                  : "club-button";

              const content = (
                <span
                  className={cn(
                    "inline-flex min-h-12 items-center",
                    className,
                  )}
                >
                  {action.label}
                </span>
              );

            return action.external ? (
              <a key={action.href} href={action.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : action.href.startsWith("#") ? (
              <a key={action.href} href={action.href}>
                {content}
              </a>
            ) : (
              <Link key={action.href} href={action.href}>
                {content}
              </Link>
            );
            })}
          </Reveal>

          {quote ? (
            <Reveal className="surface-card relative max-w-xl overflow-hidden p-5 text-sm leading-7 text-white/68 shadow-[0_24px_70px_rgba(0,0,0,0.28)]" delay={0.1}>
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#ff5a36] via-[#ffb43a] to-transparent" />
              <div className="pl-3">{quote}</div>
            </Reveal>
          ) : null}
        </div>

        <Reveal className="relative" delay={0.1}>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-80 blur-[70px]",
              theme.border,
            )}
          />
          <div className="surface-card relative overflow-hidden rounded-[30px] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff5a36] via-[#ffb43a] to-transparent" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0b0b]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="absolute left-3 top-3 z-10">
                <span className="club-tag">Портрет</span>
              </div>
              <div className="relative aspect-[1/1.02] sm:aspect-[4/4.3]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="club-stat p-4"
                >
                  <div className="font-display text-3xl leading-none text-white">{metric.value}</div>
                  <div className="mt-2 text-[11px] uppercase leading-5 tracking-[0.18em] text-white/56">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
