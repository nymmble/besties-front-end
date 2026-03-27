import type { HowItWorksStep } from "@/lib/types";
import { defaultHowItWorks } from "@/lib/defaults";

interface HowItWorksProps {
  steps?: HowItWorksStep[] | null;
}

export function HowItWorks({ steps }: HowItWorksProps) {
  const s = steps ?? defaultHowItWorks;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
          How It Works
        </h2>
        <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-3">
          {s.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-secondary">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-stone-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
