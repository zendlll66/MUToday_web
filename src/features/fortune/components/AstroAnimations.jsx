"use client"
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const DEG_PER_SEC = (durationSec) => 360 / durationSec

const AstroAnimations = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [rotation, setRotation] = useState({ outer: 0, inner: 0 })
    const rafRef = useRef(null)
    const prevTimeRef = useRef(null)

    const outerSpeed = isHovered ? DEG_PER_SEC(35) : DEG_PER_SEC(80)
    const innerSpeed = isHovered ? DEG_PER_SEC(22) : DEG_PER_SEC(50)

    useEffect(() => {
        prevTimeRef.current = null
        const tick = (time) => {
            if (prevTimeRef.current == null) prevTimeRef.current = time
            const delta = (time - prevTimeRef.current) / 1000
            prevTimeRef.current = time
            setRotation((prev) => ({
                outer: prev.outer + outerSpeed * delta,
                inner: prev.inner + innerSpeed * delta,
            }))
            rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [outerSpeed, innerSpeed])

    return (
        <motion.div
            className="absolute  lg:left-[10%] md:top-[10%] top-[10%] lg:top-[-50%] inline-block aspect-square w-[min(100vw,1080px)] md:w-[min(100vw,1080px)] lg:w-[min(50vw,1080px)] min-w-[320px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0"
                    style={{ transform: `rotate(${rotation.outer}deg)` }}
                >
                    <Image
                        src="/astro-component/outer-astro.svg"
                        alt="วงนอกดวงดาว"
                        fill
                        className="object-contain"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="relative w-[65%] aspect-square"
                        style={{ transform: `rotate(${rotation.inner}deg)` }}
                    >
                        <Image
                            src="/astro-component/inner-astro.svg"
                            alt="วงในดวงดาว"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        className="relative w-[15%] aspect-square"
                        animate={{
                            scale: [1, 1.06, 1],
                            opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Image
                            src="/astro-component/logo-glass.svg"
                            alt="Mutoday"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AstroAnimations