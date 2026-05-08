import type { ReactNode } from "react";

export type PillVariant = "default" | "tech";

const plainDefault =
  "rounded-full border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300";

const plainTech =
  "rounded-md bg-white font-mono text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:ring-zinc-700";

/** Rotating accents so neighboring pills read as distinct. */
const paletteDefault = [
  "rounded-full border border-sky-200/90 bg-sky-50 text-sky-950 dark:border-sky-800/80 dark:bg-sky-950/45 dark:text-sky-100",
  "rounded-full border border-violet-200/90 bg-violet-50 text-violet-950 dark:border-violet-800/80 dark:bg-violet-950/45 dark:text-violet-100",
  "rounded-full border border-amber-200/90 bg-amber-50 text-amber-950 dark:border-amber-800/80 dark:bg-amber-950/45 dark:text-amber-100",
  "rounded-full border border-emerald-200/90 bg-emerald-50 text-emerald-950 dark:border-emerald-800/80 dark:bg-emerald-950/45 dark:text-emerald-100",
  "rounded-full border border-rose-200/90 bg-rose-50 text-rose-950 dark:border-rose-800/80 dark:bg-rose-950/45 dark:text-rose-100",
  "rounded-full border border-orange-200/90 bg-orange-50 text-orange-950 dark:border-orange-800/80 dark:bg-orange-950/45 dark:text-orange-100",
] as const;

const paletteTech = [
  "rounded-md font-mono text-sky-950 ring-1 ring-sky-300/70 bg-sky-50 dark:text-sky-100 dark:ring-sky-700/80 dark:bg-sky-950/50",
  "rounded-md font-mono text-violet-950 ring-1 ring-violet-300/70 bg-violet-50 dark:text-violet-100 dark:ring-violet-700/80 dark:bg-violet-950/50",
  "rounded-md font-mono text-amber-950 ring-1 ring-amber-300/70 bg-amber-50 dark:text-amber-100 dark:ring-amber-700/80 dark:bg-amber-950/50",
  "rounded-md font-mono text-emerald-950 ring-1 ring-emerald-300/70 bg-emerald-50 dark:text-emerald-100 dark:ring-emerald-700/80 dark:bg-emerald-950/50",
  "rounded-md font-mono text-rose-950 ring-1 ring-rose-300/70 bg-rose-50 dark:text-rose-100 dark:ring-rose-700/80 dark:bg-rose-950/50",
  "rounded-md font-mono text-orange-950 ring-1 ring-orange-300/70 bg-orange-50 dark:text-orange-100 dark:ring-orange-700/80 dark:bg-orange-950/50",
] as const;

const sizeDefault = "px-3 py-1 text-sm";
const sizeTech = "px-2 py-0.5 text-xs";

type PillProps = {
  children: ReactNode;
  variant?: PillVariant;
  /** When true, cycles tinted backgrounds by `paletteIndex`. */
  palette?: boolean;
  /** Index into the palette (defaults to 0). */
  paletteIndex?: number;
  className?: string;
};

export function Pill({
  children,
  variant = "default",
  palette = false,
  paletteIndex = 0,
  className = "",
}: PillProps) {
  const isTech = variant === "tech";
  const palettes = isTech ? paletteTech : paletteDefault;
  const idx = ((paletteIndex % palettes.length) + palettes.length) % palettes.length;
  const colorBlock = palette ? palettes[idx] : isTech ? plainTech : plainDefault;
  const size = isTech ? sizeTech : sizeDefault;

  return (
    <span
      className={`inline-flex max-w-full items-center ${colorBlock} ${size} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
