import { PillList } from "@/components/PillList";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion/Accordion";
import {
  EXPERIENCE_ANIM,
  type ExperienceListPhase,
} from "@/lib/experience-animation";
import type { ExperienceItem } from "@/lib/portfolio";

type ExperienceListProps = {
  items: ExperienceItem[];
  /** Keeps accordion button ids unique when multiple lists exist (e.g. tabs). */
  itemIdPrefix?: string;
  /** When controlled by animated tabs, drives list enter/exit keyframes. */
  listPhase?: ExperienceListPhase;
};

const companyNameClass =
  "text-lg font-medium text-zinc-900 dark:text-zinc-100";

const companyLinkClass = `${companyNameClass} inline-block w-fit max-w-full self-start text-left underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:decoration-zinc-600 dark:hover:decoration-zinc-400 dark:focus-visible:outline-zinc-500`;

export function ExperienceList({
  items,
  itemIdPrefix = "exp",
  listPhase = "idle",
}: ExperienceListProps) {
  const accordionClass =
    listPhase === "exiting"
      ? "experience-accordion--exiting"
      : listPhase === "entering"
        ? "experience-accordion--entering"
        : "";

  return (
    <Accordion className={accordionClass}>
      {items.map((job, index) => {
        const staggerDelayMs =
          listPhase === "exiting"
            ? (items.length - 1 - index) * EXPERIENCE_ANIM.exitStaggerMs
            : listPhase === "entering"
              ? index * EXPERIENCE_ANIM.enterStaggerMs
              : undefined;

        return (
          <AccordionItem
            key={`${job.role}-${job.period}`}
            itemId={`${itemIdPrefix}-${index}`}
            className="experience-accordion-item"
            style={
              staggerDelayMs != null
                ? { animationDelay: `${staggerDelayMs}ms` }
                : undefined
            }
            trigger={
              <span className="flex w-full min-w-0 flex-col gap-0.5">
                {job.company ? (
                  job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      className={companyLinkClass}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className={companyNameClass}>{job.company}</span>
                  )
                ) : (
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </span>
                )}
                {job.company ? (
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {job.role}
                  </span>
                ) : null}
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {job.period}
                </span>
              </span>
            }
          >
            {job.tags && job.tags.length > 0 ? (
              <PillList
                className="mt-1"
                items={job.tags}
                aria-label={`Tags for ${job.role}`}
              />
            ) : null}
            {job.summary ? (
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                {job.summary}
              </p>
            ) : null}
            {job.highlights && job.highlights.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
