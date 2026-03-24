import type { LocationContent } from "@/lib/types";
import { defaultLocation } from "@/lib/defaults";

interface LocationProps {
  content?: LocationContent | null;
}

export function Location({ content }: LocationProps) {
  const c = content ?? defaultLocation;

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
          Find Us in Queen West
        </h2>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-amber-800">
              Besties Dog Daycare
            </h3>
            <div className="mt-6 space-y-3 text-stone-600">
              <p>
                <a
                  href={c.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline transition hover:text-amber-800"
                >
                  {c.address}
                </a>
              </p>
              <p>
                <a href={`tel:${c.phone.replace(/\D/g, "")}`} className="hover:text-amber-700">
                  {c.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${c.email}`}
                  className="hover:text-amber-700"
                >
                  {c.email}
                </a>
              </p>
              <div className="whitespace-pre-line pt-2">{c.hours}</div>
            </div>
            <p className="mt-6 text-stone-600">{c.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
