import type { WordPressPage, WordPressPost } from "./types";

const REVALIDATE = 60; // ISR: revalidate every 60 seconds

function getApiUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  if (!url) return null;
  const trimmed = url.replace(/\/$/, "");

  try {
    const parsed = new URL(trimmed);
    const host = parsed.hostname;

    // WordPress.com sites: direct /wp-json/ often returns 404 on free tier.
    // Use the public API proxy instead.
    if (host.endsWith(".wordpress.com")) {
      return `https://public-api.wordpress.com/wp/v2/sites/${host}`;
    }

    // Self-hosted or Atomic: standard wp-json
    return `${trimmed}/wp-json/wp/v2`;
  } catch {
    return `${trimmed}/wp-json/wp/v2`;
  }
}

async function wpFetch<T>(endpoint: string): Promise<T | null> {
  const base = getApiUrl();
  if (!base) return null;

  try {
    const res = await fetch(`${base}${endpoint}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  return wpFetch<WordPressPage[]>(
    `/pages?slug=${encodeURIComponent(slug)}&_embed=1`
  ).then((pages) => (pages && pages[0] ? pages[0] : null));
}

export async function getPagesBySlugs(slugs: string[]): Promise<Record<string, WordPressPage | null>> {
  const results = await Promise.all(
    slugs.map((slug) => getPageBySlug(slug))
  );
  return Object.fromEntries(slugs.map((slug, i) => [slug, results[i] ?? null]));
}

export async function getPosts(params?: {
  perPage?: number;
  category?: number;
}): Promise<WordPressPost[]> {
  const search = new URLSearchParams();
  search.set("per_page", String(params?.perPage ?? 10));
  if (params?.category) search.set("categories", String(params.category));
  const posts = await wpFetch<WordPressPost[]>(`/posts?${search}`);
  return posts ?? [];
}

export function hasWordPressConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_WORDPRESS_URL);
}
