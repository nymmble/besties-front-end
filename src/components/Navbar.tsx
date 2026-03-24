"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/defaults";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-amber-800">
            <span className="text-xl">{siteConfig.name}</span>
            <span className="hidden text-sm font-normal text-amber-600 sm:inline">
              {siteConfig.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone-600 transition hover:text-amber-700"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="text-sm font-medium text-stone-600 transition hover:text-amber-700"
            >
              {siteConfig.phone}
            </a>
            <Link
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-600 transition hover:text-amber-700"
            >
              Sign In
            </Link>
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"
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
          <div className="border-t border-amber-100 py-4 md:hidden">
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
                className="rounded-full bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-white"
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
