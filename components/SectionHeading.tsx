type SectionHeadingProps = {
  id?: string;
  title: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`mb-6 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ${className}`}
    >
      {title}
    </h2>
  );
}
