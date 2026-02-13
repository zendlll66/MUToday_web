/**
 * SEO config – คีย์เวิร์ด, default meta, canonical base
 * ใช้สำหรับ Keyword Mapping และ metadata ทั่วทั้งไซต์
 */

const SITE_NAME = 'Mutoday'
const DEFAULT_CANONICAL_BASE =
  typeof process !== 'undefined'
    ? process.env.NEXT_PUBLIC_SHARE_URL || 'https://mutoday.com'
    : 'https://mutoday.com'

/** คีย์เวิร์ดหลักสำหรับ SEO – ใช้ใน meta keywords และเนื้อหา */
export const SEO_KEYWORDS = [
  'Mutoday',
  'มูทูเดย์',
  'คลับสายมู',
  'ชุมชนสายมู',
  'โหราศาสตร์',
  'ดวง',
  'ทำนายดวง',
  'ดูดวง',
  'ทาโรต์',
  'tarot',
  'astrology',
  'fortune telling',
  'ฮวงจุ้ย',
  'ความเชื่อ',
  'spiritual community',
  'ดวงรายวัน',
  'horoscope',
  'wallpaper ดวง',
  'แอปดูดวง',
]

/** Default meta สำหรับทุกหน้า (fallback) */
export const DEFAULT_META = {
  title: `${SITE_NAME} - คลับสายมู ชุมชนโหราศาสตร์ ดวง ทำนาย ทาโรต์`,
  description:
    'Mutoday คลับสายมู ชุมชนโพสต์ทำนาย ดวง โหราศาสตร์ ทาโรต์ ฮวงจุ้ย และความเชื่อ แชร์โพสต์ ดูดวงรายวัน ดาวน์โหลดวอลเปเปอร์สายมู',
  keywords: SEO_KEYWORDS.join(', '),
  openGraph: {
    siteName: SITE_NAME,
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export function getCanonicalUrl(path = '') {
  const base = DEFAULT_CANONICAL_BASE.replace(/\/$/, '')
  const p = (path || '').replace(/^\//, '')
  return p ? `${base}/${p}` : base
}

export { SITE_NAME, DEFAULT_CANONICAL_BASE }
