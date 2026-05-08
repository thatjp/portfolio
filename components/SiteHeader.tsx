import { navItems, siteMeta } from "@/lib/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8">
        <a
          href="#top"
          className="shrink-0 font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          {siteMeta.name}
        </a>
        <nav aria-label="Primary" className="min-w-0 sm:shrink-0">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-600 sm:justify-end dark:text-zinc-400">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
