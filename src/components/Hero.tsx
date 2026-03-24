import type { HeroContent } from "@/lib/types";
import { defaultHero } from "@/lib/defaults";

interface HeroProps {
  content?: HeroContent | null;
}

export function Hero({ content }: HeroProps) {
  const c = content ?? defaultHero;
  const bgUrl = c.backgroundImageUrl;

  return (
    <section
      className={
        bgUrl
          ? "relative overflow-hidden bg-stone-900"
          : "relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50"
      }
    >
      {bgUrl ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgUrl})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-900/55 to-stone-950/80"
            aria-hidden
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/30 to-transparent" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={
              bgUrl
                ? "text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
                : "text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
            }
          >
            {c.title}
          </h1>
          <p
            className={
              bgUrl
                ? "mt-6 text-lg text-stone-100/95 sm:text-xl"
                : "mt-6 text-lg text-stone-600 sm:text-xl"
            }
          >
            {c.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={c.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-amber-600"
            >
              {c.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
