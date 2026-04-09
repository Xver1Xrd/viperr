import { cn } from "@/lib/utils";

type GradientOrbProps = {
  className?: string;
  from: string;
  to: string;
};

export function GradientOrb({ className, from, to }: GradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute rounded-full blur-3xl", className)}
      style={{
        background: `radial-gradient(circle, ${from} 0%, ${to} 72%)`,
      }}
    />
  );
}
