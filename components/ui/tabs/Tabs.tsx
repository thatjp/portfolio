"use client";

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from "react";

type TabsContextValue = {
  value: string;
  setValue: (v: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(component: string): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error(`${component} must be used within <Tabs>`);
  return ctx;
}

export function Tabs({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  const baseId = useId();
  const memo = useMemo(
    () => ({ value, setValue, baseId }),
    [value, baseId],
  );
  return (
    <TabsContext.Provider value={memo}>{children}</TabsContext.Provider>
  );
}

export function TabList({
  children,
  "aria-label": ariaLabel,
  className = "",
}: {
  children: ReactNode;
  "aria-label": string;
  className?: string;
}) {
  const { value, setValue, baseId } = useTabsContext("TabList");
  const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<{
    value: string;
  }>[];
  const values = tabs.map((c) => c.props.value);

  const focusTab = useCallback(
    (index: number) => {
      const v = values[index];
      if (v == null) return;
      setValue(v);
      requestAnimationFrame(() => {
        document.getElementById(`${baseId}-tab-${v}`)?.focus();
      });
    },
    [values, setValue, baseId],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = values.indexOf(value);
    if (i < 0) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab((i + 1) % values.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab((i - 1 + values.length) % values.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(values.length - 1);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={`flex gap-1 border-b border-zinc-200 dark:border-zinc-800 ${className}`}
    >
      {tabs.map((tab) => cloneElement(tab, { key: tab.props.value }))}
    </div>
  );
}

export function Tab({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value: selected, setValue, baseId } = useTabsContext("Tab");
  const isSelected = value === selected;
  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={isSelected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => setValue(value)}
      className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
        isSelected
          ? "border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
          : "border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabPanel({
  value,
  children,
  className = "",
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const { value: selected, baseId } = useTabsContext("TabPanel");
  const isSelected = value === selected;
  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      hidden={!isSelected}
      className={isSelected ? `pt-6 ${className}` : className}
    >
      {isSelected ? children : null}
    </div>
  );
}
