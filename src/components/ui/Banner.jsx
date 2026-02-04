"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Banner = ({ 
    banners = [], 
    autoPlay = true, 
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    className = '',
    aspectRatio = 'aspect-[9/3]'
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    // Auto play functionality
    useEffect(() => {
        if (!autoPlay || banners.length <= 1 || isHovered) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length)
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, banners.length, isHovered])

    if (!banners || banners.length === 0) {
        return null
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % banners.length)
    }

    const handleBannerClick = (link) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer')
        }
    }

    // Single banner - no carousel needed
    if (banners.length === 1) {
        const banner = banners[0]
        return (
            <div className={`w-full max-w-[810px] mt-2 mx-auto flex justify-center items-center ${aspectRatio} relative overflow-hidden rounded-lg ${className}`}>
                {banner.link ? (
                    <button
                        onClick={() => handleBannerClick(banner.link)}
                        className="w-full h-full relative cursor-pointer hover:opacity-90 transition-opacity"
                        aria-label="Banner link"
                    >
                        <Image
                            src={banner.img}
                            alt={`Banner ${banner.id}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </button>
                ) : (
                    <div className="w-full h-full relative">
                        <Image
                            src={banner.img}
                            alt={`Banner ${banner.id}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                            priority
                        />
                    </div>
                )}
            </div>
        )
    }

    // Multiple banners - carousel
    return (
        <div
            className={`relative max-w-[810px] w-full mt-2 ${aspectRatio} overflow-hidden rounded-lg ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Banner Images */}
            <div className="relative w-full h-full">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {banner.link ? (
                            <button
                                onClick={() => handleBannerClick(banner.link)}
                                className="w-full h-full relative cursor-pointer hover:opacity-90 transition-opacity"
                                aria-label={`Banner ${index + 1} link`}
                            >
                                <Image
                                    src={banner.img}
                                    alt={`Banner ${banner.id}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                                    priority={index === 0}
                                />
                            </button>
                        ) : (
                            <div className="w-full h-full relative">
                                <Image
                                    src={banner.img}
                                    alt={`Banner ${banner.id}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                                    priority={index === 0}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {showArrows && banners.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
                        aria-label="Previous banner"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all z-10"
                        aria-label="Next banner"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {showDots && banners.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to banner ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Banner
