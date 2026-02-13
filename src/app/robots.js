import { getCanonicalUrl } from '@/config/seo'

export default function robots() {
  const base = getCanonicalUrl().replace(/\/$/, '')
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
