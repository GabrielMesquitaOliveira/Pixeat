'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function WheelSmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return
        }

        const lenis = new Lenis({
            smoothWheel: true,
            syncTouch: false,
            lerp: 0.08,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        })

        let rafId = 0

        const raf = (time: number) => {
            lenis.raf(time)
            rafId = window.requestAnimationFrame(raf)
        }

        rafId = window.requestAnimationFrame(raf)

        return () => {
            window.cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return null
}
