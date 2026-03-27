import { getPageBySlug, hasWordPressConfigured } from "@/lib/wordpress";
import Link from "next/link";
import { siteConfig } from "@/lib/defaults";

export const revalidate = 60;

export const metadata = {
  title: "Pricing | Besties",
  description: "Pricing and packages for Besties dog daycare.",
};

export default async function PricingPage() {
  let content = `
    <p>Contact us for current pricing. We offer full-day and half-day options.</p>
    <p>Book your free assessment to learn more about our packages and find the right fit for your dog.</p>
  `;

  if (hasWordPressConfigured()) {
    const page = await getPageBySlug("pricing");
    if (page) {
      content = page.content.rendered;
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-stone-900">Pricing</h1>
      <div
        className="mt-8 space-y-4 text-stone-600 [&_p]:mb-4 [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary-hover"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link
        href={siteConfig.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
      >
        Book Your Free Assessment
      </Link>
    </div>
  );
}
