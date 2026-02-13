import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import TokenInit from "@/components/TokenInit";
import {
  DEFAULT_META,
  DEFAULT_CANONICAL_BASE,
  getCanonicalUrl,
} from "@/config/seo";
import { WebSiteSchema, WebApplicationSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { AnalyticsAndVerification } from "@/components/seo/AnalyticsAndVerification";

const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE || "/cover.jpg";
const baseUrl = process.env.NEXT_PUBLIC_SHARE_URL || DEFAULT_CANONICAL_BASE;

const verification = {};
if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
}

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: DEFAULT_META.title,
  description: DEFAULT_META.description,
  keywords: DEFAULT_META.keywords,
  authors: [{ name: "Mutoday", url: baseUrl }],
  creator: "Mutoday",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: getCanonicalUrl(),
  },
  openGraph: {
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    siteName: DEFAULT_META.openGraph.siteName,
    locale: DEFAULT_META.openGraph.locale,
    type: DEFAULT_META.openGraph.type,
    url: getCanonicalUrl(),
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Mutoday - มูทูเดย์ คลับสายมู โหราศาสตร์ ดวง ทำนาย",
      },
    ],
  },
  twitter: {
    card: DEFAULT_META.twitter.card,
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    images: [ogImageUrl],
  },
  verification: Object.keys(verification).length ? verification : undefined,
  other: {
    "dns-prefetch": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link
          rel="preconnect"
          href="https://pub-84690884fe94462e83399faa03011cbe.r2.dev"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://pub-84690884fe94462e83399faa03011cbe.r2.dev"
        />
      </head>
      <body className="antialiased">
        <WebSiteSchema />
        <WebApplicationSchema />
        <OrganizationSchema />
        <AnalyticsAndVerification />
        <TokenInit>
          <SideBar />
          <main className="pt-14 md:pt-0 md:ml-16 lg:ml-64">
            {children}
          </main>
        </TokenInit>
      </body>
    </html>
  );
}
