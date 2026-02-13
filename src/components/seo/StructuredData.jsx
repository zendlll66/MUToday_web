/**
 * JSON-LD Structured Data สำหรับ SEO (WebSite, WebApplication)
 * ทำให้ SERP แสดง rich results ได้
 */
import { DEFAULT_CANONICAL_BASE, SITE_NAME } from '@/config/seo'

const defaultDescription =
  'Mutoday คลับสายมู ชุมชนโพสต์ทำนาย ดวง โหราศาสตร์ ทาโรต์ ฮวงจุ้ย และความเชื่อ'

export function WebSiteSchema() {
  const base = DEFAULT_CANONICAL_BASE.replace(/\/$/, '')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'มูทูเดย์',
    url: base,
    description: defaultDescription,
    inLanguage: ['th', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${base}/club?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebApplicationSchema() {
  const base = DEFAULT_CANONICAL_BASE.replace(/\/$/, '')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: SITE_NAME,
    url: base,
    description: defaultDescription,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'THB',
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const base = DEFAULT_CANONICAL_BASE.replace(/\/$/, '')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: base,
    logo: `${base}/icons/og-logo.jpg`,
    description: defaultDescription,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
