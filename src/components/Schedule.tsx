import type { ScheduleItem } from "@/lib/types";
import { defaultSchedule } from "@/lib/defaults";

interface ScheduleProps {
  items?: ScheduleItem[] | null;
}

export function Schedule({ items }: ScheduleProps) {
  const s = items ?? defaultSchedule;

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
          A Day at Besties
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
          Monday to Friday — same structure on Saturdays and Sundays with shorter hours
        </p>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="space-y-4">
            {s.map((item) => (
              <div
                key={item.time}
                className="flex gap-4 rounded-lg border border-stone-200 bg-stone-50/50 p-4"
              >
                <span className="w-32 shrink-0 font-semibold text-primary">
                  {item.time}
                </span>
                <span className="text-stone-600">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
