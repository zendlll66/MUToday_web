import "./globals.css";

export const metadata = {
  title: "Mutoday - Spiritual Community",
  description: "Mutoday - A spiritual community for fortune telling, astrology, tarot, and spiritual content",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
