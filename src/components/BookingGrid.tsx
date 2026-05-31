import { CopyAppCodeButton } from "@/components/CopyAppCodeButton";
import type { BookingOption } from "@/lib/types";
import { defaultBookingOptions, siteConfig } from "@/lib/defaults";

interface BookingGridProps {
  options?: BookingOption[] | null;
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function BookingGrid({ options }: BookingGridProps) {
  const items = options ?? defaultBookingOptions;

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
          <p className="mt-2 flex-1 text-stone-600">{item.description}</p>
          {index === 0 ? (
            <>
              <p className="mt-4 text-stone-600">
                We recommend you download the Gingr Pet Parent app and use our code to create a
                profile and book with us!
              </p>
              <CopyAppCodeButton code={siteConfig.appCode} />
            </>
          ) : null}
          <a
            href={item.buttonUrl}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-hover sm:text-base"
          >
            {item.buttonText}
            {item.buttonUrl.startsWith("tel:") ? (
              <PhoneIcon className="h-4 w-4 shrink-0" />
            ) : null}
          </a>
        </div>
      ))}
    </div>
  );
}
