import type { Testimonial } from "@/lib/types";
import { defaultTestimonials } from "@/lib/defaults";

interface TestimonialsProps {
  testimonials?: Testimonial[] | null;
  rating?: string;
}

export function Testimonials({ testimonials, rating }: TestimonialsProps) {
  const t = testimonials ?? defaultTestimonials;
  const displayRating = rating ?? "5.0 stars from 55 reviews on Google";

  return (
    <section className="bg-secondary/15 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
          What Dog Parents Are Saying
        </h2>
        <p className="mt-4 text-center font-medium text-primary">{displayRating}</p>
        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-xl border border-cream bg-white p-6 shadow-sm"
            >
              <p className="text-stone-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 font-semibold text-primary">
                — {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
