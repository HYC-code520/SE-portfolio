export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface AnimationVariants {
  hidden: any;
  visible: any;
  animate?: any;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaAction: () => void;
} 