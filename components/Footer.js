import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="bg-[#0B2E2F] text-white">
      <div className="container-premium grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#F4A261]">
            About
          </p>
          <p className="mt-4 text-sm text-white/82">
            Paaji Connect is a premium relationship consulting studio focused
            on emotional intelligence, communication structure, and measurable
            growth for modern couples.
          </p>
          <Link
            href="/contact"
            className="premium-button mt-5 bg-[#F4A261] text-[#0B2E2F] hover:bg-[#f7b57b]"
          >
            Book Consultation
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#F4A261]">
            Quick Links
          </p>
          <div className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-white/82 transition-colors duration-200 hover:text-[#F4A261]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#F4A261]">
            Contact Info
          </p>
          <p className="mt-4 text-sm text-white/82">darshan.ntg@gmail.com</p>
          <p className="mt-2 text-sm text-white/82">+91 97738 17031</p>
          <p className="mt-2 text-sm text-white/82">techwithpaaji.in</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#F4A261]">
            Legal
          </p>
          <Link
            href="/contact"
            className="mt-4 block text-sm text-white/82 transition-colors duration-200 hover:text-[#F4A261]"
          >
            Privacy Policy Request
          </Link>
          <Link
            href="/contact"
            className="mt-2 block text-sm text-white/82 transition-colors duration-200 hover:text-[#F4A261]"
          >
            Terms and Conditions Request
          </Link>
          <p className="mt-6 text-xs text-white/56">
            Copyright {new Date().getFullYear()} Paaji Connect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
