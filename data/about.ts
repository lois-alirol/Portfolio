export interface Tech {
  name: string;
  icon_url: string;
}

export interface AboutDomain {
  id: string;
  title: string;
  description: string;
  techs: Tech[];
}

export interface SoftSkillItem {
  id: string;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  title: string;
  school: string;
  period: string;
  details?: string;
}

export const getAboutDomains = (t: (key: string) => string): AboutDomain[] => [
  {
    id: 'front',
    title: t('about.skills.front.title'),
    description: t('about.skills.front.description'),
    techs: [
      { name: 'HTML', icon_url: 'https://cdn.simpleicons.org/html5' },
      { name: 'CSS', icon_url: 'https://cdn.simpleicons.org/css' },
      { name: 'JavaScript', icon_url: 'https://cdn.simpleicons.org/javascript' },
      { name: 'TypeScript', icon_url: 'https://cdn.simpleicons.org/typescript' },
      { name: 'React', icon_url: 'https://cdn.simpleicons.org/react' },
      { name: 'Next.JS', icon_url: 'https://cdn.simpleicons.org/nextdotjs' },
      { name: 'TailwindCSS', icon_url: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'QML', icon_url: 'https://cdn.simpleicons.org/qt' },
    ],
  },
  {
    id: 'back',
    title: t('about.skills.back.title'),
    description: t('about.skills.back.description'),
    techs: [
      {name: 'C++', icon_url: 'https://cdn.simpleicons.org/cplusplus'},
      {name: 'Qt Framework', icon_url: 'https://cdn.simpleicons.org/qt'},
      {name: 'Python', icon_url: 'https://cdn.simpleicons.org/python'},
      {name: 'Java', icon_url: 'https://www.svgrepo.com/show/303388/java-4-logo.svg'},
      {name: 'Node.JS', icon_url: 'https://cdn.simpleicons.org/nodedotjs'},
      {name: 'REST API', icon_url: 'https://cdn.simpleicons.org/openapiinitiative'},
    ]
  },
  {
    id: 'db',
    title: t('about.skills.databases.title'),
    description: t('about.skills.databases.description'),
    techs: [
      { name: 'SQL', icon_url: 'https://cdn.simpleicons.org/sqlite' },
      { name: 'MySQL', icon_url: 'https://cdn.simpleicons.org/mysql' },
      { name: 'PostGreSQL', icon_url: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'SQLite', icon_url: 'https://cdn.simpleicons.org/sqlite' },
      { name: 'Qt SQL', icon_url: 'https://cdn.simpleicons.org/qt' },
      { name: 'PL/SQL', icon_url: 'https://www.svgrepo.com/show/373980/plsql.svg' },
    ],
  },
  {
    id: 'tooling',
    title: t('about.skills.tooling.title'),
    description: t('about.skills.tooling.description'),
    techs: [
      { name: 'Git', icon_url: 'https://cdn.simpleicons.org/git' },
      { name: 'GitHub', icon_url: 'https://cdn.simpleicons.org/github' },
      { name: 'GitHub Actions', icon_url: 'https://cdn.simpleicons.org/githubactions' },
      { name: 'GitLab', icon_url: 'https://cdn.simpleicons.org/gitlab' },
      { name: 'Bash / Shell', icon_url: 'https://cdn.simpleicons.org/gnubash' },
      { name: 'Maven', icon_url: 'https://cdn.simpleicons.org/apachemaven' },
      { name: 'Gradle', icon_url: 'https://cdn.simpleicons.org/gradle' },
    ],
  },
];

export const getAboutSoftSkills = (t: (key: string) => string): SoftSkillItem[] => [
  {
    id: 'soft-1',
    title: t('about.softskills.1.title'), 
    description: t('about.softskills.1.description'), 
  },
  {
    id: 'soft-2',
    title: t('about.softskills.2.title'),
    description: t('about.softskills.2.description'),
  },
  {
    id: 'soft-3',
    title: t('about.softskills.3.title'),
    description: t('about.softskills.3.description'),
  },
];

export const getAboutEducation = (t: (key: string) => string): EducationItem[] => [
  {
    id: 'edu-1',
    title: t('about.education.1.title'),
    school: t('about.education.1.school'),
    period: "Depuis 2025",
    details: t('about.education.1.details'),
  },
  {
    id: 'edu-2',
    title: t('about.education.2.title'),
    school: t('about.education.2.school'),
    period: "2022-2025",
    details: t('about.education.2.details'),
  },
];
