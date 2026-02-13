"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ShareBottomSheet from '@/components/ui/ShareBottomSheet'

/** ไอคอน nav: active = dark (filled), ไม่ active = light (outline) */
const NavIconHome = ({ active, className = 'w-5 h-5' }) => (
  <span className={className} aria-hidden>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.5 8.32329V16.2497C2.5 17.1702 3.24619 17.9163 4.16667 17.9163H15.8333C16.7538 17.9163 17.5 17.1702 17.5 16.2497V8.32329C17.5 7.80417 17.2581 7.3147 16.8457 6.99937L10.7477 2.33612C10.533 2.17195 10.2702 2.08301 10 2.08301C9.72975 2.08301 9.467 2.17195 9.25233 2.33612L3.15425 6.99937C2.74188 7.31471 2.5 7.80417 2.5 8.32329Z" fill="black" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 11C11.2844 11.7096 10.7096 12.2867 10 14C9.29042 12.2844 8.71332 11.7096 7 11C8.71557 10.2904 9.29042 9.71332 10 8C10.7096 9.71557 11.2867 10.2904 13 11Z" fill="black"/>
        <path d="M13 11C11.2844 11.7096 10.7096 12.2867 10 14C9.29042 12.2844 8.71332 11.7096 7 11C8.71557 10.2904 9.29042 9.71332 10 8C10.7096 9.71557 11.2867 10.2904 13 11Z" fill="white"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.5 8.32329V16.2497C2.5 17.1702 3.24619 17.9163 4.16667 17.9163H15.8333C16.7538 17.9163 17.5 17.1702 17.5 16.2497V8.32329C17.5 7.80417 17.2581 7.3147 16.8457 6.99937L10.7477 2.33612C10.533 2.17195 10.2702 2.08301 10 2.08301C9.72975 2.08301 9.467 2.17195 9.25233 2.33612L3.15425 6.99937C2.74188 7.31471 2.5 7.80417 2.5 8.32329Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 10.833C11.0704 11.4243 10.5913 11.9052 10 13.333C9.40868 11.9034 8.92777 11.4243 7.5 10.833C8.92964 10.2417 9.40868 9.76078 10 8.33301C10.5913 9.76265 11.0722 10.2417 12.5 10.833Z" fill="black"/>
        <path d="M12.5 10.833C11.0704 11.4243 10.5913 11.9052 10 13.333C9.40868 11.9034 8.92777 11.4243 7.5 10.833C8.92964 10.2417 9.40868 9.76078 10 8.33301C10.5913 9.76265 11.0722 10.2417 12.5 10.833Z" fill="black"/>
      </svg>
    )}
  </span>
)

const NavIconClub = ({ active, className = 'w-5 h-5' }) => (
  <span className={className} aria-hidden>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.0834 5.625C17.0834 3.89908 15.6843 2.5 13.9584 2.5C12.2325 2.5 10.8334 3.89908 10.8334 5.625C10.8334 7.35092 12.2325 8.75 13.9584 8.75C15.6843 8.75 17.0834 7.35092 17.0834 5.625Z" fill="black" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8334 8.33301L17.5 9.99967" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.33337 5C6.90373 5.59132 6.42469 6.07223 5.83337 7.5C5.24206 6.07036 4.76114 5.59132 3.33337 5C4.76301 4.40868 5.24206 3.92777 5.83337 2.5C6.42469 3.92964 6.9056 4.40868 8.33337 5Z" fill="black"/>
        <path d="M16.6666 14.167C15.237 14.7583 14.7579 15.2392 14.1666 16.667C13.5753 15.2374 13.0944 14.7583 11.6666 14.167C13.0963 13.5757 13.5753 13.0948 14.1666 11.667C14.7579 13.0966 15.2389 13.5757 16.6666 14.167Z" fill="black"/>
        <path d="M8.33337 14.167C6.90373 14.7583 6.42469 15.2392 5.83337 16.667C5.24206 15.2374 4.76114 14.7583 3.33337 14.167C4.76301 13.5757 5.24206 13.0948 5.83337 11.667C6.42469 13.0966 6.9056 13.5757 8.33337 14.167Z" fill="black"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.0834 5.625C17.0834 3.89908 15.6843 2.5 13.9584 2.5C12.2325 2.5 10.8334 3.89908 10.8334 5.625C10.8334 7.35092 12.2325 8.75 13.9584 8.75C15.6843 8.75 17.0834 7.35092 17.0834 5.625Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8334 8.33301L17.5 9.99967" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.33337 3.99966C6.90373 4.59136 6.42469 5.07258 5.83337 6.50127C5.24206 5.07071 4.76114 4.59136 3.33337 3.99966C4.76301 3.40796 5.24206 2.92674 5.83337 1.49805C6.42469 2.92861 6.9056 3.40796 8.33337 3.99966Z" fill="black"/>
        <path d="M16.6666 14.9997C15.237 15.5914 14.7579 16.0726 14.1666 17.5013C13.5753 16.0707 13.0944 15.5914 11.6666 14.9997C13.0963 14.408 13.5753 13.9267 14.1666 12.498C14.7579 13.9286 15.2389 14.408 16.6666 14.9997Z" fill="black"/>
        <path d="M8.33337 14.9997C6.90373 15.5914 6.42469 16.0726 5.83337 17.5013C5.24206 16.0707 4.76114 15.5914 3.33337 14.9997C4.76301 14.408 5.24206 13.9267 5.83337 12.498C6.42469 13.9286 6.9056 14.408 8.33337 14.9997Z" fill="black"/>
      </svg>
    )}
  </span>
)

const NavIconFortune = ({ active, className = 'w-5 h-5' }) => (
  <span className={className} aria-hidden>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.9167 11.7317C16.917 12.2654 15.7751 12.5681 14.5626 12.5681C10.6243 12.5681 7.43164 9.37542 7.43164 5.43705C7.43164 4.22456 7.73425 3.08274 8.26807 2.08301C4.72308 2.91382 2.08337 6.09562 2.08337 9.89392C2.08337 14.3246 5.67512 17.9163 10.1058 17.9163C13.9041 17.9163 17.0859 15.2767 17.9167 11.7317Z" fill="black" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6666 5.83301C15.237 6.42433 14.7579 6.90524 14.1666 8.33301C13.5753 6.90337 13.0944 6.42433 11.6666 5.83301C13.0963 5.24169 13.5753 4.76078 14.1666 3.33301C14.7579 4.76265 15.2389 5.24169 16.6666 5.83301Z" fill="black"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.9167 11.7317C16.917 12.2654 15.7751 12.5681 14.5626 12.5681C10.6243 12.5681 7.43164 9.37542 7.43164 5.43705C7.43164 4.22456 7.73425 3.08274 8.26807 2.08301C4.72308 2.91382 2.08337 6.09562 2.08337 9.89392C2.08337 14.3246 5.67512 17.9163 10.1058 17.9163C13.9041 17.9163 17.0859 15.2767 17.9167 11.7317Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6666 4.99966C15.237 5.59136 14.7579 6.07258 14.1666 7.50127C13.5753 6.07071 13.0944 5.59136 11.6666 4.99966C13.0963 4.40796 13.5753 3.92674 14.1666 2.49805C14.7579 3.92861 15.2389 4.40796 16.6666 4.99966Z" fill="black"/>
      </svg>
    )}
  </span>
)

const NavIconAbout = ({ active, className = 'w-5 h-5' }) => (
  <span className={className} aria-hidden>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99996 18.9587C14.9475 18.9587 18.9583 14.9479 18.9583 10.0003C18.9583 5.05278 14.9475 1.04199 9.99996 1.04199C5.05241 1.04199 1.04163 5.05278 1.04163 10.0003C1.04163 14.9479 5.05241 18.9587 9.99996 18.9587Z" fill="black"/>
        <path d="M9.16671 11.25C9.16671 10.6462 9.43504 10.158 9.73396 9.79817C10.0296 9.44233 10.3975 9.15975 10.7056 8.94858L10.8236 8.85742C11.0862 8.62742 11.25 8.291 11.25 7.91667C11.25 7.22632 10.6904 6.66667 10 6.66667C9.30971 6.66667 8.75004 7.22632 8.75004 7.91667C8.75004 8.37692 8.37696 8.75 7.91671 8.75C7.45647 8.75 7.08337 8.37692 7.08337 7.91667C7.08337 6.30583 8.38921 5 10 5C11.6109 5 12.9167 6.30583 12.9167 7.91667C12.9167 8.85458 12.4734 9.68892 11.788 10.2213L11.6472 10.3239C11.386 10.5029 11.1658 10.6828 11.0157 10.8634C10.8689 11.0403 10.8334 11.1635 10.8334 11.25C10.8334 11.7103 10.4603 12.0833 10 12.0833C9.53979 12.0833 9.16671 11.7103 9.16671 11.25Z" fill="white"/>
        <path d="M10.0074 13.333L10.0928 13.3371C10.513 13.3798 10.8407 13.7349 10.8407 14.1663C10.8407 14.5978 10.513 14.9529 10.0928 14.9956L10.0074 14.9997H10.0001C9.53983 14.9997 9.16675 14.6266 9.16675 14.1663C9.16675 13.7061 9.53983 13.333 10.0001 13.333H10.0074Z" fill="white"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.91663 7.91634C7.91663 6.76575 8.84938 5.83301 9.99996 5.83301C11.1505 5.83301 12.0833 6.76575 12.0833 7.91634C12.0833 8.63042 11.724 9.26059 11.1764 9.63601C10.6069 10.0263 9.99996 10.5593 9.99996 11.2497" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0001 14.167H10.0075" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </span>
)

const NavIconShare = ({ active, className = 'w-5 h-5' }) => (
  <span className={className} aria-hidden>
    {active ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2.5H14.1667C15.738 2.5 16.5237 2.5 17.0118 2.98816C17.5 3.47631 17.5 4.26198 17.5 5.83333V10C17.5 13.5355 17.5 15.3033 16.4017 16.4017C15.3033 17.5 13.5355 17.5 10 17.5C6.46447 17.5 4.6967 17.5 3.59835 16.4017C2.5 15.3033 2.5 13.5355 2.5 10C2.5 6.46447 2.5 4.6967 3.59835 3.59835C4.6967 2.5 6.46447 2.5 10 2.5Z" fill="black"/>
        <path d="M11.6666 2.5H15C16.1785 2.5 16.7677 2.5 17.1339 2.86612C17.5 3.23223 17.5 3.82149 17.5 5V8.33333M16.6666 3.33333L9.16663 10.8333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.33485 2.5C5.87955 2.52673 4.50923 2.68274 3.59875 3.59323C2.5 4.69198 2.5 6.4604 2.5 9.99717C2.5 13.5341 2.5 15.3025 3.59875 16.4012C4.6975 17.5 6.46592 17.5 10.0028 17.5C13.5396 17.5 15.308 17.5 16.4068 16.4012C17.3174 15.4906 17.4733 14.1198 17.5 11.6636" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.6666 2.5H15C16.1785 2.5 16.7677 2.5 17.1339 2.86612C17.5 3.23223 17.5 3.82149 17.5 5V8.33333M16.6666 3.33333L9.16663 10.8333" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )}
  </span>
)

const SideBar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false)

  const openShareSheet = () => {
    setIsShareSheetOpen(true)
    setIsMobileMenuOpen(false)
  }

  const APP_STORE_URL = 'https://apps.apple.com/th/app/mutoday-astrology/id6475958471'
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sevensolutions.mutoday&pli=1'
  const WEB_URL = 'https://mutoday.com'

  const handleDownloadApp = () => {
    if (typeof window === 'undefined') return
    const ua = navigator.userAgent || navigator.vendor || window.opera || ''
    if (/android/i.test(ua)) {
      window.location.href = PLAY_STORE_URL
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      window.location.href = APP_STORE_URL
    } else if (/Macintosh|Mac OS X/i.test(ua)) {
      window.location.href = WEB_URL
    } else {
      window.location.href = WEB_URL
    }
  }

  const menuItems = [
    { label: 'หน้าแรก', href: '/', Icon: NavIconHome },
    { label: 'คลับสายมู', href: '/club', Icon: NavIconClub },
    { label: 'ทํานาย', href: '/fortune', Icon: NavIconFortune },
    { label: 'เกี่ยวกับมูทูเดย์', href: '/about', Icon: NavIconAbout },
    { label: 'แชร์เว็บไซต์นี้', href: '/share', Icon: NavIconShare, isShare: true }
  ]

  return (
    <>
      {/* Tablet Sidebar - Icon Only */}
      <aside className="hidden md:flex lg:hidden fixed top-0 left-0 w-16 h-full bg-white border-r border-gray-200 z-40 overflow-y-auto flex-col items-center py-4">
        {/* Logo Section */}
        <Link href="/" className="mb-6">
          <Image
            src="/icons/logo02.svg"
            alt="MUToday"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Menu - Icon Only */}
        <nav className="flex flex-col items-center w-full">
          {menuItems.map((item) => {
            const isActive = !item.isShare && pathname === item.href
            if (item.isShare) {
              return (
                <button
                  key={item.href}
                  onClick={openShareSheet}
                  className="flex items-center justify-center w-12 h-12 rounded-lg mb-1 transition-colors text-gray-700 hover:bg-gray-50"
                  title={item.label}
                >
                  <item.Icon active={false} className="w-5 h-5 opacity-60" />
                </button>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center w-12 h-12 rounded-lg mb-1 transition-colors ${isActive
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
                title={item.label}
              >
                <item.Icon active={isActive} className="w-5 h-5" />
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Desktop Sidebar - Full */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 z-40 overflow-y-auto flex-col">
        {/* Logo Section */}
        <div className="p-6">
          <Link href="/" className="flex flex-col gap-1 items-start">
            <Image
              src="/icons/logo05.svg"
              alt="MUToday"
              width={122}
              height={41}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 pb-4">
          {menuItems.map((item) => {
            const isActive = !item.isShare && pathname === item.href
            if (item.isShare) {
              return (
                <button
                  key={item.href}
                  onClick={openShareSheet}
                  className="flex items-center gap-3 px-4 py-3 rounded-[50px] mb-1 transition-colors text-gray-700 hover:bg-gray-50 w-full text-left"
                >
                  <item.Icon active={false} className="w-5 h-5 opacity-60" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-[50px] mb-1 transition-colors ${isActive
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <item.Icon active={isActive} className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* QR Code Section */}
        <div className="px-4 py-6 mt-8">
          <p className="text-center text-sm text-gray-700 mb-4">สแกนเพื่อดาวน์โหลดแอป</p>
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-md  border-[0.5px] border-black/10">
              <div className="relative w-40 h-40">
                <Image
                  src="/icons/qr.svg"
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="w-full h-full"
                />
                {/* Logo in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/icons/logo02.svg"
                    alt="MUToday Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-6 pb-6 mt-auto flex items-start">
          <div className="text-start space-y-2">
            <Link
              href="/terms"
              className="block text-xs text-black hover:text-gray-600 transition-colors"
            >
              ข้อกำหนดการใช้งาน
            </Link>
            <Link
              href="/privacy"
              className="block text-xs text-black hover:text-gray-600 transition-colors"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
            <p className="text-[10px] text-gray-400 mt-4">© 2026 MUToday. All Rights Reserved</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-gray-200 z-30 flex items-center justify-between px-[12px]">
        <div className="flex items-center flex-row w-full">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-[30px] h-[30px] text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 30 30"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-[10px]">
            <Image
              src="/icons/logo02.svg"
              alt="MUToday"
              width={24}
              height={24}
              className="h-[30px] w-auto"
            />
            <p className="text-sm text-black size-[20px] leading-[20px] font-semibold ">MUToday</p>
          </Link>
        </div>

        {/* Share Button */}
        <button
          onClick={() => setIsShareSheetOpen(true)}
          className="p-2 -mr-2"
          aria-label="Share"
        >
          <Image src="/icons/share-04.svg" alt="Share" width={30} height={30} />
        </button>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-[calc(100%)] w-64 bg-white border-r border-gray-200 z-60 overflow-y-auto flex-col transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Logo Section */}
        <div className="px-6 py-5">
          <div className="flex items-start justify-between mb-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/icons/logo01.svg"
                alt="MUToday"
                width={122}
                height={41}
                className="h-[40px] w-auto"
              />
            </Link>
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 -mt-2 cursor-pointer"
              aria-label="Close menu"
            >
              <Image src="/icons/close.svg" alt="Close" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-6 pb-[50px]">
          {menuItems.map((item) => {
            const isActive = !item.isShare && pathname === item.href
            if (item.isShare) {
              return (
                <button
                  key={item.href}
                  onClick={openShareSheet}
                  className="flex items-center gap-3 px-4 py-3 rounded-[50px] mb-1 transition-colors text-gray-700 hover:bg-gray-50 w-full text-left"
                >
                  <item.Icon active={false} className="w-5 h-5 opacity-60" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-[50px] mb-1 transition-colors ${isActive
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <item.Icon active={isActive} className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-6 pb-4">
          <button
            type="button"
            onClick={handleDownloadApp}
            className="w-full bg-mu-text cursor-pointer text-white py-3 rounded-[50px] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            ดาวน์โหลดแอป
          </button>
        </div>
      </aside>

      <ShareBottomSheet isOpen={isShareSheetOpen} onClose={() => setIsShareSheetOpen(false)} />
    </>
  )
}

export default SideBar
