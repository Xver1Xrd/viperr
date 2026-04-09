"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Headphones, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/GlowButton";

type HeaderProps = {
  navigation: NavItem[];
};

export function Header({ navigation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);

    return () => window.removeEventListener("hashchange", closeMenu);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "border-white/12 bg-black/55 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
            : "border-white/8 bg-black/28 backdrop-blur-xl",
        )}
      >
        <Link
          href="#hero"
          className="flex min-w-0 items-center gap-3 text-white transition-opacity duration-300 hover:opacity-80"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-[0.72rem] font-semibold uppercase tracking-[0.3em]">
            V
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base uppercase tracking-[0.24em]">
              VIPERR
            </span>
            <span className="block truncate text-[0.66rem] uppercase tracking-[0.28em] text-white/50">
              Kai Angel x 9mice
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.24em] text-white/62 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GlowButton href="#tracks" size="sm" icon={Headphones}>
            Listen mode
          </GlowButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white transition-colors duration-300 hover:bg-white/[0.12] lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-black/70 p-4 backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.22em] text-white/78 transition-colors duration-300 hover:border-white/12 hover:bg-white/[0.08] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4">
              <GlowButton
                href="#tracks"
                className="w-full justify-center"
                icon={Headphones}
              >
                Open player
              </GlowButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
