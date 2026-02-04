"use client"

import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SectionIcons = ({ 
    title = "ทำนาย",
    viewAllLink = "/fortune",
    items = [],
    className = ''
}) => {
    const router = useRouter()

    const handleViewAll = () => {
        if (viewAllLink) {
            router.push(viewAllLink)
        }
    }

    const handleItemClick = (item) => {
        if (item.link) {
            router.push(item.link)
        }
    }

    if (!items || items.length === 0) {
        return null
    }

    return (
        <div className={`w-full ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                {/* Title Badge */}
                <div className="bg-[#4727c7] text-white px-4 py-1.5 rounded-lg text-sm font-medium">
                    {title}
                </div>

                {/* View All Link */}
                <button
                    onClick={handleViewAll}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                >
                    <span className="text-sm font-medium">ดูทั้งหมด</span>
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                    </div>
                </button>
            </div>

            {/* Icon Cards Grid */}
            <div className="grid grid-cols-4 gap-3">
                {items.map((item, index) => (
                    <button
                        key={item.id || index}
                        onClick={() => handleItemClick(item)}
                        className="bg-[#F0EFFF] rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-[#E0DFFF] transition-colors cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="relative w-16 h-16">
                            {item.icon ? (
                                <Image
                                    src={item.icon}
                                    alt={item.label || `Icon ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-blue-400 to-orange-400 rounded-lg" />
                            )}
                        </div>

                        {/* Label */}
                        <span className="text-xs font-medium text-gray-800 text-center leading-tight">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SectionIcons
