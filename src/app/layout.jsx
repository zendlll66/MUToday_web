import "./globals.css";
import SideBar from "@/components/layout/SideBar";

export const metadata = {
  title: "Mutoday - Spiritual Community",
  description: "Mutoday - A spiritual community for fortune telling, astrology, tarot, and spiritual content",
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
        <SideBar />
        <main className="pt-14 md:pt-0 md:ml-16 lg:ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}
