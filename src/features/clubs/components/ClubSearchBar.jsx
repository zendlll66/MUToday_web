"use client"

import React, { useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import SearchBar from '@/components/ui/SearchBar'
import useClubStore from '@/store/club.store'

const Q_PARAM = 'q'

const ClubSearchBar = (props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const setSearchKeyword = useClubStore((s) => s.setSearchKeyword)
  const qFromUrl = searchParams.get(Q_PARAM) ?? ''

  useEffect(() => {
    setSearchKeyword(qFromUrl)
  }, [qFromUrl, setSearchKeyword])

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword)
    const query = keyword.trim() ? `?${Q_PARAM}=${encodeURIComponent(keyword.trim())}` : ''
    router.replace(`${pathname}${query}`)
  }

  return (
    <SearchBar
      {...props}
      defaultValue={qFromUrl}
      onSearch={handleSearch}
    />
  )
}

export default ClubSearchBar
