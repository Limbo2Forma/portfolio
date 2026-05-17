"use client"

import posthog from "posthog-js"

export function track(event: string, properties?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && posthog.__loaded) {
      posthog.capture(event, properties)
    }
  } catch {
    // swallow - analytics should never break the app
  }
}
