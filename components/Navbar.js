"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services" },
      { label: "Breakup Recovery", href: "/breakup-recovery" },
      { label: "Communication Coaching", href: "/communication-coaching" },
      { label: "Relationship Reset", href: "/relationship-reset" }
    ]
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

function navLinkClasses(active) {
  return `cursor-pointer whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${active
    ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
    : "text-[#0E1E1E]/82 hover:bg-white/65 hover:text-[#2A9D8F]"
    }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = useMemo(
    () => (href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-[#0F3D3E]/10 bg-[#F5F1E8]/95 backdrop-blur-xl" style={{ pointerEvents: 'auto', cursor: 'auto' }}>
      <div className="container-premium">
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Primary">
          <Link href="/" className="flex shrink-0 items-center gap-3" onClick={closeMobile}>
            <Image
              src="/logo.png"
              alt="Paaji Connect Logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="text-sm font-semibold tracking-[0.13em] text-[#0F3D3E] sm:text-base">
              PAAJI CONNECT
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 xl:flex">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={navLinkClasses(isActive(link.href) || isActive("/breakup-recovery") || isActive("/communication-coaching") || isActive("/relationship-reset"))}>
                    {link.label}
                    <svg className="ml-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="glass-card min-w-[240px] overflow-hidden p-2 shadow-[0_16px_36px_rgba(11,46,47,0.16)]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block whitespace-nowrap rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive(item.href)
                              ? "bg-gradient-to-r from-[#0F3D3E]/10 to-[#2A9D8F]/10 text-[#0F3D3E]"
                              : "text-[#0E1E1E]/82 hover:bg-gradient-to-r hover:from-white/80 hover:to-white/60 hover:text-[#2A9D8F]"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              {item.href === "/services" && (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                              )}
                              {item.href === "/breakup-recovery" && (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              )}
                              {item.href === "/communication-coaching" && (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              )}
                              {item.href === "/relationship-reset" && (
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              )}
                              <span>{item.label}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={navLinkClasses(isActive(link.href))}>
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="premium-button !hidden bg-[#F4A261] py-2 text-[#0F3D3E] shadow-[0_10px_22px_rgba(244,162,97,0.32)] hover:bg-[#f6b178] md:!inline-flex"
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
              <span className="text-lg leading-none">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-[#0F3D3E]/12 pb-3 pt-2 xl:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href) || isActive("/breakup-recovery") || isActive("/communication-coaching") || isActive("/relationship-reset")
                        ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                        : "text-[#0E1E1E]/88 hover:bg-white/60 hover:text-[#2A9D8F]"
                        }`}
                    >
                      <span className="flex items-center justify-between">
                        {link.label}
                        <svg className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#2A9D8F]/20 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobile}
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                              ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                              : "text-[#0E1E1E]/88 hover:bg-white/60 hover:text-[#2A9D8F]"
                              }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                      ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                      : "text-[#0E1E1E]/88 hover:bg-white/60 hover:text-[#2A9D8F]"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
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
