"use client"

import dynamic from 'next/dynamic'

const ClubContent = dynamic(
    () => import('./ClubContent'),
    { ssr: false }
)

const ClubContentClient = ({ onPostClick, loading, ...props }) => {
    return <ClubContent {...props} onPostClick={onPostClick} loading={loading} />
}

export default ClubContentClient
