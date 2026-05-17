"use client"

import { ArrowUpRight, ArrowUp } from "lucide-react"
import { track } from "@/lib/analytics"

export function SiteFooter() {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return
    if (window.location.pathname !== "/") return // let browser navigate
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", `#${id}`)
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              [ Get in touch ]
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-balance">
              Have a data problem worth{" "}
              <span className="font-editorial text-primary">solving?</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:nam671999hai@gmail.com"
                onClick={() => track("footer_email_click")}
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                nam671999hai@gmail.com
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/#contact"
                onClick={scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Send a brief
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-8 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Sitemap
              </p>
              <ul className="space-y-2 text-base">
                <li>
                  <a href="/#home" onClick={scrollTo("home")} className="link-underline">
                    Index
                  </a>
                </li>
                <li>
                  <a href="/#about" onClick={scrollTo("about")} className="link-underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#work" onClick={scrollTo("work")} className="link-underline">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/#contact" onClick={scrollTo("contact")} className="link-underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Elsewhere
              </p>
              <ul className="space-y-2 text-base">
                <li>
                  <a
                    href="https://github.com/Limbo2Forma"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("social_click", { platform: "github" })}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    GitHub <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vhn6799"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("social_click", { platform: "linkedin" })}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    LinkedIn <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="/api/cv"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("resume_click", { location: "footer" })}
                    className="link-underline inline-flex items-center gap-1.5"
                  >
                    Résumé <ArrowUpRight className="size-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Big wordmark */}
        <div
          aria-hidden
          className="mt-16 md:mt-24 select-none overflow-hidden"
        >
          <div className="font-display tracking-tighter leading-[0.85] text-[28vw] md:text-[18vw] text-foreground/95">
            NAM&nbsp;VU&nbsp;HAI
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-border">
          <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} Nam Vu Hai. Built with care in Melbourne.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 self-start font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowUp className="size-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
