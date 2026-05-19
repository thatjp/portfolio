export type SocialLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
  resume?: string;
};

export type ExperienceItem = {
  company?: string;
  companyUrl?: string;
  role: string;
  period: string;
  summary?: string;
  highlights?: string[];
  tags?: string[];
  freelance?: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export const siteMeta = {
  name: "JP Harris",
  role: "Web developer",
  tagline: "I build fast, accessible interfaces and reliable web apps.",
  description:
    "Portfolio of Jordan Park — web developer focused on modern front ends, solid UX, and maintainable code.",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/jp-harris",
    email: "mailto:hello@example.com",
    resume: "/JP_Harris_Resume_2025.pdf",
  } satisfies SocialLinks,
};

// export const aboutParagraphs: string[] = [
//   "I turn tangled requirements into interfaces people actually enjoy using."
// ];

export const experience: ExperienceItem[] = [
  {
    company: "Waters Corporation",
    companyUrl: "https://www.waters.com",
    role: "Lead Frontend Web Developer",
    period: "July 2025 – Dec 2025",
    highlights: [
      "Designed and built a React.js and Typescript frontend for an AI powered chat tool which fields the questions of the 350,000 monthly Waters.com users.",
      "Lead a talented cross departmental team of 5 while maintaining strong communication with other teams in the engineering department resulting in the smooth and timely delivery of milestones.",
      "Designed and built Java Springboot based applications for directing complex API calls and aggregating data between the Water's Adobe AEM system and the AI Tools I integrated.",
    ],
  },
  {
    company: "American Express",
    companyUrl: "https://www.americanexpress.com",
    role: "Frontend Web Developer",
    period: "Sep 2024 – May 2025",
    highlights: [
      "Built React.js components for American Express dashboards seen by 15M+ users daily.",
      "Maintained 100% code coverage using Jest and TDD practices.",
      "Collaborated with 75+ engineers and cross-functional departments to meet release deadlines and mission critical objectives.",
      "Reviewed pull-requests in Github and worked with my team to create any necessary documentation needed.",
    ],
  },
  {
    company: "Ruckus Marketing",
    companyUrl: "https://weareruckus.com",
    role: "Lead Fullstack Developer & Director of Technology",
    period: "Dec 2019 – Oct 2022 · New York, NY",
    highlights: [
      "Delivered 30+ projects using React.js, Typescript, Next.js, Node.js, Python, Django Rest Framework, AWS, Wordpress and Shopify during my time as Director of Technology.",
      "Grew the Ruckus' fullstack development team from 1 to 7 during my time as Lead Fullstack Developer before being promoted to run the 25 person technology department.",
      "Trained the existing team of Wordpress developers on React.js and typescript to ensure talent coverage on our existing projects and expand our opportunities for clients interested in “headless” web projects such as in gatsby.js.",
      "Developed internal CRM and productivity tools with React, Node.js, Python and bash to increase cross departmental transparency and internal productivity.",
      "Directed our 3 development teams of 4 - 6 and a design team of 3 to create a scalable React Typescript UI component library that allowed us to cut project spin-up time by +2 weeks.",
    ],
  },
  {
    company: "Dauntless",
    companyUrl: "https://www.dauntless.digital",
    role: "Frontend React Developer",
    period: "Jan 2019 – Oct 2019 · New York, NY",
    highlights: [
      "Created UI components using React.js, Redux, SCSS, and a custom Google Maps API.",
      "Built React.js modules and UI within Adobe Experience Manager for a client who's 4 million users would use my applications daily. Developed Java and Springboot backend applications used as middleware for geolocation services and data aggregation.",
      "Worked alongside a multinational team of 40 in remote settings to deliver time sensitive projects.",
    ],
  },
  {
    company: "goldi",
    role: "Frontend React Developer",
    period: "Jan 2018 – Oct 2018 · New York, NY",
    highlights: [
      "Designed, developed and delivered the first WebRTC based video recorder which was the cornerstone of goldi's market fit.",
      "Used Jest and Enzyme to support TDD and ensure component stability.",
    ],
  },
  {
    freelance: true,
    company: "Vermont Mutual",
    companyUrl: "https://www.vermontmutual.com/",
    role: "React Developer",
    period: "2026",
    summary:
      "Built React.js components and UI that addressed business requirements and updated Vermont Mutual’s internal frontend tools.",
  },
  {
    freelance: true,
    company: "Duet",
    companyUrl: "https://joinduet.com/",
    role: "Fullstack Developer Python and React",
    period: "2024 – 2025",
    summary:
      "Built a  Python and Django backend that communicated with Google Cloud Platform for Duet. I also built Next.js, Typescript components. Worked closely with Duet’s data team to ensure data aggregation and delivery processes were done correctly and HIPAA compliant. ",
  },
  {
    freelance: true,
    company: "LumiSync",
    role: "React Developer",
    period: "2023",
    summary:
      "Rebuilt the Redux state management system to vastly improve code legibility, application scalability and speed. Built and refactored large Next.js and components, worked with the design team to create a maintainable component library.",
  },
  {
    freelance: true,
    company: "Atlas Seed",
    role: "Node.js Developer",
    period: "2023",
    summary:
      "Developed a Node.js based Shopify App that would help Atlas Seed keep better track of inventory. The solution allowed the Atlas team to sell at farmers markets all the way through to bulk international buyers.",
  },
];

/** Full-time and agency roles (tab: Professional). */
export const professionalExperience: ExperienceItem[] = experience.filter(
  (item) => !item.freelance,
);

/** Contract and freelance clients (tab: Freelance). */
export const freelanceExperience: ExperienceItem[] = experience.filter(
  (item) => item.freelance === true,
);

export const projects: ProjectItem[] = [
  {
    title: "Top Table",
    description:
      "A platform for billiards players to track their stats and find new players to play with.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Node.js", "Express"],
    href: "https://top-table-c95d5672a4bb.herokuapp.com/",
    // repo: "https://github.com/yourusername/project-atlas",
  },
];

export const interests: string[] = [
  "Touchdesigner and Creative Coding",
  "Indie web and AI powered projects",
  "Running",
  "Film photography",
  "Kitesurfing",
  "Snowboarding",
  "Billiards of all kinds",
];

export const navItems = [
  // { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
] as const;
