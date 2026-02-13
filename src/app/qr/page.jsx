'use client'

import { useEffect } from 'react'

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sevensolutions.mutoday&pli=1'
const APP_STORE_URL = 'https://apps.apple.com/th/app/mutoday-astrology/id6475958471'
const WEB_URL = 'https://mutoday.com'

const QrPage = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window.opera ?? '')

    if (/android/i.test(userAgent)) {
      window.location.href = GOOGLE_PLAY_URL
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = APP_STORE_URL
    } else {
      window.location.href = WEB_URL
    }
  }, [])

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-sm text-gray-500">กำลังเปลี่ยนเส้นทาง...</p>
    </div>
  )
}

export default QrPage
