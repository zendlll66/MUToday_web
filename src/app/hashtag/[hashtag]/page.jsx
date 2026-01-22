"use client"    
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const { hashtag } = useParams()
    // Decode hashtag เพื่อรองรับภาษาไทยและอักขระพิเศษ
    const decodedHashtag = hashtag ? decodeURIComponent(hashtag) : ''
    
  return (
    <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold text-gray-800 mb-3'>{decodedHashtag}</h1>
    </div>
  )
}

export default page