import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";

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
      className={`scroll-mt-20 border-t border-zinc-200 py-14 first-of-type:border-t-0 first-of-type:pt-0 dark:border-zinc-800 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <SectionHeading id={id ? `${id}-heading` : undefined} title={title} />
      {children}
    </section>
  );
}
