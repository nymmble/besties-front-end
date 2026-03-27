import { getPageBySlug, hasWordPressConfigured } from "@/lib/wordpress";

export const revalidate = 60;

export const metadata = {
  title: "About Us | Besties",
  description: "Learn about Besties Toronto dog daycare and our team.",
};

export default async function AboutPage() {
  let content = `
    <p>Besties was born from a simple frustration: finding a daycare you could actually trust.</p>
    <p>Kritika spent 5+ years walking, boarding, and managing another daycare before opening SuperDoggos in 2022. Every team member is personally trained by Kritika — in dog behaviour, body language, and first aid.</p>
    <p>It's not just a job for us. It's a calling.</p>
  `;

  if (hasWordPressConfigured()) {
    const page = await getPageBySlug("about");
    if (page) {
      content = page.content.rendered;
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-stone-900">About Us</h1>
      <div
        className="mt-8 space-y-4 text-stone-600 [&_p]:mb-4 [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary-hover"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
