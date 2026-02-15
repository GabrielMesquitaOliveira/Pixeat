'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue, useSpring } from 'motion/react'

type NumberTickerProps = {
    value: number
    className?: string
    direction?: 'up' | 'down'
    delay?: number
    decimalPlaces?: number
    prefix?: string
    suffix?: string
}

export function NumberTicker({
    value,
    className,
    direction = 'up',
    delay = 0,
    decimalPlaces = 0,
    prefix = '',
    suffix = '',
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.6 })

    const motionValue = useMotionValue(direction === 'down' ? value : 0)
    const springValue = useSpring(motionValue, {
        damping: 26,
        stiffness: 90,
    })

    const [display, setDisplay] = useState(direction === 'down' ? value : 0)

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplay(Number(latest.toFixed(decimalPlaces)))
        })

        return () => unsubscribe()
    }, [springValue, decimalPlaces])

    useEffect(() => {
        if (!inView) return

        const controls = animate(
            motionValue,
            direction === 'down' ? 0 : value,
            {
                duration: 2.2,
                delay,
                ease: 'easeOut',
            },
        )

        return () => controls.stop()
    }, [inView, motionValue, value, direction, delay])

    return (
        <span ref={ref} className={className}>
            {prefix}
            {display.toFixed(decimalPlaces)}
            {suffix}
        </span>
    )
}
