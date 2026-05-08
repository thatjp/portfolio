import type { ReactNode } from "react";
import { Pill, type PillVariant } from "@/components/Pill";

type PillListProps = {
  /** Renders one pill per string (mutually exclusive with children). */
  items?: readonly string[];
  variant?: PillVariant;
  /** Tinted, rotating colors per pill. Set false for neutral zinc styling. */
  palette?: boolean;
  className?: string;
  "aria-label"?: string;
  children?: ReactNode;
};

export function PillList({
  items,
  variant = "default",
  palette = true,
  className = "",
  "aria-label": ariaLabel,
  children,
}: PillListProps) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {items
        ? items.map((item, index) => (
            <li key={item}>
              <Pill
                variant={variant}
                palette={palette}
                paletteIndex={index}
              >
                {item}
              </Pill>
            </li>
          ))
        : children}
    </ul>
  );
}
