import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  headingClassName?: string;
  contentClassName?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  headingClassName,
  contentClassName,
  align = "left",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 py-20 sm:py-28 lg:py-32", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" ? "mx-auto text-center" : "",
            headingClassName,
          )}
        >
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.94] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-white/66 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
