"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ShareBottomSheet from '@/components/ui/ShareBottomSheet'

const SideBar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false)

  const openShareSheet = () => {
    setIsShareSheetOpen(true)
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    {
      label: 'หน้าแรก',
      href: '/',
      icon: '/icons/home-05.svg'
    },
    {
      label: 'คลับสายมู',
      href: '/club',
      icon: '/icons/dashboard-circle-add.svg'
    },
    {
      label: 'ทํานาย',
      href: '/fortune',
      icon: '/icons/moon-02.svg'
    },
    {
      label: 'เกี่ยวกับมูทูเดย์',
      href: '/about',
      icon: '/icons/help-circle.svg'
    },
    {
      label: 'แชร์เว็บไซต์นี้',
      href: '/share',
      icon: '/icons/share-04.svg',
      isShare: true
    }
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
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60"
                  />
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
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-60'}`}
                />
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
              src="/icons/logo01.svg"
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
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60"
                  />
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
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-60'}`}
                />
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
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 opacity-60"
                  />
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
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`w-5 h-5 ${isActive ? 'opacity-100' : 'opacity-60'}`}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="px-6 pb-4"> 
          <button className="w-full bg-mu-text cursor-pointer text-white py-3 rounded-[50px] text-sm font-medium">ดาวน์โหลดแอป</button>
        </div>
      </aside>

      <ShareBottomSheet isOpen={isShareSheetOpen} onClose={() => setIsShareSheetOpen(false)} />
    </>
  )
}

export default SideBar
