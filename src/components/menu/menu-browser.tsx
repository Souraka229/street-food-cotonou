"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, MENU, type MenuCategory } from "@/lib/menu-data";
import { MenuCard } from "@/components/menu/menu-card";
import { cn } from "@/lib/utils";

type Filter = "TOUT" | MenuCategory;

const FILTERS: Filter[] = ["TOUT", ...CATEGORIES];

export function MenuBrowser() {
  const [active, setActive] = useState<Filter>("TOUT");

  const items = useMemo(
    () => (active === "TOUT" ? MENU : MENU.filter((i) => i.category === active)),
    [active],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "border-2 border-street-black px-4 py-2 text-sm font-black uppercase tracking-wide transition",
              active === filter
                ? "bg-street-black text-street-white"
                : "bg-transparent text-street-black hover:bg-street-black/10 dark:text-street-white dark:hover:bg-street-white/10",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
