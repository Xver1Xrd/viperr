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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(8,7,7,0.86)] backdrop-blur-xl">
      <PageContainer className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#ff5a36]/40 bg-[#140d0c] font-display text-base uppercase tracking-[0.18em] text-[#ffd3b3] shadow-[0_18px_36px_rgba(0,0,0,0.34)] transition-transform duration-300 group-hover:-translate-y-0.5">
            V/2
          </span>
          <div className="space-y-0.5">
            <div className="font-display text-lg uppercase tracking-[0.18em] text-white">
              VIPERR
            </div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#ff9b73]">
              Underground club archive
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
                  active ? "club-chip-active" : "club-chip",
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
          className="club-icon-button lg:hidden"
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
            className="border-t border-white/8 bg-[rgba(8,7,7,0.98)] lg:hidden"
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
                      "rounded-[16px] border px-4 py-3 text-base font-medium uppercase tracking-[0.12em] transition-all duration-300",
                      active
                        ? "border-[#ff5a36]/40 bg-[#171111] text-[#ffe3cf]"
                        : "border-transparent bg-transparent text-white/72 hover:border-white/10 hover:bg-[#131010] hover:text-white",
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
