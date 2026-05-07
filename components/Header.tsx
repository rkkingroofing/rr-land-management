'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/content/site';
import { Container } from './Container';
import { PhoneLink } from './PhoneLink';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while menu open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-black text-white border-b border-gray-900/60">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label={`${site.name} — Home`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 object-contain"
            priority
          />
          <span className="font-display uppercase tracking-wide text-lg md:text-xl leading-none">
            R&amp;R <span className="text-orange">Land Management</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm uppercase tracking-widewide font-semibold transition-colors ${
                  active ? 'text-orange' : 'text-white hover:text-orange'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <PhoneLink
            tel={site.contact.primary.tel}
            display={site.contact.primary.phone}
            label={`Call ${site.contact.primary.name}`}
            variant="button-primary"
            className="!px-4 !py-2.5 text-sm"
          />
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 -mr-2 text-white"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile fullscreen menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-black text-white z-30 overflow-y-auto"
        >
          <div className="h-1 bg-orange" aria-hidden="true" />
          <nav className="px-6 py-8 flex flex-col gap-2" aria-label="Primary mobile">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-display uppercase text-3xl py-3 border-b border-gray-900 ${
                    active ? 'text-orange' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-8 flex flex-col gap-3">
              <PhoneLink
                tel={site.contact.primary.tel}
                display={`Call Ryan: ${site.contact.primary.phone}`}
                label={`Call ${site.contact.primary.name}`}
                variant="button-primary"
              />
              <PhoneLink
                tel={site.contact.secondary.tel}
                display={`Call Ronnie: ${site.contact.secondary.phone}`}
                label={`Call ${site.contact.secondary.name}`}
                variant="button-secondary"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
