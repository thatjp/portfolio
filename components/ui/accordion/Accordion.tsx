"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type AccordionCtx = {
  register: (id: string, close: () => void) => void;
  unregister: (id: string) => void;
  opened: (id: string) => void;
};

const AccordionContext = createContext<AccordionCtx | null>(null);

type AccordionProps = {
  children: ReactNode;
  /** When true, opening an item closes any other open item. */
  single?: boolean;
  className?: string;
};

export function Accordion({
  children,
  single = false,
  className = "",
}: AccordionProps) {
  const mapRef = useRef(new Map<string, () => void>());

  const register = useCallback((id: string, close: () => void) => {
    mapRef.current.set(id, close);
  }, []);

  const unregister = useCallback((id: string) => {
    mapRef.current.delete(id);
  }, []);

  const opened = useCallback(
    (id: string) => {
      if (!single) return;
      for (const [other, close] of mapRef.current) {
        if (other !== id) close();
      }
    },
    [single],
  );

  const value: AccordionCtx = { register, unregister, opened };

  return (
    <AccordionContext.Provider value={value}>
      <div
        className={`divide-y divide-zinc-200 dark:divide-zinc-800 ${className}`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  itemId: string;
  trigger: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function AccordionItem({
  itemId,
  trigger,
  children,
  defaultOpen = false,
  className = "",
  style,
}: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  const uid = useId();
  const panelId = `${itemId}-${uid}-panel`;
  const buttonId = `${itemId}-${uid}-trigger`;
  const [open, setOpen] = useState(defaultOpen);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!ctx) return;
    ctx.register(itemId, close);
    return () => ctx.unregister(itemId);
  }, [ctx, itemId, close]);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next && ctx) ctx.opened(itemId);
      return next;
    });
  };

  return (
    <div className={`py-4 first:pt-0 ${className}`.trim()} style={style}>
      <h3 className="text-base font-normal leading-snug">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
          className="flex w-full items-start justify-between gap-3 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-zinc-500"
        >
          <span className="min-w-0 flex-1">{trigger}</span>
          <span
            className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center text-zinc-400 transition-transform duration-200 motion-reduce:transition-none dark:text-zinc-500 ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
              aria-hidden
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        {open ? <div className="pt-3 pb-1">{children}</div> : null}
      </div>
    </div>
  );
}
