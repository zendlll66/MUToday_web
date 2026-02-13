'use client'

/**
 * Google Analytics 4 – ทำงานเมื่อตั้ง NEXT_PUBLIC_GA_MEASUREMENT_ID เท่านั้น
 * Search Console ใช้ meta verification ใน layout (server)
 */
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function AnalyticsAndVerification() {
  if (!GA_ID) return null
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
