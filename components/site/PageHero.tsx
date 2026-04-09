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
    orbA: "from-rose-500/26 via-rose-500/12 to-transparent",
    orbB: "from-sky-400/18 via-indigo-500/10 to-transparent",
    border: "from-white/24 via-rose-400/18 to-sky-300/14",
  },
  cyan: {
    orbA: "from-cyan-400/28 via-cyan-400/12 to-transparent",
    orbB: "from-sky-500/18 via-indigo-500/12 to-transparent",
    border: "from-white/24 via-cyan-300/16 to-sky-400/16",
  },
  violet: {
    orbA: "from-violet-400/28 via-violet-500/14 to-transparent",
    orbB: "from-sky-400/14 via-fuchsia-500/12 to-transparent",
    border: "from-white/24 via-violet-300/16 to-sky-400/16",
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
      <div
        className={cn(
          "pointer-events-none absolute left-[-12rem] top-8 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br blur-3xl",
          theme.orbA,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-[-14rem] top-16 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br blur-3xl",
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
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/56 transition-colors duration-300 hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/80">
                        {crumb.label}
                      </span>
                    )}
                    {!isLast ? <span className="text-white/22">/</span> : null}
                  </div>
                );
              })}
            </Reveal>
          ) : null}

          <Reveal className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
              {eyebrow}
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.94] text-white sm:text-6xl lg:text-8xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {description}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3" delay={0.06}>
            {actions.map((action) => {
              const className =
                action.variant === "secondary"
                  ? "border border-white/12 bg-white/6 text-white/84 hover:bg-white/10"
                  : "border border-white/16 bg-white text-slate-950 hover:bg-slate-100";

              const content = (
                <span
                  className={cn(
                    "inline-flex min-h-12 items-center rounded-full px-5 text-sm font-semibold transition-all duration-300",
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
            <Reveal className="max-w-xl rounded-[28px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/66 shadow-[0_24px_70px_rgba(0,0,0,0.28)]" delay={0.1}>
              {quote}
            </Reveal>
          ) : null}
        </div>

        <Reveal className="relative" delay={0.1}>
          <div
            className={cn(
              "absolute inset-0 rounded-[36px] bg-gradient-to-br opacity-70 blur-2xl",
              theme.border,
            )}
          />
          <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4 shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0c111d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
              <div className="relative aspect-[4/4.4]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-semibold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs leading-6 text-white/52">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
