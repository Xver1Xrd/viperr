import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GlowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  icon?: LucideIcon;
};

export function GlowButton({
  children,
  className,
  href,
  icon: Icon = ArrowUpRight,
  variant = "primary",
  size = "md",
  ...props
}: GlowButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : props.target}
      rel={isExternal ? "noreferrer" : props.rel}
      className={cn(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-full border font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        size === "md" ? "px-6 py-3.5 text-[0.72rem]" : "px-5 py-3 text-[0.66rem]",
        variant === "primary"
          ? "border-white/14 bg-white/[0.07] shadow-[0_0_40px_rgba(114,168,255,0.18)]"
          : "border-white/10 bg-white/[0.03]",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(142,123,255,0.32),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))]" />
      <span className="absolute inset-px rounded-full bg-[linear-gradient(120deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
      <span className="relative z-10">{children}</span>
      <Icon className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
}
