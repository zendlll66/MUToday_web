import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import TokenInit from "@/components/TokenInit";

// รูปแชร์ต้องเป็น PNG/JPEG/WebP — โซเชียลไม่ใช้ SVG (จึงไม่ใช้ logo01.svg)
const ogImageUrl = process.env.NEXT_PUBLIC_OG_IMAGE || '/icons/og-logo.png'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SHARE_URL || 'https://mu-today-web.vercel.app'),
  title: "Mutoday - Spiritual Community",
  description: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์ A spiritual community for fortune telling, astrology, tarot, and spiritual content",
  openGraph: {
    title: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์",
    description: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์ A spiritual community for fortune telling, astrology, tarot, and spiritual content",
    siteName: 'Mutoday',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Mutoday Logo',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์",
    description: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์",
    images: [ogImageUrl],
  },
  other: {
    'dns-prefetch': 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev',
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://pub-84690884fe94462e83399faa03011cbe.r2.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-84690884fe94462e83399faa03011cbe.r2.dev" />
      </head>
      <body className="antialiased">
        {/* <script
          dangerouslySetInnerHTML={{
            __html: "typeof window !== 'undefined' && (window.history.scrollRestoration = 'manual');",
          }}
        /> */}
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
