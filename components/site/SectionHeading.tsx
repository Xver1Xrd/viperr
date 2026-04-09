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
    <div className={cn("max-w-4xl space-y-5", className)}>
      {eyebrow ? (
        <div className="club-tag">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="club-title font-display text-4xl leading-[0.92] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-3xl text-base leading-8 text-white/68 sm:text-lg">{description}</p>
    </div>
  );
}
