"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  delay?: number
  children: React.ReactNode
}

export function Reveal({ className, delay = 0, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.transitionDelay = `${delay}ms`
            e.target.classList.add("is-visible")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  )
}
