import { PillList } from "@/components/PillList";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion/Accordion";
import type { ExperienceItem } from "@/lib/portfolio";

type ExperienceListProps = {
  items: ExperienceItem[];
  /** Keeps accordion button ids unique when multiple lists exist (e.g. tabs). */
  itemIdPrefix?: string;
};

export function ExperienceList({
  items,
  itemIdPrefix = "exp",
}: ExperienceListProps) {
  return (
    <Accordion>
      {items.map((job, index) => (
        <AccordionItem
          key={`${job.role}-${job.period}`}
          itemId={`${itemIdPrefix}-${index}`}
          trigger={
            <span className="flex w-full min-w-0 flex-col gap-1">
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {job.role}
                </span>
                {job.company ? (
                  job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      className="shrink-0 text-left text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-400 dark:focus-visible:outline-zinc-500"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="shrink-0 text-left text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {job.company}
                    </span>
                  )
                ) : (
                  <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-500">
                    {job.period}
                  </span>
                )}
              </span>
              {job.company ? (
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {job.period}
                </span>
              ) : null}
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
      ))}
    </Accordion>
  );
}
