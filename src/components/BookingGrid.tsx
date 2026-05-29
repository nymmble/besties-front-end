import type { BookingOption } from "@/lib/types";
import { defaultBookingOptions } from "@/lib/defaults";

interface BookingGridProps {
  options?: BookingOption[] | null;
}

export function BookingGrid({ options }: BookingGridProps) {
  const items = options ?? defaultBookingOptions;

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
          <p className="mt-2 flex-1 text-stone-600">{item.description}</p>
          <a
            href={item.buttonUrl}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={
              item.external
                ? "mt-6 inline-flex justify-center rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-hover sm:text-base"
                : "mt-6 inline-flex justify-center rounded-full border-2 border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition hover:bg-cream sm:text-base"
            }
          >
            {item.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
}
