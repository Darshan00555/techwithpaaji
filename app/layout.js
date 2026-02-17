import Script from "next/script";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/seo";

const siteTitle = "Paaji Connect | Relationship Coach in India";
const siteDescription =
  "Paaji Connect is a relationship coaching platform in India for breakup recovery, communication coaching for couples, and trust rebuilding support.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | Paaji Connect",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "relationship coach in India",
    "breakup recovery coach India",
    "relationship consultant India",
    "communication coaching for couples",
    "relationship advice expert India",
    "online relationship coaching India",
    "Paaji Connect",
    "techwithpaaji.in"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Paaji Connect relationship coach in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [OG_IMAGE]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'icon', url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/logo.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  category: "relationship coaching"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [SITE_URL],
  areaServed: "India",
  knowsAbout: [
    "relationship coaching",
    "breakup recovery",
    "communication coaching for couples",
    "relationship conflict resolution"
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "darshan.ntg@gmail.com",
      telephone: "+91-97738-17031",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: siteDescription,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?query={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4E8BPW9F4S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4E8BPW9F4S');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
