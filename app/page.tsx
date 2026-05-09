import { ContactFooter } from "@/components/ContactFooter";
import { ExperienceList } from "@/components/ExperienceList";
import { HomeHero } from "@/components/Hero";
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
        <HomeHero
          role={siteMeta.role}
          name={siteMeta.name}
          tagline={siteMeta.tagline}
        />

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

        <ContactFooter name={siteMeta.name} social={siteMeta.social} />
      </main>
    </div>
  );
}
