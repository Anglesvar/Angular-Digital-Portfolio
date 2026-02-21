export interface SocialLink {
  id: number;
  icon: string;
  url: string;
  label: string;
}

export interface PersonalData {
  firstName: string;
  middleName: string;
  lastName: string;
  devDesc: string;
  logoText: string;
  resumeLink: string;
  mobileNumber: string;
  emailId: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  heading: string;
  subLabel: string;
  description: string;
  skills: string[];
  stats: StatItem[];
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
}

export interface GitHubConfig {
  username: string;
  apiBase: string;
  query: string;
}

export interface ProjectsData {
  heading: string;
  subLabel: string;
  github: GitHubConfig;
  displayCount: number;
  fallbackRepos: Repo[];
}

export interface ContactData {
  heading: string;
  subLabel: string;
  tagline: string;
}

export interface NavigationData {
  links: string[];
  scrollThreshold: number;
}

export interface BackgroundData {
  hero: string;
  about: string;
  projects: string;
  contact: string;
}

export interface PortfolioData {
  personal: PersonalData;
  social: SocialLink[];
  about: AboutData;
  projects: ProjectsData;
  contact: ContactData;
  navigation: NavigationData;
  backgrounds: BackgroundData;
  languageColors: Record<string, string>;
}
