import Link from "next/link";
import { defaultFounderContent } from "@/lib/defaults";

interface FounderStoryProps {
  heading?: string;
  body?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function FounderStory({ heading, body, ctaText, ctaUrl }: FounderStoryProps) {
  const content = {
    heading: heading ?? defaultFounderContent.heading,
    body: body ?? defaultFounderContent.body,
    ctaText: ctaText ?? defaultFounderContent.ctaText,
    ctaUrl: ctaUrl ?? defaultFounderContent.ctaUrl,
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
            {content.heading}
          </h2>
          <div className="mt-8 space-y-4 text-lg text-stone-600">
            {content.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link
            href={content.ctaUrl}
            className="mt-8 inline-block font-semibold text-primary underline decoration-secondary underline-offset-4 transition hover:text-primary-hover"
          >
            {content.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
