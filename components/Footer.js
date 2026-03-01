import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/mdxUtils";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Breakup Recovery", href: "/breakup-recovery" },
  { label: "Communication Coaching", href: "/communication-coaching" },
  { label: "Relationship Reset", href: "/relationship-reset" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];


const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/paaji.connect",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@paajiconnect",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919773817031",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const recentPosts = getAllPosts().slice(0, 8);

  return (
    <footer
      className="bg-[#0B2E2F] text-white"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundImage: "radial-gradient(ellipse at 10% 100%, rgba(42,157,143,0.1) 0%, transparent 60%), radial-gradient(ellipse at 90% 0%, rgba(244,162,97,0.07) 0%, transparent 50%)",
      }}
    >
      <div className="container-premium py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">

          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Paaji Connect" width={36} height={36} className="rounded-full object-cover" />
              <span className="text-sm font-bold tracking-[0.14em] text-white">PAAJI CONNECT</span>
            </div>
            <p className="text-sm text-white/72 leading-relaxed">
              Premium relationship consulting focused on emotional intelligence,
              communication structure, and measurable growth.
            </p>
            <Link
              href="/contact"
              className="premium-button mt-5 bg-[#F4A261] text-[#0B2E2F] hover:bg-[#f7b57b] text-sm inline-flex"
            >
              Book Consultation
            </Link>

            {/* Social links */}
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white/65 transition-all duration-200 hover:border-[#F4A261]/40 hover:bg-[#F4A261]/15 hover:text-[#F4A261]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4A261] mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/72 transition-colors duration-200 hover:text-[#F4A261] hover:translate-x-1 inline-flex items-center gap-1"
                  style={{ transition: "color 0.2s ease, transform 0.2s ease" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4A261] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:darshan.ntg@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/72 hover:text-[#F4A261] transition-colors duration-200"
              >
                <svg className="h-4 w-4 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                darshan.ntg@gmail.com
              </a>
              <a
                href="tel:+919773817031"
                className="flex items-center gap-2.5 text-sm text-white/72 hover:text-[#F4A261] transition-colors duration-200"
              >
                <svg className="h-4 w-4 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 97738 17031
              </a>
              <a
                href="https://www.techwithpaaji.in"
                className="flex items-center gap-2.5 text-sm text-white/72 hover:text-[#F4A261] transition-colors duration-200"
              >
                <svg className="h-4 w-4 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                techwithpaaji.in
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4A261] mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/72 transition-colors duration-200 hover:text-[#F4A261]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm text-white/72 transition-colors duration-200 hover:text-[#F4A261]"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
          {/* Recent Articles — SEO internal linking for Googlebot */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4A261] mb-4">
              Recent Articles
            </p>
            <div className="flex flex-col gap-2">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-xs text-white/60 transition-colors duration-200 hover:text-[#F4A261] leading-snug"
                >
                  {post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title}
                </Link>
              ))}
              <Link href="/blog" className="mt-1 text-xs font-semibold text-[#2A9D8F] hover:text-[#F4A261] transition-colors">
                View all articles →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center gap-2 border-t border-white/8 pt-6 text-center sm:flex-row sm:justify-between"
        >
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Paaji Connect. Made with ❤️ in India. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Relationship Coaching · Breakup Recovery · Communication Coaching · India
          </p>
        </div>
      </div>
    </footer>
  );
}
