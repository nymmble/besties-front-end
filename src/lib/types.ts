/** Present when pages are fetched with `_embed=1`. */
export interface WordPressEmbeddedFeaturedMedia {
  source_url?: string;
  media_type?: string;
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  modified: string;
  _embedded?: {
    "wp:featuredmedia"?: WordPressEmbeddedFeaturedMedia[];
  };
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
  /** Full URL from WordPress featured image (REST `_embedded`). */
  backgroundImageUrl?: string | null;
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
