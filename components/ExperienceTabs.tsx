"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { ExperienceList } from "@/components/ExperienceList";
import {
  EXPERIENCE_ANIM,
  experienceEnterTotalMs,
  experienceExitTotalMs,
} from "@/lib/experience-animation";
import type { ExperienceItem } from "@/lib/portfolio";

type TabKey = "professional" | "freelance";

type Phase = "idle" | "exiting" | "entering";

type ExperienceTabsProps = {
  professional: ExperienceItem[];
  freelance: ExperienceItem[];
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function itemsForTab(
  tab: TabKey,
  professional: ExperienceItem[],
  freelance: ExperienceItem[],
): ExperienceItem[] {
  return tab === "professional" ? professional : freelance;
}

export function ExperienceTabs({
  professional,
  freelance,
}: ExperienceTabsProps) {
  const reducedMotion = usePrefersReducedMotion();
  const baseId = useId().replace(/:/g, "");

  const [phase, setPhase] = useState<Phase>("idle");
  /** Tab whose list is mounted (unchanged until exit finishes). */
  const [displayTab, setDisplayTab] = useState<TabKey>("professional");
  const [activeTab, setActiveTab] = useState<TabKey>("professional");

  const tabListRef = useRef<HTMLDivElement>(null);
  const proRef = useRef<HTMLButtonElement>(null);
  const freeRef = useRef<HTMLButtonElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const updateIndicator = useCallback(() => {
    const listEl = tabListRef.current;
    const btn =
      activeTab === "professional" ? proRef.current : freeRef.current;
    if (!listEl || !btn) return;
    const lr = listEl.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setIndicator({
      left: br.left - lr.left + listEl.scrollLeft,
      width: br.width,
    });
  }, [activeTab]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, phase, displayTab]);

  useEffect(() => {
    const listEl = tabListRef.current;
    if (!listEl) return;
    const ro = new ResizeObserver(() => updateIndicator());
    ro.observe(listEl);
    window.addEventListener("resize", updateIndicator);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  const selectTab = useCallback(
    (next: TabKey) => {
      if (reducedMotion) {
        clearTimers();
        setDisplayTab(next);
        setActiveTab(next);
        setPhase("idle");
        return;
      }
      if (phase !== "idle" || next === displayTab) return;

      clearTimers();
      setPhase("exiting");

      const exitingCount = itemsForTab(
        displayTab,
        professional,
        freelance,
      ).length;
      const exitMs = experienceExitTotalMs(exitingCount);

      schedule(() => {
        setDisplayTab(next);
        setActiveTab(next);
        setPhase("entering");
        const enteringCount = itemsForTab(next, professional, freelance).length;
        const enterMs = experienceEnterTotalMs(enteringCount);
        schedule(() => {
          setPhase("idle");
        }, enterMs);
      }, exitMs);
    },
    [
      clearTimers,
      displayTab,
      freelance,
      phase,
      professional,
      reducedMotion,
      schedule,
    ],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const order: TabKey[] = ["professional", "freelance"];
    const i = order.indexOf(activeTab);
    if (i < 0) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = order[(i + 1) % order.length];
      if (phase === "idle") selectTab(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = order[(i - 1 + order.length) % order.length];
      if (phase === "idle") selectTab(next);
    } else if (e.key === "Home") {
      e.preventDefault();
      if (phase === "idle") selectTab("professional");
    } else if (e.key === "End") {
      e.preventDefault();
      if (phase === "idle") selectTab("freelance");
    }
  };

  const listPhase =
    phase === "exiting"
      ? "exiting"
      : phase === "entering"
        ? "entering"
        : "idle";

  const items = itemsForTab(displayTab, professional, freelance);

  const tabButtonClass = (tab: TabKey) =>
    `-mb-px border-b-2 border-transparent py-2 pr-6 pl-0 text-left text-sm font-medium transition-colors last:pr-0 ${
      activeTab === tab
        ? "text-zinc-900 dark:text-zinc-100"
        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
    }`;

  return (
    <>
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Experience type"
        aria-busy={!reducedMotion && phase !== "idle"}
        onKeyDown={onKeyDown}
        className="relative flex justify-start gap-0 border-b border-zinc-200 dark:border-zinc-800"
      >
        <button
          ref={proRef}
          type="button"
          role="tab"
          id={`${baseId}-tab-professional`}
          aria-selected={activeTab === "professional"}
          aria-controls={`${baseId}-panel`}
          tabIndex={activeTab === "professional" ? 0 : -1}
          className={tabButtonClass("professional")}
          onClick={() => selectTab("professional")}
        >
          Professional roles
        </button>
        <button
          ref={freeRef}
          type="button"
          role="tab"
          id={`${baseId}-tab-freelance`}
          aria-selected={activeTab === "freelance"}
          aria-controls={`${baseId}-panel`}
          tabIndex={activeTab === "freelance" ? 0 : -1}
          className={tabButtonClass("freelance")}
          onClick={() => selectTab("freelance")}
        >
          Contract Roles
        </button>
        <span
          aria-hidden
          className="experience-tab-indicator pointer-events-none absolute bottom-0 z-20 h-[3px] rounded-full bg-zinc-900 transition-[left,width] ease-out dark:bg-zinc-100"
          style={{
            left: indicator.left,
            width: indicator.width,
            transitionDuration: reducedMotion
              ? "0ms"
              : `${EXPERIENCE_ANIM.tabSlideMs}ms`,
          }}
        />
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${activeTab}`}
        className="pt-6"
      >
        <ExperienceList
          items={items}
          itemIdPrefix={displayTab}
          listPhase={listPhase}
        />
      </div>
    </>
  );
}
