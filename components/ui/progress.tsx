"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  indicatorClassName?: string
}

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}: ProgressProps) {
  const [hasAnimated, setHasAnimated] = React.useState(false)

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasAnimated(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const normalizedValue = Math.min(100, Math.max(0, value ?? 0))
  const animatedValue = hasAnimated ? normalizedValue : 0

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1 transition-[transform] duration-2200 ease-out",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - animatedValue}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
