import Link from "next/link";
import { BookingGrid } from "@/components/BookingGrid";
import { CopyAppCodeButton } from "@/components/CopyAppCodeButton";
import { siteConfig } from "@/lib/defaults";

export const metadata = {
  title: "Book | Besties",
  description:
    "Schedule your free assessment at Besties dog daycare in Queen West, Toronto.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-primary mt-2 md:mt-8">Book with Besties</h1>
      <p className="mt-6 text-lg text-primary">
        Before we can get you started with daycare and boarding, we would love to meet you and your pup. Please book time for a free assessment where you will have the opportunity to meet staff, tour the facility and ask questions. We can’t wait to meet you!
      </p>

      <BookingGrid />

      <p className="mt-10 text-lg text-stone-600">
        We recommend you download the Gingr Pet Parent app and use our code{" "}
         to create a profile and book with us!
      </p>

      <div className="w-full flex flex-col items-center">
        <CopyAppCodeButton code={siteConfig.appCode} />
      </div>
      
      <p className="mt-10 text-sm text-stone-500">
        <Link href="/" className="font-medium text-primary underline hover:text-primary-hover">
          Back to home
        </Link>
      </p>
    </div>
  );
}
