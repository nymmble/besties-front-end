import Image from "next/image";
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
          ? "relative overflow-hidden bg-stone-900 lg:bg-primary"
          : "relative overflow-hidden bg-gradient-to-br from-cream via-white to-cream"
      }
    >
      {bgUrl ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-position-[72%_50%] lg:hidden"
            style={{ backgroundImage: `url(${bgUrl})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-stone-950/37.5 via-stone-900/27.5 to-stone-950/40 lg:hidden"
            aria-hidden
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/35 to-transparent" />
      )}

      <div
        className={
          bgUrl
            ? "relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20 xl:gap-16 xl:py-28"
            : "relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        }
      >
        <div
          className={
            bgUrl
              ? "text-center lg:text-left"
              : "mx-auto max-w-3xl text-center"
          }
        >
          <h1
            className={
              bgUrl
                ? "text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl lg:text-secondary lg:drop-shadow-none"
                : "text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
            }
          >
            {c.title}
          </h1>
          <p
            className={
              bgUrl
                ? "mt-6 text-lg text-stone-100/95 sm:text-xl lg:text-secondary"
                : "mt-6 text-lg text-stone-600 sm:text-xl"
            }
          >
            {c.subtitle}
          </p>
          <div
            className={
              bgUrl
                ? "mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
                : "mt-10 flex flex-wrap items-center justify-center gap-4"
            }
          >
            <a
              href={c.ctaUrl}
              className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-primary-hover lg:bg-secondary lg:text-primary lg:hover:bg-secondary/90 lg:hover:text-primary"
            >
              {c.ctaText}
            </a>
          </div>
        </div>

        {bgUrl ? (
          <div className="relative hidden min-h-72 lg:block">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-88 lg:max-h-[min(40rem,calc(100vh-6rem))] xl:min-h-104">
              <Image
                src={bgUrl}
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
