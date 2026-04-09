import type { Variants } from "framer-motion";

export const viewportSettings = {
  once: true,
  amount: 0.2,
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = (distance = 40): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const softScaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
