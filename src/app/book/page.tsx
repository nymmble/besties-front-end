import Link from "next/link";
import { siteConfig } from "@/lib/defaults";

export const metadata = {
  title: "Book | Besties",
  description:
    "Schedule your free assessment at Besties dog daycare in Queen West, Toronto.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-stone-900">Book your visit</h1>
      <p className="mt-6 text-lg text-stone-600">
        Online booking is almost here. For now, you can reserve your free assessment by reaching out by phone — we&apos;d love to meet you and your pup.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="inline-flex justify-center rounded-full border-2 border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition hover:bg-cream sm:px-8 sm:text-base"
        >
          {siteConfig.phone}
        </a>
      </div>
      <p className="mt-10 text-sm text-stone-500">
        <Link href="/" className="font-medium text-primary underline hover:text-primary-hover">
          Back to home
        </Link>
      </p>
    </div>
  );
}
