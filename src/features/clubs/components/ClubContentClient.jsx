"use client"

import dynamic from 'next/dynamic'

const ClubContent = dynamic(
    () => import('./ClubContent'),
    { ssr: false }
)

const ClubContentClient = (props) => {
    return <ClubContent {...props} />
}

export default ClubContentClient
