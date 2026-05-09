/** Timing for Experience tab / list transitions (keep in sync with `app/globals.css`). */
export const EXPERIENCE_ANIM = {
  tabSlideMs: 400,
  enterItemDurationMs: 480,
  enterStaggerMs: 80,
  /** Mirrors enter; exit stagger runs bottom → top (reverse order). */
  exitItemDurationMs: 480,
  exitStaggerMs: 80,
} as const;

export type ExperienceListPhase = "idle" | "exiting" | "entering";

export function experienceExitTotalMs(itemCount: number): number {
  if (itemCount <= 0) return 0;
  return (
    EXPERIENCE_ANIM.exitItemDurationMs +
    (itemCount - 1) * EXPERIENCE_ANIM.exitStaggerMs
  );
}

export function experienceEnterTotalMs(itemCount: number): number {
  if (itemCount <= 0) return 0;
  return (
    EXPERIENCE_ANIM.enterItemDurationMs +
    (itemCount - 1) * EXPERIENCE_ANIM.enterStaggerMs
  );
}
