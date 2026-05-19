import { PillList } from "@/components/PillList";
import type { ProjectItem } from "@/lib/portfolio";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardHref = project.href ?? project.repo;
  const showRepoLink = Boolean(project.href && project.repo);

  return (
    <article className="group relative flex flex-col rounded-lg border border-zinc-200 bg-zinc-50/50 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-zinc-700">
      {cardHref ? (
        <a
          href={cardHref}
          className="absolute inset-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-zinc-500"
          rel="noopener noreferrer"
          target="_blank"
          aria-label={
            project.href
              ? `Visit ${project.title}`
              : `View source for ${project.title}`
          }
        >
          <span className="sr-only">
            {project.href ? "Visit site" : "View source"}
          </span>
        </a>
      ) : null}
      <div className="relative flex flex-1 flex-col p-5 pointer-events-none">
        <h3 className="font-medium text-zinc-900 group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>
        <PillList
          className="mt-3"
          items={project.tech}
          variant="tech"
          aria-label={`Technologies for ${project.title}`}
        />
        {showRepoLink ? (
          <div className="pointer-events-auto relative z-10 mt-4">
            <a
              href={project.repo}
              className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
