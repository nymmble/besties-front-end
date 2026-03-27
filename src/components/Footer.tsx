import Link from "next/link";
import { siteConfig, defaultFooter } from "@/lib/defaults";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 xs:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white">{siteConfig.name}</h3>
            <p className="mt-2 text-sm">{siteConfig.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="mt-2 space-y-1 text-sm">
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="block hover:text-white">
                {siteConfig.phone}
              </a>
              <a
                href="mailto:info@bestiesdogcare.com"
                className="block hover:text-white"
              >
                info@bestiesdogcare.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Hours</h4>
            <pre className="mt-2 whitespace-pre-line text-sm font-sans">
              {defaultFooter.hours}
            </pre>
          </div>
          {/* <div>
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="mt-2 space-y-2 text-sm">
              <Link href={siteConfig.portalUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                Client Portal / Sign In
              </Link>
              <p>App Code: {siteConfig.appCode}</p>
              <a
                href={`mailto:concierge@superdoggostoronto.com?subject=Referral`}
                className="block hover:text-white"
              >
                Refer a friend
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-12 border-t border-stone-700 pt-8 text-center text-sm">
          <p>#{siteConfig.name.replace(/\s/g, "")} — Your besties are waiting for you!</p>
        </div>
      </div>
    </footer>
  );
}
