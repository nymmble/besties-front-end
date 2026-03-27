import { siteConfig } from "@/lib/defaults";

interface CTAProps {
  heading?: string;
  subtext?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function CTA({
  heading = "Ready to Meet Us?",
  subtext = "Book your free assessment and see why dog parents trust Besties.",
  ctaText = "Book Your Free Assessment",
  ctaUrl = siteConfig.bookingUrl,
}: CTAProps) {
  return (
    <section className="bg-cream/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
          {subtext}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaUrl}
            className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-hover"
          >
            {ctaText}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition hover:bg-cream"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
