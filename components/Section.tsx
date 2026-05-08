import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-zinc-200 pt-12 first-of-type:border-t-0 first-of-type:pt-0 dark:border-zinc-800 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <h2
        id={id ? `${id}-heading` : undefined}
        className="mb-6 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
