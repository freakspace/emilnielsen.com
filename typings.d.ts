export interface PhaseProps {
  phase: string,
  title: string,
  description: string,
  actions: string[]
  imagePath: string
}

export interface HeroProps {
  subtitle: string;
  title: string;
  description: string;
  imagePath: string;
}

export interface CallToActionLinkProps {
  href: string,
  text: string
}

export interface IProject {
  subtitle: string;
  link: string | null
  title: string;
  description: string;
  stack: string[];
  features: {
    imagePath: string;
    caption: string
  }[];
}