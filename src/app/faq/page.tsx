import { getPageBySlug, hasWordPressConfigured } from "@/lib/wordpress";

export const revalidate = 60;

export const metadata = {
  title: "FAQ | Besties",
  description: "Frequently asked questions about Besties dog daycare.",
};

export default async function FAQPage() {
  let content = `
    <h2>How do I get started?</h2>
    <p>Create your free profile on our client portal, then book a free 15-minute assessment. Bring your dog for a meet and greet — no commitment.</p>
    
    <h2>What are your hours?</h2>
    <p>Monday to Friday: 7:00 AM – 7:00 PM. Saturday: 9:00 AM – 5:00 PM. Sunday: Closed.</p>
    
    <h2>Where are you located?</h2>
    <p>795 Queen St W, Toronto, ON M6J 1G1 — in the heart of Queen West, a 10-minute walk from Trinity Bellwoods Park.</p>
    
    <h2>Do you require an assessment?</h2>
    <p>Yes. Every dog does a free 15-minute one-on-one assessment so we can match them with the right group and ensure a safe, fun experience.</p>
  `;

  if (hasWordPressConfigured()) {
    const page = await getPageBySlug("faq");
    if (page) {
      content = page.content.rendered;
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-stone-900">FAQ</h1>
      <div
        className="mt-8 space-y-6 text-stone-600 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-stone-900 [&_p]:mb-4 [&_a]:text-amber-600 [&_a]:underline hover:[&_a]:text-amber-700"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
