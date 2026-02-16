import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

const services = [
  {
    id: "breakup-recovery-coaching",
    title: "Breakup Recovery Coaching",
    ctaLabel: "Start Breakup Recovery",
    ctaHref: "/breakup-recovery",
    paragraphs: [
      "Breakup Recovery Coaching is designed for people who feel emotionally stuck after a breakup and need more than generic motivation. A breakup can disrupt sleep, concentration, appetite, social confidence, and even professional performance. Many clients come to us after trying self-help videos and random advice from friends, but they still feel caught in repetitive thoughts, emotional swings, and the urge to check on their ex constantly. Our process gives you structured breakup recovery help with a clear plan, not just emotional reassurance. You learn how to regulate your nervous system, stop emotional overreactions, and rebuild personal stability step by step.",
      "In the first stage, we map your breakup story with precision. We identify key triggers, emotional pain points, and cognitive loops that keep you attached to past outcomes. This includes fear of abandonment, over-idealization of the past, unresolved guilt, or confusion about what went wrong. Once your pattern is visible, recovery becomes practical. Instead of asking, \"Why am I like this?\" you begin to ask, \"What is the next behavior that improves my emotional state?\" That shift is critical. As a relationship consultant, we focus on your real-life daily system so you can recover without losing your self-respect or identity.",
      "In the second stage, we build your emotional recovery framework. You get routines for thought interruption, emotional grounding, social reconnection, and decision boundaries. If reconciliation is possible and healthy, we create a safe communication strategy so you do not look desperate, impulsive, or manipulative. If reconciliation is not the right path, we guide you through closure and personal reorientation. This balanced approach makes Paaji Connect a practical choice for people searching for a breakup recovery coach India who can handle both emotional intensity and strategic clarity.",
      "In the third stage, we support long-term relationship readiness. Breakup pain is not just about one person leaving; it often exposes deeper communication habits, attachment patterns, and boundary issues. We address these patterns so your next relationship is stronger and more secure. You can continue into our <internal>communication coaching</internal> track for relationship dialogue skills, or move into <internal>relationship reset</internal> if you and your partner are rebuilding together. If you are ready for structured support from a trusted <internal>relationship coach in India</internal>, this service is your starting point."
    ]
  },
  {
    id: "communication-mastery",
    title: "Communication Mastery",
    ctaLabel: "Improve Communication",
    ctaHref: "/communication-coaching",
    paragraphs: [
      "Communication Mastery is for couples who love each other but keep getting trapped in the same argument pattern. You may be having frequent misunderstandings, tone-related fights, or emotional shutdown after difficult conversations. Most couples do not fail because they have zero love. They fail because they do not have a repeatable communication structure when emotions rise. This service delivers communication coaching for couples with practical scripts, pacing methods, and emotional intelligence tools you can use in real-time situations. We do not teach abstract theory alone. We train implementation under stress.",
      "We begin with a communication audit. We review how conflict starts, how it escalates, and what happens after the argument. In many cases, both partners are trying to be heard but using language that triggers defensiveness. One person feels ignored, the other feels attacked, and both leave the conversation unheard. Our framework breaks that loop by introducing conversational sequencing: intention, observation, impact, request, and closure. Once this sequence becomes your default, your conversations stop feeling random. This is why couples searching for a couples therapy alternative India often choose structured coaching with clear behavioral tools.",
      "The next layer is emotional intelligence in relationships. Communication problems are rarely just language problems; they are emotional regulation problems. If your body is activated, your words become reactive. We teach both partners to recognize escalation cues early, pause before damage, and return with a respectful tone. You learn how to challenge assumptions without blaming and how to discuss sensitive topics without turning them into character attacks. Over time, this creates emotional safety in relationship dynamics and allows hard conversations to produce clarity instead of fear.",
      "The final layer is weekly reinforcement. Skills do not stick through one good conversation. They become permanent through repetition and review. You receive weekly communication checkpoints, conflict debrief formats, and accountability targets so progress is visible. Couples who stay consistent report less fighting, faster repair, and stronger trust in each other’s intent. If you want support from a proven <internal>relationship consultant</internal> who specializes in <internal>communication coaching</internal>, this program can change the quality of your relationship within weeks. You can also combine it with <internal>relationship reset</internal> for deeper trust rebuilding when needed."
    ]
  },
  {
    id: "relationship-reset-program",
    title: "Relationship Reset Program",
    ctaLabel: "Reset Your Relationship",
    ctaHref: "/relationship-reset",
    paragraphs: [
      "The Relationship Reset Program is built for couples who are emotionally exhausted by repeating the same unresolved issues. You may have reached a point where every discussion quickly becomes an argument, old mistakes keep resurfacing, and both partners feel disconnected despite wanting the relationship to work. This program helps you pause the chaos and rebuild your relationship from a healthier structure. It is ideal for couples searching for relationship problems solution pathways that are practical, private, and culturally relevant for modern Indian relationships.",
      "Our reset process starts with diagnostic clarity. We map conflict triggers, communication barriers, unmet emotional needs, and hidden expectations that keep tension alive. Most couples are surprised to see how many problems come from unspoken assumptions rather than deliberate disrespect. Once those assumptions are made visible, both partners feel less defensive and more collaborative. The process shifts from blame to design. Instead of asking, \"Who is wrong?\" we ask, \"What system can prevent this pattern next time?\" This is the core philosophy behind our relationship mindset coaching approach.",
      "The second phase focuses on rebuilding trust and emotional safety. If trust has been damaged by repeated arguments, dishonesty, avoidance, or emotional neglect, recovery needs structure. We guide couples through transparent communication agreements, boundary restoration, and repair rituals that can be repeated after every rupture. This makes trust measurable, not imaginary. You track response quality, repair speed, and emotional connection consistency. Couples who commit to this process often discover that trust can return faster than expected when both people follow a clear framework.",
      "The final phase is integration into daily life. A relationship does not heal inside sessions alone; it heals in ordinary moments at home. We design weekly rituals for appreciation, planning, and intimacy so connection remains active even during stressful periods. You also learn conflict resolution methods that keep disagreements focused on solutions. If you are comparing options before you hire a <internal>relationship coach in India</internal>, this program offers a complete bridge between emotional healing and practical relationship strategy. It can be paired with <internal>private strategy sessions</internal> for high-touch support or with targeted <internal>breakup recovery help</internal> when a separation risk exists."
      ,
      "Another major strength of this service is cultural and contextual relevance. Many couples in India balance career pressure, extended-family expectations, financial stress, and emotional fatigue at the same time. Generic advice does not account for this complexity. Our relationship growth strategy helps both partners align decisions around family boundaries, communication etiquette, conflict timing, and emotional priorities without losing mutual respect. If you are serious about long-term improvement and not temporary patchwork, this reset pathway gives you a realistic, sustainable roadmap."
    ]
  },
  {
    id: "private-1-1-strategy-sessions",
    title: "Private 1:1 Strategy Sessions",
    ctaLabel: "Book Private Session",
    ctaHref: "/contact",
    paragraphs: [
      "Private 1:1 Strategy Sessions are for clients who want confidential, deeply personalized support and fast decision clarity. This format is ideal for founders, professionals, high-responsibility individuals, and couples who cannot afford emotional instability to affect their personal or professional life. In standard coaching formats, advice is often broad and not adapted to your exact context. In our private track, every session is built around your real case, current priorities, and immediate decisions. That is why many clients choose this format when they need a reliable relationship advice expert India with strategic depth.",
      "Each private engagement begins with a strategic intake where we map your relationship history, present challenges, and desired outcomes. We then prioritize the highest-leverage interventions first. Depending on your situation, this may include conflict de-escalation, trust rebuilding, reconnection planning, reconciliation safety protocols, or communication redesign. Every recommendation is actionable and time-bound. You know exactly what to implement between sessions, what to track, and what to adjust. This clarity reduces emotional confusion and prevents overthinking loops that often delay progress.",
      "A major advantage of private sessions is adaptive support. Relationship dynamics change quickly, especially during high-stress phases like separation talks, family pressure, career transitions, or parenting conflicts. Our process allows strategic updates in real time, so your approach remains relevant. You are not forced into a rigid script that ignores reality. This flexibility is valuable for people looking for private relationship coaching sessions India with both emotional intelligence and tactical precision.",
      "If your goal is to book relationship consultation online with a team that treats your case as unique, this is the right path. You can use private sessions as a standalone service or combine them with our <internal>communication coaching</internal>, <internal>relationship reset</internal>, and <internal>breakup recovery help</internal> pathways. Many clients start here when they need immediate guidance, then transition into a longer program for sustained transformation. To discuss fit, timeline, and structure, connect with a dedicated <internal>relationship consultant</internal> through our consultation page today.",
      "Private sessions are also ideal when privacy is critical. Some clients cannot discuss sensitive relationship details openly with friends or family due social pressure, public visibility, or professional reputation concerns. This format gives you a confidential space to think clearly, communicate ethically, and act with maturity. Whether you are navigating a marriage crisis, post-breakup confusion, or high-conflict communication, these sessions help you move from emotional chaos to strategic clarity while preserving dignity for everyone involved."
    ]
  }
];

function renderParagraph(paragraph) {
  const parts = paragraph.split(/(<internal>.*?<\/internal>)/g);

  return parts.map((part, index) => {
    const match = part.match(/^<internal>(.*?)<\/internal>$/);
    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    const label = match[1];

    const linkMap = {
      "relationship coach in India": "/",
      "breakup recovery help": "/breakup-recovery",
      "communication coaching": "/communication-coaching",
      "relationship consultant": "/contact",
      "relationship reset": "/relationship-reset",
      "private strategy sessions": "/contact"
    };

    return (
      <Link
        key={`${label}-${index}`}
        href={linkMap[label] || "/services"}
        className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 transition-colors duration-200 hover:text-[#2A9D8F]"
      >
        {label}
      </Link>
    );
  });
}

export const metadata = {
  title: "Relationship Coaching Services in India",
  description:
    "Explore Paaji Connect relationship coaching services India: breakup recovery coaching, communication coaching for couples, relationship reset, and private 1:1 strategy sessions.",
  keywords: [
    "relationship coaching services India",
    "hire relationship coach India",
    "book relationship consultation online",
    "online relationship coaching India",
    "relationship consultant India",
    "1 on 1 relationship consultation India"
  ],
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Relationship Coaching Services in India | Paaji Connect",
    description:
      "Relationship coaching services India for breakup recovery, communication mastery, trust repair, and private strategy support.",
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Relationship coaching services India"
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Paaji Connect Services
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Relationship Coaching Services in India
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                We provide structured, private, and implementation-focused relationship coaching services India for couples and individuals who want clear emotional progress.
              </p>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium space-y-8">
              {services.map((service) => (
                <article key={service.id} className="glass-card p-7 sm:p-9" id={service.id}>
                  <h2 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">{service.title}</h2>
                  <div className="mt-5 space-y-4">
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base text-[#0E1E1E]/84">
                        {renderParagraph(paragraph)}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={service.ctaHref}
                    className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] shadow-[0_10px_24px_rgba(244,162,97,0.3)] hover:bg-[#f7b880]"
                  >
                    {service.ctaLabel}
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
