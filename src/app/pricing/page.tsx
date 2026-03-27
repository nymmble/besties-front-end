import { getPageBySlug, hasWordPressConfigured } from "@/lib/wordpress";
import { getPageFeaturedImageUrl } from "@/lib/parse";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/defaults";

export const revalidate = 60;

export const metadata = {
  title: "Pricing | Besties",
  description: "Pricing and packages for Besties dog daycare.",
};

export default async function PricingPage() {
  let featuredImageUrl: string | null = null;

  if (hasWordPressConfigured()) {
    const page = await getPageBySlug("pricing");
    featuredImageUrl = getPageFeaturedImageUrl(page);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      {featuredImageUrl ? (
        <Image
          src={featuredImageUrl}
          alt="Pricing and package information"
          width={1200}
          height={1600}
          className="mt-8 h-auto w-full rounded-lg border border-stone-200 shadow-sm"
          unoptimized
        />
      ) : null}
      <div className="mt-8 flex justify-center">
        <Link
          href={siteConfig.bookingUrl}
          className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover"
        >
          Book Your Free Assessment
        </Link>
      </div>
    </div>
  );
}
