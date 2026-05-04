import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { getProject, projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Nam Vu Hai`,
      description: project.summary,
      images: [project.cover],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]
  const prev = projects[(idx - 1 + projects.length) % projects.length]

  const accent =
    project.accent === "primary" ? "bg-primary" : "bg-accent"

  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <Link
              href="/#work"
              prefetch
              className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              All work
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 flex items-center gap-3">
              <span className={cn("size-2 rounded-full", accent)} />
              <span className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                {project.index} / {project.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-4 text-[12vw] md:text-[7vw] tracking-tighter leading-[0.85] text-balance">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-xl md:text-2xl text-muted-foreground text-pretty leading-snug">
              {project.summary}
            </p>
          </Reveal>

          {/* Meta strip */}
          <Reveal delay={220}>
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-md overflow-hidden border border-border">
              {[
                ["Client", project.client],
                ["Role", project.role],
                ["Year", project.year],
                ["Category", project.category],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-5 md:p-6">
                  <dt className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="mt-2 text-base font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Cover */}
      <section className="px-5 md:px-10 mb-16 md:mb-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-muted">
              <Image
                src={project.cover}
                alt={`${project.title} cover image`}
                fill
                priority
                sizes="(min-width: 1024px) 1500px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="px-5 md:px-10 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8 md:gap-16">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-28 self-start space-y-8">
            <Reveal>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-border text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  Highlights
                </p>
                <ul className="space-y-3 text-base leading-relaxed">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-2 size-1.5 rounded-full shrink-0",
                          accent,
                        )}
                      />
                      <span className="text-pretty">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="col-span-12 md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-pretty">
            <Reveal>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
                [ The project ]
              </p>
            </Reveal>
            {project.description.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Prev */}
      <section className="border-t border-border px-5 md:px-10 py-12 md:py-20">
        <div className="mx-auto max-w-[1600px] grid grid-cols-2 gap-4 md:gap-8">
          <Link
            href={`/work/${prev.slug}`}
            prefetch
            className="group block text-left"
          >
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-2 inline-flex items-center gap-2">
              <ArrowLeft className="size-3.5" /> Previous
            </p>
            <p className="font-display text-2xl md:text-4xl tracking-tight leading-[0.95] group-hover:text-primary transition-colors">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            prefetch
            className="group block text-right"
          >
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-2 inline-flex items-center gap-2 justify-end w-full">
              Next <ArrowRight className="size-3.5" />
            </p>
            <p className="font-display text-2xl md:text-4xl tracking-tight leading-[0.95] group-hover:text-primary transition-colors">
              {next.title}
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[0.95] text-balance">
            Have a similar problem?{" "}
            <span className="font-editorial text-primary">Let&apos;s talk.</span>
          </h2>
          <Link
            href="/#contact"
            prefetch
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors self-start md:self-auto"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
