import "./globals.css";
import SideBar from "@/components/layout/SideBar";
import TokenInit from "@/components/TokenInit";

export const metadata = {
  metadataBase: new URL('https://mutoday.com'),
  title: "Mutoday - Spiritual Community",
  description: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์ A spiritual community for fortune telling, astrology, tarot, and spiritual content",
  openGraph: {
    title: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์",
    description: "Mutoday - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์ A spiritual community for fortune telling, astrology, tarot, and spiritual content",
    siteName: 'Mutoday',
    images: [
      {
        url: '/icons/logo01.svg',
        width: 122,
        height: 41,
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
