import type { BenefitItem } from "@/lib/types";
import { defaultBenefits } from "@/lib/defaults";

interface BenefitsGridProps {
  benefits?: BenefitItem[] | null;
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  const b = benefits ?? defaultBenefits;

  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
          Why Dog Parents Choose Besties
        </h2>
        <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {b.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-amber-800">
                {item.title}
              </h3>
              <p className="mt-2 text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
