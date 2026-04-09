"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  items: string[];
  className?: string;
  duration?: number;
};

export function MarqueeBand({
  items,
  className,
  duration = 22,
}: MarqueeBandProps) {
  const repeated = [...items, ...items];

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex min-w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2 text-[0.72rem] uppercase tracking-[0.3em] text-white/62"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
