import { getCanonicalUrl } from '@/config/seo'

export async function generateMetadata({ params }) {
  const resolved = typeof params?.then === 'function' ? await params : params
  const raw = resolved?.hashtag ?? ''
  const decoded = raw ? decodeURIComponent(raw) : ''
  const tag = decoded.startsWith('#') ? decoded : `#${decoded}`
  const title = tag ? `${tag} | แฮชแท็กสายมู | Mutoday` : 'แฮชแท็ก | Mutoday'
  const description = tag
    ? `ดูโพสต์และเนื้อหาสายมูที่เกี่ยวข้องกับ ${tag} ในชุมชน Mutoday - โหราศาสตร์ ดวง ทำนาย ความเชื่อ`
    : 'ดูโพสต์ตามแฮชแท็กในชุมชน Mutoday'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: getCanonicalUrl(`hashtag/${encodeURIComponent(decoded)}`),
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default function HashtagLayout({ children }) {
  return <>{children}</>
}
