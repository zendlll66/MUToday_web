"use client"

import dynamic from 'next/dynamic'

const ClubContent = dynamic(
    () => import('./ClubContent'),
    { ssr: false }
)

const ClubContentClient = ({ onPostClick, ...props }) => {
    return <ClubContent {...props} onPostClick={onPostClick} />
}

export default ClubContentClient
