"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'

const Banner = ({
    banners = [],
    autoPlay = true,
    autoPlayInterval = 5000,
    showDots = true,
    className = '',
    aspectRatio = 'aspect-[9/3]'
}) => {
    const plugin = useRef(
        Autoplay({ delay: autoPlayInterval, stopOnInteraction: true })
    )

    if (!banners || banners.length === 0) {
        return null
    }

    const handleBannerClick = (link) => {
        if (link) window.open(link, '_blank', 'noopener,noreferrer')
    }

    if (banners.length === 1) {
        const banner = banners[0]
        return (
            <div className={cn('w-full max-w-[810px] mt-2 mx-auto flex justify-center items-center', aspectRatio, 'relative overflow-hidden rounded-lg', className)}>
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
                            draggable={false}
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
                            draggable={false}
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <Carousel
            opts={{ loop: true }}
            plugins={autoPlay ? [plugin.current] : []}
            className={cn('relative w-full max-w-[810px] mt-2', aspectRatio, 'overflow-hidden rounded-lg', className)}
            {...(autoPlay && {
                onMouseEnter: () => plugin.current?.stop(),
                onMouseLeave: () => plugin.current?.reset()
            })}
        >
            <CarouselContent className="ml-0">
                {banners.map((banner, index) => (
                    <CarouselItem key={banner.id} className={`pl-0 basis-full ${aspectRatio}`}>
                        <div className="relative w-full h-full">
                            {banner.link ? (
                                <button
                                    onClick={() => handleBannerClick(banner.link)}
                                    className="w-full h-full relative cursor-pointer hover:opacity-90 transition-opacity block"
                                    aria-label={`Banner ${index + 1} link`}
                                >
                                    <Image
                                        src={banner.img}
                                        alt={`Banner ${banner.id}`}
                                        fill
                                        className="object-cover rounded-3xl overflow-hidden "
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                                        priority={index === 0}
                                        draggable={false}
                                    />
                                </button>
                            ) : (
                                <div className="w-full h-full relative">
                                    <Image
                                        src={banner.img}
                                        alt={`Banner ${banner.id}`}
                                        fill
                                        className="object-cover rounded-3xl overflow-hidden "
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                                        priority={index === 0}
                                        draggable={false}
                                    />
                                </div>
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {showDots && (
                <BannerDots banners={banners} />
            )}
        </Carousel>
    )
}

function BannerDots({ banners }) {
    const { api } = useCarousel()
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        setSelectedIndex(api.selectedScrollSnap())
        const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
        api.on('select', onSelect)
        return () => api.off('select', onSelect)
    }, [api])

    const scrollTo = (index) => api?.scrollTo(index)

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                        'w-2 h-2 rounded-full transition-all',
                        index === selectedIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                    )}
                    aria-label={`Go to banner ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default Banner
