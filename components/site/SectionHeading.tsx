import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/44">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-white/66 sm:text-lg">{description}</p>
    </div>
  );
}
