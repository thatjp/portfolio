import { SectionHeading } from "@/components/SectionHeading";
import type { SocialLinks } from "@/lib/portfolio";

type ContactFooterProps = {
  name: string;
  social: SocialLinks;
};

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  muted?: boolean;
};

function getSocialLinks(social: SocialLinks): SocialLink[] {
  const links: SocialLink[] = [];

  if (social.email) {
    links.push({ label: "Email", href: social.email });
  }
  if (social.linkedin) {
    links.push({ label: "LinkedIn", href: social.linkedin, external: true });
  }
  if (social.github) {
    links.push({ label: "GitHub", href: social.github, external: true });
  }
  if (social.resume) {
    links.push({
      label: "Resume",
      href: social.resume,
      external: true,
      muted: true,
    });
  }

  return links;
}

export function ContactFooter({ name, social }: ContactFooterProps) {
  const links = getSocialLinks(social);

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-zinc-200 py-14 dark:border-zinc-800"
      aria-labelledby="contact-heading"
    >
      <SectionHeading id="contact-heading" title="Contact" />
      <p className="mb-6 text-zinc-700 dark:text-zinc-300">
        I&apos;m open to connecting and collaborating! Reach out via email:{" "}
        jpharris.development@gmail.com or{" "}
        {social.linkedin ? (
          <a
            href={social.linkedin}
            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        ) : (
          "LinkedIn"
        )}
        .
      </p>
      <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={
                link.muted
                  ? "text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
                  : "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
              }
              rel={link.external ? "noopener noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-xs text-zinc-500 dark:text-zinc-500">
        {`© ${new Date().getFullYear()} ${name}`}
      </p>
    </footer>
  );
}
