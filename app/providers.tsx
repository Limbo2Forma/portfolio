"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"
    if (!key || posthog.__loaded) return

    posthog.init(key, {
      api_host: host,
      capture_pageview: false, // we capture manually below
      capture_pageleave: true,
      person_profiles: "identified_only",
      loaded: (ph) => {
        if (process.env.NODE_ENV === "development") ph.debug(false)
      },
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </PHProvider>
  )
}

function PageviewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return
    let url = window.origin + pathname
    const qs = searchParams?.toString()
    if (qs) url += `?${qs}`
    posthog.capture("$pageview", { $current_url: url })
  }, [pathname, searchParams])

  return null
}
