"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CvButton() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <a href="/BEYZA_ARSLAN_CV.pdf" target="_blank" rel="noopener noreferrer">
      <ShimmerButton
        className="mt-6 text-black dark:text-white"
        background={
          !mounted || resolvedTheme === "dark"
            ? "rgba(20,20,30,1)"
            : "rgba(240,240,240,1)"
        }
        shimmerColor={
          !mounted || resolvedTheme === "dark" ? "#4ade80" : "#16a34a"
        }
      >
        {"👉🏼 CV'mi Görüntüle"}
      </ShimmerButton>
    </a>
  );
}
