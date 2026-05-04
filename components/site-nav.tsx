"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState, useCallback } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { track } from "@/lib/analytics"

const sections = [
  { id: "home", label: "Index" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const

type SectionId = (typeof sections)[number]["id"]

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<SectionId>("home")

  // Sticky chrome
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Active section detection (only on home page)
  useEffect(() => {
    if (!isHome) return
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top that is currently intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          setActive(visible[0].target.id as SectionId)
        }
      },
      {
        // trigger when the section's top is near the header
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const hrefFor = useCallback(
    (id: SectionId) => (isHome ? `#${id}` : `/#${id}`),
    [isHome],
  )

  const handleAnchorClick = useCallback(
    (id: SectionId, location: "header" | "mobile_menu") =>
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        track("nav_click", { section: id, location })
        if (!isHome) return // let Next.js handle the cross-route nav
        e.preventDefault()
        const el = document.getElementById(id)
        if (!el) return
        // Use scrollIntoView with smooth behavior + scroll-mt for header offset
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        // Update hash without jumping
        history.replaceState(null, "", `#${id}`)
        setOpen(false)
      },
    [isHome],
  )

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
        <a
          href={hrefFor("home")}
          onClick={handleAnchorClick("home", "header")}
          aria-label="Home"
          className="flex items-baseline gap-2"
        >
          <span className="font-display font-medium text-base md:text-lg tracking-tight">
            Nam Vu Hai
          </span>
          <span className="hidden md:inline font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
            / Data Engineer
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {sections.map((l, i) => {
            const isActive = isHome && active === l.id
            return (
              <a
                key={l.id}
                href={hrefFor(l.id)}
                onClick={handleAnchorClick(l.id, "header")}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="font-mono text-[12px] mr-1.5 text-muted-foreground/70">
                  0{i + 1}
                </span>
                {l.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute left-4 right-4 -bottom-px h-px bg-foreground"
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={hrefFor("contact")}
            onClick={handleAnchorClick("contact", "header")}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center size-10 rounded-full border border-border bg-background"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-background transition-all duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-2",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-5 pt-6 pb-10 h-full" aria-label="Mobile">
          <ul className="flex-1 flex flex-col gap-1">
            {sections.map((l, i) => {
              const isActive = isHome && active === l.id
              return (
                <li key={l.id}>
                  <a
                    href={hrefFor(l.id)}
                    onClick={handleAnchorClick(l.id, "mobile_menu")}
                    className={cn(
                      "flex items-baseline justify-between py-5 border-b border-border",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <span className="font-display text-4xl tracking-tight">
                      {l.label}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={hrefFor("contact")}
              onClick={handleAnchorClick("contact", "mobile_menu")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-4 text-sm font-medium"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="mailto:nam671999hai@gmail.com"
              className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground text-center"
            >
              nam671999hai@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
