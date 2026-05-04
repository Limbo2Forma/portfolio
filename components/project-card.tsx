"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type Variant = "list" | "grid"

export function ProjectCard({
  project,
  variant = "list",
  priority = false,
}: {
  project: Project
  variant?: Variant
  priority?: boolean
}) {
  const accent =
    project.accent === "primary" ? "bg-primary" : "bg-accent"

  if (variant === "grid") {
    return (
      <Link
        href={`/work/${project.slug}`}
        prefetch
        onClick={() =>
          track("project_click", { slug: project.slug, source: "grid" })
        }
        className="group block"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
          <Image
            src={project.cover}
            alt={`${project.title} project cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            priority={priority}
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={cn("size-2 rounded-full", accent)} />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] bg-background/85 backdrop-blur px-2 py-1 rounded-full">
              {project.index} / {project.category}
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl tracking-tight">
              {project.title}
            </h3>
            <p className="text-base text-muted-foreground mt-1">
              {project.client} — {project.year}
            </p>
          </div>
          <ArrowUpRight className="size-5 mt-1 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      prefetch
      onClick={() =>
        track("project_click", { slug: project.slug, source: "list" })
      }
      className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-t border-border first:border-t-0 transition-colors hover:bg-muted/40 -mx-4 px-4 md:-mx-6 md:px-6 rounded-md"
    >
      <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground self-start mt-2">
        {project.index}
      </span>
      <div className="col-span-10 md:col-span-5">
        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-balance">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-muted-foreground">
          <span>{project.client}</span>
          <span aria-hidden>·</span>
          <span>{project.role}</span>
          <span aria-hidden>·</span>
          <span>{project.year}</span>
        </div>
      </div>
      <div className="hidden md:block col-span-3 text-base text-muted-foreground text-pretty leading-relaxed">
        {project.summary}
      </div>
      <div className="col-span-12 md:col-span-3 relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-md bg-muted">
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={priority}
        />
        <div
          className={cn(
            "absolute inset-0 mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover:opacity-25",
            accent,
          )}
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center justify-center size-9 rounded-full bg-background text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}
