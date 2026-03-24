export interface WordPressPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  modified: string;
}

export interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  modified: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface LocationContent {
  address: string;
  addressUrl: string;
  phone: string;
  email: string;
  hours: string;
  description: string;
}
