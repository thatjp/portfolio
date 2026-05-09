import { TaglineReveal } from "@/components/TaglineReveal";

type HomeHeroProps = {
  role: string;
  name: string;
  tagline: string;
};

const ctaClasses = {
  primary:
    "inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
  secondary:
    "inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900",
} as const;

export function HomeHero({ role, name, tagline }: HomeHeroProps) {
  return (
    <div className="mb-16 sm:mb-20">
      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {role}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {name}
      </h1>
      <TaglineReveal
        text={tagline}
        className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className={ctaClasses.primary}>
          View projects
        </a>
        <a href="#contact" className={ctaClasses.secondary}>
          Get in touch
        </a>
      </div>
    </div>
  );
}
