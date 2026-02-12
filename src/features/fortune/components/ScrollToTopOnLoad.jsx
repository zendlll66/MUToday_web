'use client'

import { useLayoutEffect } from 'react'

/**
 * ป้องกัน browser scroll restoration ตอนรีเฟรช
 * และเลื่อนไปด้านบนเมื่อเข้าหน้า fortune
 */
export const ScrollToTopOnLoad = () => {
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])
  return null
}
