import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import PricingFAQ from "./PricingFAQ";
import { SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Pricing | Paaji Connect",
  description:
    "Explore Paaji Connect relationship consultation plans, including Silver, Gold, Diamond and Premium membership options with calls, on-site meetings and WhatsApp support.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Paaji Connect",
    description:
      "Explore Paaji Connect relationship consultation plans, including Silver, Gold, Diamond and Premium membership options with calls, on-site meetings and WhatsApp support.",
    url: `${SITE_URL}/pricing`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "What happens after my first month?",
    answer:
      "Your membership continues at the regular price of the selected plan unless otherwise stated in the applicable terms.",
  },
  {
    question: "Can I use my calls anytime during the month?",
    answer:
      "Calls should be scheduled according to available consultation slots and the applicable membership terms.",
  },
  {
    question: "What if I finish all my calls before the month ends?",
    answer:
      "If all included calls and on-site meetings are used before the membership period ends, you may renew the same plan at its regular monthly price.",
  },
  {
    question: "Are on-site meeting travel expenses included?",
    answer:
      "No. Travel, transportation, accommodation, parking, and other location-related expenses are handled by the client.",
  },
  {
    question: "Do you guarantee relationship success?",
    answer:
      "No. Paaji Connect does not guarantee reconciliation, marriage, relationship success, or any specific relationship outcome.",
  },
  {
    question: "Can I upgrade my plan?",
    answer:
      "Yes, you can choose a new plan according to the applicable terms.",
  },
  {
    question: "Is WhatsApp support unlimited?",
    answer:
      "Only the Diamond and Premium Membership plans include unlimited WhatsApp support. Silver and Gold include WhatsApp support according to the applicable plan terms.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  return (
    <PageTransition>
      <Navbar />
      <main className="page-shell">
        <div className="ambient-light" />
        
        {/* Animated Background Orbs for Visual Flair */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] overflow-hidden -z-10 pointer-events-none opacity-60">
          <div className="absolute top-[-100px] left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(244,162,97,0.15)_0%,transparent_70%)] animate-[orb-drift-1_14s_ease-in-out_infinite]" />
          <div className="absolute top-[50px] right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(42,157,143,0.12)_0%,transparent_70%)] animate-[orb-drift-2_18s_ease-in-out_infinite]" />
        </div>

        {/* Hero Section */}
        <section className="section-pad-first">
          <div className="container-premium text-center">
            <h1 className="text-4xl font-semibold text-[#0F3D3E] sm:text-6xl md:text-7xl">
              Choose the Support That Fits You
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-[#0F3D3E]/80 sm:text-xl">
              Flexible relationship guidance designed around your needs, with clear pricing and no unrealistic promises.
            </p>
            <p className="mt-4 inline-block rounded-full bg-[#2A9D8F]/10 px-4 py-1.5 text-sm font-semibold text-[#2A9D8F] border border-[#2A9D8F]/20">
              Start with your first month at a special introductory price.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="pb-16 sm:pb-24">
          <div className="container-premium">
            <div className="grid gap-8 lg:grid-cols-3 items-start">
              
              {/* Silver Plan */}
              <div className="glass-card flex flex-col p-8 sm:p-10 h-full relative">
                <h2 className="text-2xl font-bold text-[#0F3D3E]">Silver</h2>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl text-gray-400 line-through">₹99</span>
                  <span className="text-4xl font-bold text-[#2A9D8F]">₹9</span>
                </div>
                <p className="mt-1 text-sm text-[#0F3D3E]/70 font-medium">for your first month</p>
                <div className="mt-6 flex-1">
                  <ul className="space-y-4 text-sm sm:text-base text-[#0E1E1E]/80">
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      5 consultation calls
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      1 on-site meeting
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      WhatsApp chat support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Relationship guidance and consultation
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Flexible support during your membership period
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 premium-button bg-[#2A9D8F] hover:bg-[#218074] w-full border border-transparent shadow-[0_4px_14px_rgba(42,157,143,0.3)]" style={{ color: '#ffffff' }}>
                  Choose Silver
                </Link>
              </div>

              {/* Gold Plan (Most Popular) */}
              <div className="glass-card flex flex-col p-8 sm:p-10 h-full relative border-[#2A9D8F]/50 shadow-[0_8px_30px_rgba(42,157,143,0.15)] transform lg:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4A261] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F3D3E] shadow-md whitespace-nowrap">
                  Most Popular
                </div>
                <h2 className="text-2xl font-bold text-[#0F3D3E]">Gold</h2>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl text-gray-400 line-through">₹299</span>
                  <span className="text-4xl font-bold text-[#2A9D8F]">₹19</span>
                </div>
                <p className="mt-1 text-sm text-[#0F3D3E]/70 font-medium">for your first month</p>
                <div className="mt-6 flex-1">
                  <ul className="space-y-4 text-sm sm:text-base text-[#0E1E1E]/80">
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      10 consultation calls
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      2 on-site meetings
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      WhatsApp support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Relationship guidance and consultation
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Priority support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Flexible support during your membership period
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 premium-button bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880] w-full border border-transparent shadow-[0_4px_14px_rgba(244,162,97,0.4)]">
                  Choose Gold
                </Link>
              </div>

              {/* Diamond Plan */}
              <div className="glass-card flex flex-col p-8 sm:p-10 h-full relative">
                <h2 className="text-2xl font-bold text-[#0F3D3E]">Diamond</h2>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xl text-gray-400 line-through">₹599</span>
                  <span className="text-4xl font-bold text-[#2A9D8F]">₹29</span>
                </div>
                <p className="mt-1 text-sm text-[#0F3D3E]/70 font-medium">for your first month</p>
                <div className="mt-6 flex-1">
                  <ul className="space-y-4 text-sm sm:text-base text-[#0E1E1E]/80">
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      20 consultation calls
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      5 on-site meetings
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Unlimited WhatsApp support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Relationship guidance and consultation
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Priority support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Flexible support during your membership period
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 premium-button bg-[#2A9D8F] hover:bg-[#218074] w-full border border-transparent shadow-[0_4px_14px_rgba(42,157,143,0.3)]" style={{ color: '#ffffff' }}>
                  Choose Diamond
                </Link>
              </div>

            </div>
            
            {/* Offer Text */}
            <p className="mt-8 text-center text-sm text-[#0F3D3E]/60 max-w-2xl mx-auto">
              After the introductory first month, the applicable regular monthly price will be charged.
            </p>
          </div>
        </section>

        {/* Premium Membership Section */}
        <section className="py-16 sm:py-24 bg-[#0B2E2F] text-white">
          <div className="container-premium text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl">Want More? Go Premium.</h2>
            <div className="mt-12 max-w-3xl mx-auto rounded-3xl border border-[#F4A261]/30 bg-gradient-to-br from-[#134e4a] to-[#0B2E2F] p-8 sm:p-12 text-left relative overflow-hidden shadow-[0_0_50px_rgba(244,162,97,0.15)]">
              <div className="absolute top-0 right-0 p-8 opacity-20 hidden sm:block animate-[floatSlow_8s_ease-in-out_infinite]">
                <svg className="w-40 h-40 text-[#F4A261] drop-shadow-[0_0_15px_rgba(244,162,97,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-[#F4A261]">Premium Membership</h3>
                  <div className="mt-2 text-4xl font-bold text-white">₹999 <span className="text-xl text-white/60 font-medium">/ month</span></div>
                  <ul className="mt-8 space-y-4 text-base text-white/90">
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      30 consultation calls
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      15 on-site meetings
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Unlimited WhatsApp support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Premium relationship guidance
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Priority consultation support
                    </li>
                    <li className="flex gap-3">
                      <svg className="h-6 w-6 shrink-0 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      Dedicated premium experience
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-auto self-end md:self-center">
                  <Link href="/contact" className="premium-button bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880] w-full md:w-auto md:px-10 md:py-4 shadow-[0_4px_20px_rgba(244,162,97,0.3)]">
                    Choose Premium
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-pad divider-line">
          <div className="container-premium">
            <h2 className="text-3xl font-semibold text-[#0F3D3E] text-center mb-10 sm:text-4xl">
              Compare Plans
            </h2>
            <div className="overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[600px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#0F3D3E] text-white">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold border-l border-white/10">Silver</th>
                    <th className="p-4 text-center font-semibold border-l border-white/10 text-[#F4A261]">Gold</th>
                    <th className="p-4 text-center font-semibold border-l border-white/10">Diamond</th>
                  </tr>
                </thead>
                <tbody className="text-[#0E1E1E]">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Consultation Calls</td>
                    <td className="p-4 text-center border-l border-gray-100">5</td>
                    <td className="p-4 text-center border-l border-gray-100 font-semibold bg-[#2A9D8F]/5">10</td>
                    <td className="p-4 text-center border-l border-gray-100">20</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">On-Site Meetings</td>
                    <td className="p-4 text-center border-l border-gray-100">1</td>
                    <td className="p-4 text-center border-l border-gray-100 font-semibold bg-[#2A9D8F]/5">2</td>
                    <td className="p-4 text-center border-l border-gray-100">5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">WhatsApp Support</td>
                    <td className="p-4 text-center border-l border-gray-100"><span className="text-[#2A9D8F] font-bold">✓</span></td>
                    <td className="p-4 text-center border-l border-gray-100 font-semibold bg-[#2A9D8F]/5"><span className="text-[#2A9D8F] font-bold">✓</span></td>
                    <td className="p-4 text-center border-l border-gray-100 font-semibold">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Priority Support</td>
                    <td className="p-4 text-center border-l border-gray-100 text-gray-400">—</td>
                    <td className="p-4 text-center border-l border-gray-100 font-semibold bg-[#2A9D8F]/5"><span className="text-[#2A9D8F] font-bold">✓</span></td>
                    <td className="p-4 text-center border-l border-gray-100"><span className="text-[#2A9D8F] font-bold">✓</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-[#0B2E2F] text-white rounded-2xl p-6 sm:flex items-center justify-between shadow-md">
              <h4 className="font-bold text-lg mb-4 sm:mb-0 text-[#F4A261]">Premium Membership</h4>
              <div className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base opacity-90">
                <span className="flex items-center gap-2">✓ 30 Calls</span>
                <span className="flex items-center gap-2">✓ 15 Meetings</span>
                <span className="flex items-center gap-2">✓ Unlimited WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Section */}
        <section className="section-pad divider-line bg-white/40">
          <div className="container-premium max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-[#0F3D3E]">Finished Your Plan Early?</h3>
                <p className="mt-4 text-[#0E1E1E]/80 text-sm leading-relaxed">
                  If you use all your included calls and on-site meetings before your membership month ends, you may renew the same plan at its regular monthly price. Your new membership period will begin with the renewed plan.
                </p>
              </div>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-[#0F3D3E]">On-Site Meeting Policy</h3>
                <p className="mt-4 text-[#0E1E1E]/80 text-sm leading-relaxed">
                  On-site meetings are available as part of eligible plans. Any travel, transportation, accommodation, parking, or other location-related expenses required for an on-site meeting are the client&apos;s responsibility and are not included in the membership price.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <PricingFAQ />

        {/* Important Disclaimer */}
        <section className="section-pad divider-line bg-[#0B2E2F] text-white/90">
          <div className="container-premium max-w-4xl text-center">
            <h3 className="text-2xl font-bold text-[#F4A261]">Important Disclaimer</h3>
            <p className="mt-6 text-sm sm:text-base leading-relaxed opacity-90">
              Paaji Connect provides relationship guidance and consultation for informational and supportive purposes. Relationship outcomes depend on individual circumstances, communication, decisions, and many factors outside our control. We do not guarantee reconciliation, marriage, breakup prevention, relationship success, or any specific outcome. No service offered by Paaji Connect constitutes a 100% guarantee of a relationship result.
            </p>
            <p className="mt-4 text-xs sm:text-sm opacity-70">
              Pricing and membership benefits are subject to the applicable plan terms. Please review our <Link href="/terms-and-conditions" className="underline hover:text-white">Terms & Conditions</Link> and <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link> before purchasing.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </PageTransition>
  );
}
