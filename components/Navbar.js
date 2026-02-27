"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

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
  return `cursor-pointer whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${active
      ? "bg-[#0F3D3E]/12 text-[#0F3D3E] font-semibold"
      : "text-[#0E1E1E]/80 hover:bg-white/70 hover:text-[#2A9D8F]"
    }`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = useMemo(
    () => (href) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999]"
        style={{
          pointerEvents: "auto",
          background: scrolled ? "rgba(245,241,232,0.97)" : "rgba(245,241,232,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(15,61,62,0.14)"
            : "1px solid rgba(15,61,62,0.08)",
          boxShadow: scrolled ? "0 4px 20px rgba(11,46,47,0.08)" : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="container-premium">
          <nav
            className="flex items-center justify-between gap-4"
            style={{ paddingTop: scrolled ? "0.6rem" : "0.75rem", paddingBottom: scrolled ? "0.6rem" : "0.75rem", transition: "padding 0.3s ease" }}
            aria-label="Primary"
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={closeMobile}>
              <Image
                src="/logo.png"
                alt="Paaji Connect Logo"
                width={42}
                height={42}
                className="h-10 w-10 rounded-full object-cover"
                style={{ boxShadow: "0 2px 10px rgba(15,61,62,0.18)" }}
              />
              <span className="text-sm font-bold tracking-[0.12em] text-[#0F3D3E] sm:text-base">
                PAAJI CONNECT
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={navLinkClasses(
                        isActive(link.href) ||
                        isActive("/breakup-recovery") ||
                        isActive("/communication-coaching") ||
                        isActive("/relationship-reset")
                      )}
                    >
                      {link.label}
                      <svg
                        className={`ml-1 inline-block h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "calc(100% + 6px)",
                        opacity: servicesOpen ? 1 : 0,
                        transform: servicesOpen ? "translateY(0)" : "translateY(-8px)",
                        pointerEvents: servicesOpen ? "auto" : "none",
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                        zIndex: 100,
                      }}
                    >
                      <div
                        className="glass-card overflow-hidden p-1.5"
                        style={{ minWidth: "220px", boxShadow: "0 16px 40px rgba(11,46,47,0.18)" }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${isActive(item.href)
                                ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                                : "text-[#0E1E1E]/80 hover:bg-white/80 hover:text-[#2A9D8F]"
                              }`}
                          >
                            <DropdownIcon href={item.href} />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className={navLinkClasses(isActive(link.href))}>
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Right side */}
            <div className="flex shrink-0 items-center gap-2.5">
              <Link
                href="/contact"
                className="premium-button !hidden bg-[#F4A261] py-2 text-[#0F3D3E] shadow-[0_8px_20px_rgba(244,162,97,0.36)] hover:bg-[#f6b178] md:!inline-flex"
              >
                Book Consultation
              </Link>

              {/* Hamburger button */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#0F3D3E]/20 bg-white/60 text-[#0F3D3E] xl:hidden"
                style={{ backdropFilter: "blur(8px)", transition: "background 0.2s ease" }}
              >
                <HamburgerIcon open={mobileOpen} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="xl:hidden"
        onClick={closeMobile}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9000,
          background: "rgba(11,46,47,0.35)",
          backdropFilter: "blur(3px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.28s ease",
        }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className="xl:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          background: "rgba(245,241,232,0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
          paddingTop: "5rem",
          paddingBottom: "1.5rem",
          boxShadow: "0 8px 40px rgba(11,46,47,0.18)",
          maxHeight: "100dvh",
          overflowY: "auto",
        }}
      >
        <div className="container-premium flex flex-col gap-1.5">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full text-left rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 flex items-center justify-between ${isActive(link.href) || isActive("/breakup-recovery") || isActive("/communication-coaching") || isActive("/relationship-reset")
                      ? "bg-[#0F3D3E]/10 text-[#0F3D3E] font-semibold"
                      : "text-[#0E1E1E]/85 hover:bg-white/70 hover:text-[#2A9D8F]"
                    }`}
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: servicesOpen ? "300px" : "0",
                    transition: "max-height 0.28s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="ml-4 mt-1 mb-1 flex flex-col gap-1 border-l-2 border-[#2A9D8F]/25 pl-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        className={`flex items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${isActive(item.href)
                            ? "bg-[#0F3D3E]/10 text-[#0F3D3E]"
                            : "text-[#0E1E1E]/80 hover:bg-white/70 hover:text-[#2A9D8F]"
                          }`}
                      >
                        <DropdownIcon href={item.href} />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${isActive(link.href)
                    ? "bg-[#0F3D3E]/10 text-[#0F3D3E] font-semibold"
                    : "text-[#0E1E1E]/85 hover:bg-white/70 hover:text-[#2A9D8F]"
                  }`}
              >
                {link.label}
              </Link>
            )
          )}

          <div className="mt-3 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="premium-button w-full bg-[#F4A261] py-3.5 text-[#0F3D3E] shadow-[0_8px_20px_rgba(244,162,97,0.32)] hover:bg-[#f7b880] text-base"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/919773817031"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="premium-button w-full border border-[#25d366]/40 bg-[#25d366]/10 py-3 text-[#128c4e] text-sm hover:bg-[#25d366]/20"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="3" y1={open ? "10" : "5"} x2="17" y2={open ? "10" : "5"}
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transformOrigin: "10px 10px", transition: "transform 0.25s ease, y1 0.25s ease" }}
      />
      <line
        x1="3" y1="10" x2="17" y2="10"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: "opacity 0.2s ease" }}
      />
      <line
        x1="3" y1={open ? "10" : "15"} x2="17" y2={open ? "10" : "15"}
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        style={{ transform: open ? "rotate(-45deg)" : "rotate(0deg)", transformOrigin: "10px 10px", transition: "transform 0.25s ease" }}
      />
    </svg>
  );
}

function DropdownIcon({ href }) {
  const icons = {
    "/services": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />,
    "/breakup-recovery": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    "/communication-coaching": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    "/relationship-reset": <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
  };
  const d = icons[href];
  if (!d) return null;
  return (
    <svg className="h-4 w-4 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {d}
    </svg>
  );
}
