"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/defaults";

const LOGO_SRC =
  "https://bestiesdogcare.wordpress.com/wp-content/uploads/2026/03/signage-1.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-36 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO_SRC}
              alt={`${siteConfig.name} — ${siteConfig.tagline}`}
              width={1257}
              height={320}
              className="h-60 w-auto sm:h-80"
              sizes="(max-width: 639px) 943px, 1257px"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="text-sm font-medium text-stone-600 transition hover:text-primary"
            >
              {siteConfig.phone}
            </a>
            {/* <Link
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-600 transition hover:text-primary"
            >
              Sign In
            </Link> */}
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-hover"
            >
              Book Free Assessment
            </Link>
          </nav>

          <button
            type="button"
            className="rounded p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-stone-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-cream py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-600"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-sm font-medium text-stone-600"
              >
                {siteConfig.phone}
              </a>
              <Link
                href={siteConfig.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-stone-600"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-hover"
                onClick={() => setOpen(false)}
              >
                Book Free Assessment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
