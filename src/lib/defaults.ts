import type {
  HeroContent,
  HowItWorksStep,
  BenefitItem,
  ScheduleItem,
  Testimonial,
  LocationContent,
} from "./types";

export const siteConfig = {
  name: "Besties ",
  tagline: "Dog Daycare and Boarding Club",
  phone: "(647) 668-4613",
  bookingUrl: "/book",
  portalUrl: "https://bestiesdogcare.portal.gingrapp.com/public/login",
  instagram: "https://www.instagram.com/bestiesdogclub",
  instagramHandle: "@bestiesdogclub",
  // TODO: Replace with actual app code for gingrapp.com
  appCode: "9999",
};

export const defaultHero: HeroContent = {
  title: "Best Dog Daycare in Queen West, Toronto – A Second Family for Your SuperDoggo",
  subtitle:
    "Small groups, experienced handlers, and a structured daily routine at 795 Queen St W.",
  ctaText: "Book Your Free Assessment",
  ctaUrl: siteConfig.bookingUrl,
};

export const defaultHowItWorks: HowItWorksStep[] = [
  {
    number: 1,
    title: "Sign Up Online",
    description:
      "Create your free profile on our client portal. It takes 2 minutes.",
  },
  {
    number: 2,
    title: "Free Assessment",
    description:
      "Bring your dog for a 15-minute one-on-one meet and greet. Tour the space, ask questions — no commitment.",
  },
  {
    number: 3,
    title: "SuperDoggo Life",
    description:
      "Your dog joins the pack! Supervised play, walks, rest, and a daily report card sent to your phone.",
  },
];

export const defaultBenefits: BenefitItem[] = [
  {
    title: "Temperament-Based Groups",
    description: "Dogs grouped by personality and energy level, not just size. Better matches, happier dogs.",
  },
  {
    title: "Never Overcrowded",
    description: "We enforce a strict capacity limit — always. Your dog won't get lost in the crowd.",
  },
  {
    title: "No Basements or Confined Spaces",
    description: "2,000 sq ft spacious main-floor facility with natural light. Dogs deserve room to move.",
  },
  {
    title: "Personally Trained Staff",
    description: "Every team member is trained by the founder in dog behaviour, body language, and first aid.",
  },
  {
    title: "Structured Daily Routine",
    description: "Not just free play. A balanced schedule of walks, rest, socialization, and enrichment.",
  },
  {
    title: "Live Instagram Updates",
    description: "Live story updates on Instagram all day long — see your pup playing, resting, and thriving.",
  },
  {
    title: "Monthly Enrichment Events",
    description: "Themed monthly events for socialization, enrichment, and fun — because every dog deserves something to look forward to.",
  },
  {
    title: "Climate-Controlled Facility",
    description: "Rubber mat flooring and quality air purification for your dog's comfort year-round.",
  },
  {
    title: "Mobile App & Portal",
    description: "Manage your profile, request reservations, and get daily report cards from your phone.",
  },
];

export const defaultSchedule: ScheduleItem[] = [
  { time: "7:00 – 10:00 AM", activity: "Drop-off and play time" },
  { time: "10:00 – 11:00 AM", activity: "Morning walks and backyard time" },
  { time: "11:00 AM – Noon", activity: "Nap time" },
  { time: "Noon – 2:00 PM", activity: "Half-day pick-up and drop-off" },
  { time: "2:00 – 3:00 PM", activity: "Afternoon walks and backyard time" },
  { time: "3:00 – 4:00 PM", activity: "Rest and quiet time" },
  { time: "4:00 – 7:00 PM", activity: "Wind-down, getting dressed, and pick-ups" },
];

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "The owner Kritika is very sweet and knowledgeable. She and her staff are very attentive and are always on top of keeping the facility clean and hygienic.",
    author: "Rohini",
  },
  {
    quote:
      "We have been to doggy daycares in DC, NYC, and Dubai and this is by far the best one. She literally pulls us to the door. Would highly recommend SuperDoggos.",
    author: "Eli",
  },
  {
    quote:
      "They treat her like she's one of their own. 10/10. You do get pictures and videos shared constantly throughout the day. Owner is also a fabulous and kind human.",
    author: "Michelle",
  },
  {
    quote:
      "Best daycare I've found in the city, hands down! Convenient location and hours, the facility is clean, the staff is awesome, and easy booking and communication.",
    author: "Sarah",
  },
  {
    quote:
      "I have been sending my pug Pancake ever since she was a puppy and it was the best choice I could have made. The staff genuinely care for her and are so attentive. Highly recommend!",
    author: "Fiona",
  },
  {
    quote:
      "Amazing place, the staff are kind, dependable, and clearly dog lovers. They always give an update at the end of the day which makes me feel comfortable.",
    author: "Laura",
  },
];

export const defaultFounderContent = {
  heading: "Meet Antonella",
  body: "",
  ctaText: "Our Full Story",
  ctaUrl: "/about",
};

export const defaultLocation: LocationContent = {
  address: "",
  addressUrl: "https://www.google.com/maps/place/",
  phone: siteConfig.phone,
  email: "info@bestiesdogcare.ca",
  hours: "Mon–Fri: 7:00 AM – 7:00 PM\nnSaturday & Sunday: 9:00 AM – 5:00 PM",
  description: "",
};

export const defaultFooter = {
  hours: "Mon–Fri: 7:00 AM – 7:00 PM\nSaturday & Sunday: 9:00 AM – 5:00 PM",
};
