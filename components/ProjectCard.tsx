import { PillList } from "@/components/PillList";
import type { ProjectItem } from "@/lib/portfolio";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-950/40">
      <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
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
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.href ? (
          <a
            href={project.href}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            Live site
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
