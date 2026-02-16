"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Breakup Recovery", href: "/breakup-recovery" },
  { label: "Communication Coaching", href: "/communication-coaching" },
  { label: "Relationship Reset", href: "/relationship-reset" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function navLinkClasses(active) {
  return `rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
    active
      ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
      : "text-[#0E1E1E]/82 hover:bg-white/65 hover:text-[#2A9D8F]"
  }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = useMemo(
    () => (href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0F3D3E]/10 bg-[#F5F1E8]/95 backdrop-blur-xl">
      <div className="container-premium">
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Primary">
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeMobile}>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/70 text-sm font-semibold text-[#0F3D3E] soft-shadow">
              PC
            </span>
            <span className="text-sm font-semibold tracking-[0.13em] text-[#0F3D3E] sm:text-base">
              PAAJI CONNECT
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClasses(isActive(link.href))}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="premium-button hidden bg-[#F4A261] py-2 text-[#0F3D3E] shadow-[0_10px_22px_rgba(244,162,97,0.32)] hover:bg-[#f6b178] md:inline-flex"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#0F3D3E]/20 text-[#0F3D3E] xl:hidden"
            >
              <span className="text-lg leading-none">{mobileOpen ? "x" : "="}</span>
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-[#0F3D3E]/12 pb-3 pt-2 xl:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                      : "text-[#0E1E1E]/88 hover:bg-white/60 hover:text-[#2A9D8F]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={closeMobile}
                className="premium-button mt-2 bg-[#F4A261] py-2 text-[#0F3D3E] hover:bg-[#f6b178]"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
