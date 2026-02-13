import { getCanonicalUrl } from '@/config/seo'

/** หน้าสถิตที่แน่นอน – ใส่ใน sitemap */
const STATIC_PATHS = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: 'club', changeFrequency: 'daily', priority: 0.9 },
  { path: 'fortune', changeFrequency: 'daily', priority: 0.9 },
  { path: 'about', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: 'qr', changeFrequency: 'monthly', priority: 0.4 },
]

export default function sitemap() {
  const base = getCanonicalUrl().replace(/\/$/, '')
  return STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${base}/${path}` : base,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
