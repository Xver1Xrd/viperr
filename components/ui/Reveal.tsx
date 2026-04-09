"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/lib/animations";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 36,
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      variants={fadeInUp(distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportSettings, once }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
