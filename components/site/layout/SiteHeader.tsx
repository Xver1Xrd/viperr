"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { PageContainer } from "./PageContainer";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(4,6,13,0.72)] backdrop-blur-2xl">
      <PageContainer className="flex h-18 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-sm font-semibold tracking-[0.3em] text-white shadow-[0_14px_40px_rgba(0,0,0,0.32)] transition-transform duration-300 group-hover:-translate-y-0.5">
            V
          </span>
          <div className="space-y-0.5">
            <div className="font-display text-sm uppercase tracking-[0.28em] text-white">
              VIPERR
            </div>
            <div className="text-xs text-white/58">
              Kai Angel + 9mice archive
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-white/68 transition-all duration-300 hover:bg-white/8 hover:text-white",
                  active && "bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </PageContainer>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-[rgba(5,7,14,0.96)] lg:hidden"
          >
            <PageContainer className="flex flex-col gap-2 py-4">
              {mainNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl border border-transparent px-4 py-3 text-base text-white/72 transition-all duration-300 hover:border-white/12 hover:bg-white/6 hover:text-white",
                      active && "border-white/12 bg-white/8 text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </PageContainer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
