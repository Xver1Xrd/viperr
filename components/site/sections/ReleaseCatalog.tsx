"use client";

import { useState } from "react";
import type { ReleaseItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ReleaseCard } from "@/components/site/cards/ReleaseCard";

type ReleaseCatalogProps = {
  releases: ReleaseItem[];
};

const filters = [
  { key: "all", label: "Все" },
  { key: "duo", label: "Совместные" },
  { key: "kai-angel", label: "Kai Angel" },
  { key: "9mice", label: "9mice" },
] as const;

export function ReleaseCatalog({ releases }: ReleaseCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["key"]>("all");

  const visibleReleases = releases.filter((release) => {
    if (activeFilter === "all") {
      return true;
    }

    return release.artistKeys.includes(activeFilter);
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={cn(
              activeFilter === filter.key ? "club-chip-active" : "club-chip",
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleReleases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}
