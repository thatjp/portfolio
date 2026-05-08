import { ExperienceList } from "@/components/ExperienceList";
import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "@/components/ui/tabs/Tabs";
import { InterestChips } from "@/components/InterestChips";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import { TaglineReveal } from "@/components/TaglineReveal";
import {
  aboutParagraphs,
  freelanceExperience,
  interests,
  professionalExperience,
  projects,
  siteMeta,
} from "@/lib/portfolio";

export default function Home() {
  return (
    <div
      id="top"
      className="flex min-h-full flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100"
    >
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-16 sm:mb-20">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {siteMeta.role}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {siteMeta.name}
          </h1>
          <TaglineReveal
            text={siteMeta.tagline}
            className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Get in touch
            </a>
          </div>
        </div>

        <Section id="about" title="About">
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
            {aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Tabs defaultValue="professional">
            <TabList aria-label="Experience type">
              <Tab value="professional">Professional roles</Tab>
              <Tab value="freelance">Freelance</Tab>
            </TabList>
            <TabPanel value="professional">
              <ExperienceList
                items={professionalExperience}
                itemIdPrefix="professional"
              />
            </TabPanel>
            <TabPanel value="freelance">
              <ExperienceList
                items={freelanceExperience}
                itemIdPrefix="freelance"
              />
            </TabPanel>
          </Tabs>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="interests" title="Interests">
          <InterestChips items={interests} />
        </Section>

        <footer
          id="contact"
          className="scroll-mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800"
        >
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Contact
          </h2>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            Open to interesting roles and collaborations. Reach out via email
            or LinkedIn.
          </p>
          <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
            {siteMeta.social.email ? (
              <li>
                <a
                  href={siteMeta.social.email}
                  className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
                >
                  Email
                </a>
              </li>
            ) : null}
            {siteMeta.social.linkedin ? (
              <li>
                <a
                  href={siteMeta.social.linkedin}
                  className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
            {siteMeta.social.github ? (
              <li>
                <a
                  href={siteMeta.social.github}
                  className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            ) : null}
            {siteMeta.social.resume ? (
              <li>
                <a
                  href={siteMeta.social.resume}
                  className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Résumé
                </a>
              </li>
            ) : null}
          </ul>
          <p className="mt-12 text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} {siteMeta.name}
          </p>
        </footer>
      </main>
    </div>
  );
}
