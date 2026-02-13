"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import { X, Share2 } from 'lucide-react'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const sheetVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: { type: 'spring', damping: 30, stiffness: 400 },
  },
  exit: {
    y: '100%',
    transition: { type: 'spring', damping: 30, stiffness: 400 },
  },
}

const DEFAULT_SHARE_URL = process.env.NEXT_PUBLIC_SHARE_URL || 'https://mu-today-web.vercel.app'
const DEFAULT_SHARE_TEXT = process.env.NEXT_PUBLIC_SHARE_TEXT || 'คลับสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย และความเชื่อ'
const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID || '87741124305'

const getShareUrl = () => (typeof window !== 'undefined' ? window.location.href : DEFAULT_SHARE_URL)

const isMobile = () =>
  typeof navigator !== 'undefined' &&
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const shareOptions = [
  {
    id: 'line',
    label: 'LINE',
    icon: '/social_icon/line.svg',
    getUrl: () => `https://line.me/R/msg/text/?${encodeURIComponent(DEFAULT_SHARE_TEXT + '\n' + getShareUrl())}`,
    getAppUrl: () => `line://msg/text/${encodeURIComponent(DEFAULT_SHARE_TEXT + '\n' + getShareUrl())}`,
  },
  {
    id: 'messenger',
    label: 'Messenger',
    icon: '/social_icon/message.svg',
    getUrl: () =>
      `https://www.facebook.com/dialog/send?app_id=${FB_APP_ID}&link=${encodeURIComponent(DEFAULT_SHARE_URL)}&redirect_uri=${encodeURIComponent(DEFAULT_SHARE_URL)}`,
    getAppUrl: () => `fb-messenger://share?link=${encodeURIComponent(DEFAULT_SHARE_URL)}`,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: '/social_icon/facebook.svg',
    getUrl: () =>
      `https://www.facebook.com/share_channel/?type=reshare&link=${encodeURIComponent(DEFAULT_SHARE_URL)}&app_id=${FB_APP_ID}&source_surface=external_reshare&display=popup&hashtag#`,
    getAppUrl: () => `fb://facewebmodal/f?href=${encodeURIComponent('https://www.facebook.com/share_channel/?type=reshare&link=' + DEFAULT_SHARE_URL + '&app_id=' + FB_APP_ID)}`,
  },
  // {
  //   id: 'instagram',
  //   label: 'Instagram',
  //   icon: '/social_icon/instagram.svg',
  //   action: 'copyAndOpen',
  //   copyAndOpenUrl: 'https://www.instagram.com/',
  //   copyAndOpenAppUrl: 'instagram://app',
  // },
  // {
  //   id: 'whatsapp',
  //   label: 'WhatsApp',
  //   icon: '/social_icon/weChat.svg',
  //   getUrl: () => `https://api.whatsapp.com/send?text=${encodeURIComponent(DEFAULT_SHARE_TEXT + ' ' + getShareUrl())}`,
  //   getAppUrl: () => `whatsapp://send?text=${encodeURIComponent(DEFAULT_SHARE_TEXT + ' ' + getShareUrl())}`,
  // },
  // {
  //   id: 'tiktok',
  //   label: 'TikTok',
  //   icon: '/social_icon/tiktok.svg',
  //   action: 'copyAndOpen',
  //   copyAndOpenUrl: 'https://www.tiktok.com/',
  //   copyAndOpenAppUrl: 'tiktok://',
  // },
]

const ShareBottomSheet = ({ isOpen, onClose }) => {
  const dragControls = useDragControls()
  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: DEFAULT_SHARE_TEXT,
        text: DEFAULT_SHARE_TEXT,
        url: getShareUrl(),
      })
      onClose()
    } catch (err) {
      if (err?.name !== 'AbortError') {
        console.error('Native share failed:', err)
      }
    }
  }

  const handleShare = async (option) => {
    const mobile = isMobile()

    if (option.action === 'copyAndOpen') {
      try {
        await navigator.clipboard.writeText(getShareUrl())
        if (mobile && option.copyAndOpenAppUrl) {
          window.location.href = option.copyAndOpenAppUrl
        } else {
          window.open(option.copyAndOpenUrl, '_blank', 'noopener,noreferrer')
        }
        onClose()
      } catch (err) {
        console.error('Copy failed:', err)
      }
      return
    }

    const url = mobile && option.getAppUrl ? option.getAppUrl() : option.getUrl()
    if (mobile && option.getAppUrl) {
      window.location.href = url
    } else {
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="share-overlay"
            className="fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="share-sheet"
            className="fixed bottom-0 left-0 right-0 max-w-[700px] mx-auto z-50 bg-white rounded-t-2xl shadow-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-sheet-title"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            whileDrag={{ cursor: 'grabbing' }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 80 || info.velocity.y > 500) {
                onClose()
              }
            }}
          >
            <div className="p-4 pb-8">
              {/* Handle - Drag area */}
              <div
                className="flex justify-center py-3 -mt-1 cursor-grab active:cursor-grabbing touch-none"
                onPointerDown={(e) => dragControls.start(e)}
              >
                <div className="w-12 h-1 bg-gray-200 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6 px-2">
            <h2 id="share-sheet-title" className="text-lg font-semibold text-black">
              แชร์ไปยัง
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="ปิด"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Divider - full width */}
          <div className="h-px bg-gray-200 -mx-4 w-[calc(100%+2rem)] mb-6" />

          {/* Share Options - Single Row */}
          <div className="flex flex-nowrap gap-6 overflow-x-auto px-2 pb-2 scrollbar-hide">
            {canNativeShare && (
              <button
                type="button"
                onClick={handleNativeShare}
                className="flex flex-col items-center gap-2 py-2 shrink-0 min-w-[72px] hover:opacity-80 transition-opacity active:scale-95"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden bg-gray-50 p-2">
                  <Share2 className="w-8 h-8 text-gray-600" />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">
                  แชร์ผ่านแอป
                </span>
              </button>
            )}
            {shareOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleShare(option)}
                className="flex flex-col items-center gap-2 py-2 shrink-0 min-w-[72px] hover:opacity-80 transition-opacity active:scale-95"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden bg-gray-50 p-2">
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ShareBottomSheet
