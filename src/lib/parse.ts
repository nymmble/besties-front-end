import { decode as decodeEntities } from "he";
import type { WordPressPage, WordPressPost } from "./types";
import type {
  HeroContent,
  HowItWorksStep,
  BenefitItem,
  ScheduleItem,
  Testimonial,
  LocationContent,
} from "./types";

function stripHtml(html: string): string {
  const stripped = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return decodeEntities(stripped);
}

function getFirstLink(html: string): string | null {
  const match = html.match(/<a[^>]+href=["']([^"']+)["']/);
  return match ? decodeEntities(match[1]) : null;
}

function featuredImageSourceUrl(page: WordPressPage): string | null {
  const media = page._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;
  if (media.media_type && media.media_type !== "image") return null;
  return media.source_url;
}

export function parseHeroPage(page: WordPressPage | null): HeroContent | null {
  if (!page) return null;
  return {
    title: stripHtml(page.title.rendered),
    subtitle: stripHtml(page.excerpt.rendered),
    ctaText: "Book Your Free Assessment",
    ctaUrl: getFirstLink(page.content.rendered) ?? "#",
    backgroundImageUrl: featuredImageSourceUrl(page),
  };
}

export function parseHowItWorksPage(page: WordPressPage | null): HowItWorksStep[] | null {
  if (!page) return null;
  const html = page.content.rendered;
  const steps: HowItWorksStep[] = [];
  const h3Regex = /<h3[^>]*>([^<]+)<\/h3>/gi;
  const pRegex = /<p[^>]*>([^<]+)<\/p>/gi;
  const h3Matches = [...html.matchAll(h3Regex)];
  const pMatches = [...html.matchAll(pRegex)];
  h3Matches.forEach((m, i) => {
    steps.push({
      number: i + 1,
      title: stripHtml(m[1]),
      description: pMatches[i] ? stripHtml(pMatches[i][1]) : "",
    });
  });
  return steps.length > 0 ? steps : null;
}

export function parseBenefitsPage(page: WordPressPage | null): BenefitItem[] | null {
  if (!page) return null;
  const html = page.content.rendered;
  const items: BenefitItem[] = [];
  const h3Regex = /<h3[^>]*>([^<]+)<\/h3>/gi;
  const blocks = html.split(/<h3/gi);
  blocks.slice(1).forEach((block) => {
    const titleMatch = block.match(/^[^>]*>([^<]+)</);
    const pMatch = block.match(/<p[^>]*>([^<]+)<\/p>/);
    if (titleMatch) {
      items.push({
        title: stripHtml(titleMatch[1]),
        description: pMatch ? stripHtml(pMatch[1]) : "",
      });
    }
  });
  return items.length > 0 ? items : null;
}

export function parseSchedulePage(page: WordPressPage | null): ScheduleItem[] | null {
  if (!page) return null;
  const html = page.content.rendered;
  const items: ScheduleItem[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  const matches = html.match(liRegex) ?? [];
  matches.forEach((li) => {
    const text = stripHtml(li);
    const dash = text.indexOf(" – ");
    if (dash > 0) {
      items.push({
        time: text.slice(0, dash).trim(),
        activity: text.slice(dash + 3).trim(),
      });
    }
  });
  return items.length > 0 ? items : null;
}

export function parsePostToTestimonial(post: WordPressPost): Testimonial {
  return {
    quote: stripHtml(post.excerpt.rendered || post.content.rendered).slice(0, 300),
    author: stripHtml(post.title.rendered),
  };
}

export function parseFounderPage(page: WordPressPage | null): {
  heading: string;
  body: string;
  ctaText: string;
  ctaUrl: string;
} | null {
  if (!page) return null;
  const link = getFirstLink(page.content.rendered);
  return {
    heading: stripHtml(page.title.rendered),
    body: stripHtml(page.content.rendered),
    ctaText: "Our Full Story",
    ctaUrl: link ?? "/about",
  };
}

export function parseLocationPage(page: WordPressPage | null): LocationContent | null {
  if (!page) return null;
  const content = stripHtml(page.content.rendered);
  const addrMatch = content.match(/795 Queen St[^.]*\./);
  const phoneMatch = content.match(/\(\d{3}\) \d{3}-\d{4}/);
  const emailMatch = content.match(/[\w.-]+@[\w.-]+\.\w+/);
  return {
    address: addrMatch?.[0] ?? "795 Queen St W, Toronto, ON M6J 1G1",
    addressUrl: "https://www.google.com/maps/place/795+Queen+St+W,+Toronto,+ON",
    phone: phoneMatch?.[0] ?? "(647) 668-4613",
    email: emailMatch?.[0] ?? "info@bestiesdogcare.com",
    hours: "Mon–Fri: 7:00 AM – 7:00 PM\nSaturday: 9:00 AM – 5:00 PM",
    description: content,
  };
}
