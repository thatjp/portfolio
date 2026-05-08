"use client";

import { useEffect, useState } from "react";

type TaglineRevealProps = {
  text: string;
  className?: string;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

function nextCharDelay(text: string, index: number): number {
  const ch = text[index];
  if (!ch) return 0;
  if (ch === " ") return 36 + Math.random() * 28;
  if (".,".includes(ch)) return 95 + Math.random() * 65;
  return 16 + Math.random() * 26;
}

export function TaglineReveal({ text, className = "" }: TaglineRevealProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(text.length);
      return;
    }
    setVisible(0);
  }, [reducedMotion, text]);

  useEffect(() => {
    if (reducedMotion || visible >= text.length) return;
    const ms = nextCharDelay(text, visible);
    const id = window.setTimeout(() => setVisible((v) => v + 1), ms);
    return () => clearTimeout(id);
  }, [reducedMotion, text, visible]);

  if (reducedMotion) {
    return <p className={className}>{text}</p>;
  }

  const shown = text.slice(0, visible);

  return (
    <p className={className}>
      <span className="sr-only">{text}</span>
      <span className="grid [grid-template-areas:'stack']">
        <span className="invisible [grid-area:stack] select-none" aria-hidden="true">
          {text}
        </span>
        <span className="[grid-area:stack]" aria-hidden="true">
          {Array.from(shown).map((char, i) => (
            <span
              key={i}
              className="inline-block animate-[tagline-flicker_0.22s_ease-out_forwards]"
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
        </span>
      </span>
    </p>
  );
}
