"use client"
import React from 'react'
import Link from 'next/link'

/**
 * แปลง hashtags ในข้อความ (#hashtag) เป็น highlighted text
 * Highlight ทุกอักขระที่อยู่ติดกันหลัง # รวมถึง # ด้วย
 * @param {string} text - ข้อความที่ต้องการ format
 * @param {string} textColor - สีข้อความปกติ
 * @returns {JSX.Element} - Formatted content with highlighted hashtags
 */
export const formatHashtagsInText = (text, textColor = '#000000') => {
  if (!text) return null

  // แยกข้อความที่มี # และไม่มี # (รองรับอักขระไทยและอักขระพิเศษ)
  // Pattern: match # ตามด้วยทุกอักขระที่ไม่ใช่ whitespace หรือ # ใหม่
  const parts = text.split(/(#[^\s#]+)/g)

  return (
    <div className='whitespace-pre-wrap'>
      {parts.map((part, index) => {
        if (part.startsWith('#')) {
          // แยก # และข้อความหลัง # เพื่อให้ # มีสีด้วย
          const hashSymbol = part[0] // #
          const hashContent = part.slice(1) // ข้อความหลัง #
          const hashtag = hashContent // hashtag without #

          console.log(hashtag)
          
          return (
            <Link
              key={index}
              href={`/hashtag/${encodeURIComponent(hashtag)}`}
              className='font-medium cursor-pointer hover:underline inline'
              style={{ color: '#d747a7' }}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <span style={{ color: '#d747a7' }}>{hashSymbol}</span>
              <span style={{ color: '#d747a7' }}>{hashContent}</span>
            </Link>
          )
        }
        return <span key={index} style={{ color: textColor }}>{part}</span>
      })}
    </div>
  )
}

/**
 * Highlight คำที่อยู่ใน hashTag array ในข้อความ
 * @param {string} text - ข้อความที่ต้องการ highlight
 * @param {string[]} hashTags - array ของ hashTag ที่ต้องการ highlight
 * @param {string} textColor - สีข้อความปกติ
 * @returns {JSX.Element} - Formatted content with highlighted hashTags
 */
export const highlightHashTags = (text, hashTags = [], textColor = '#000000') => {
  if (!text || !hashTags || hashTags.length === 0) {
    return <span style={{ color: textColor }}>{text}</span>
  }

  // สร้าง regex pattern จาก hashTags array รวม # ด้วย
  // Escape special characters และรวมเป็น pattern
  const patterns = hashTags.map(tag => {
    // Escape special regex characters
    const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Match ทั้ง #tag และ tag (ถ้ามี # อยู่หน้า)
    return `#?${escapedTag}`
  })

  // สร้าง regex pattern ที่ match คำทั้งหมด (case-insensitive)
  const regex = new RegExp(`(${patterns.join('|')})`, 'gi')

  // Split text by hashTags
  const parts = text.split(regex)

  return (
    <div className='whitespace-pre-wrap'>
      {parts.map((part, index) => {
        // ตรวจสอบว่า part ตรงกับ hashTag หรือไม่ (มีหรือไม่มี #)
        const isHashTag = hashTags.some(tag => {
          const partWithoutHash = part.startsWith('#') ? part.slice(1) : part
          return partWithoutHash.toLowerCase() === tag.toLowerCase()
        })

        if (isHashTag) {
          // แยก # และข้อความหลัง #
          if (part.startsWith('#')) {
            const hashSymbol = part[0] // #
            const hashContent = part.slice(1) // ข้อความหลัง #
            return (
              <Link
                key={index}
                href={`/hashtag/${encodeURIComponent(hashContent)}`}
                className='font-medium cursor-pointer hover:underline inline'
                style={{ color: '#d747a7' }}
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <span style={{ color: '#d747a7' }}>{hashSymbol}</span>
                <span style={{ color: '#d747a7' }}>{hashContent}</span>
              </Link>
            )
          } else {
            // ถ้าไม่มี # ให้ highlight แค่คำ
            return (
              <span
                key={index}
                className='font-medium cursor-pointer hover:underline'
                style={{ color: '#d747a7' }}
              >
                {part}
              </span>
            )
          }
        }
        return <span key={index} style={{ color: textColor }}>{part}</span>
      })}
    </div>
  )
}
