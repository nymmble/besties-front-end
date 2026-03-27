import {
  getPagesBySlugs,
  getPosts,
  hasWordPressConfigured,
} from "@/lib/wordpress";
import {
  parseHeroPage,
  parseHowItWorksPage,
  parseBenefitsPage,
  parseSchedulePage,
  parseFounderPage,
  // parseLocationPage,
  // parsePostToTestimonial,
} from "@/lib/parse";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { Schedule } from "@/components/Schedule";
// import { Testimonials } from "@/components/Testimonials";
import { FounderStory } from "@/components/FounderStory";
// import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { InstagramFeed } from "@/components/InstagramFeed";

const HOME_SLUGS = [
  "hero",
  "how-it-works",
  "benefits",
  "schedule",
  "founder",
  "location",
];

export const revalidate = 60;

export default async function HomePage() {
  let hero = null;
  let howItWorks = null;
  let benefits = null;
  let schedule = null;
  let founder = null;
  // let location = null;
  // let testimonials: { quote: string; author: string }[] = [];

  if (hasWordPressConfigured()) {
    const pages = await getPagesBySlugs(HOME_SLUGS);
    hero = parseHeroPage(pages["hero"]);
    howItWorks = parseHowItWorksPage(pages["how-it-works"]);
    benefits = parseBenefitsPage(pages["benefits"]);
    schedule = parseSchedulePage(pages["schedule"]);
    founder = parseFounderPage(pages["founder"]);
    // location = parseLocationPage(pages["location"]);

    const posts = await getPosts({ perPage: 10 });
    // testimonials = posts.map(parsePostToTestimonial);
  }

  return (
    <>
      <Hero content={hero} />
      <HowItWorks steps={howItWorks} />
      <BenefitsGrid benefits={benefits} />
      <Schedule items={schedule} />
      {/* <Testimonials testimonials={testimonials.length > 0 ? testimonials : undefined} /> */}
      <FounderStory {...founder} />
      {/* <Location content={location} /> */}
      <CTA />
      <InstagramFeed />
    </>
  );
}
