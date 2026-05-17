import Link from "next/link"
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Github,
  FileText,
  Clock,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Marquee } from "@/components/marquee"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { projects } from "@/lib/projects"
import { experience, skills } from "@/lib/experience"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "nam671999hai@gmail.com",
    href: "mailto:nam671999hai@gmail.com",
    event: "contact_email_click",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/vhn6799",
    href: "https://www.linkedin.com/in/vhn6799",
    event: "contact_linkedin_click",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/Limbo2Forma",
    href: "https://github.com/Limbo2Forma",
    event: "contact_github_click",
  },
  {
    icon: FileText,
    label: "Résumé",
    value: "PDF, 1 page",
    href: "/api/cv",
    event: "resume_click",
  },
] as const

export default function HomePage() {
  return (
    <>
      {/* ────────────────────  INDEX / HERO  ──────────────────── */}
      <section
        id="home"
        className="scroll-mt-20 relative pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-10"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-3">
                  <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
                  Available for projects, Q3 / 2026
                </p>
              </Reveal>
              <Reveal delay={60}>
                <h1
                  id="hero-heading"
                  className="font-display mt-6 text-[14vw] md:text-[10.5vw] tracking-tighter leading-[0.85] text-balance"
                >
                  Data systems
                  <br />
                  <span className="text-muted-foreground">that earn</span>
                  <br />
                  <span className="font-editorial text-primary">trust.</span>
                </h1>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-3 flex md:flex-col md:justify-end gap-6 md:gap-4">
              <Reveal delay={140}>
                <p className="text-base md:text-lg text-pretty max-w-xs leading-relaxed">
                  I&apos;m{" "}
                  <span className="font-editorial italic">Nam Vu Hai</span>, a
                  data engineer & backend developer with 4+ years building
                  pipelines, APIs and observability platforms across Azure and
                  AWS.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={220}>
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                See selected work
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Hire me
              </a>
              <a
                href="#about"
                className="ml-auto hidden md:inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowDown className="size-3.5" />
                Scroll
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-5 md:px-10 mb-16 md:mb-24" aria-label="At a glance">
        <div className="mx-auto max-w-[1600px] grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-md overflow-hidden border border-border">
          {[
            { k: "4+", v: "Years engineering" },
            { k: "10TB", v: "Daily data processed" },
            { k: "20+", v: "Pipelines shipped" },
            { k: "1st", v: "Class Honour, RMIT" },
          ].map((s) => (
            <Reveal key={s.v} className="bg-background p-6 md:p-8">
              <div className="font-display text-4xl md:text-6xl tracking-tight">
                {s.k}
              </div>
              <div className="mt-2 text-base text-muted-foreground">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Marquee with stack */}
      <Marquee
        items={[
          "Apache Spark",
          "Azure",
          "Airflow",
          "Databricks",
          "Quarkus",
          "Kafka",
          "PostgreSQL",
          "Grafana",
          "AWS",
          "FastAPI",
        ]}
      />

      {/* ────────────────────  ABOUT  ──────────────────── */}
      <section
        id="about"
        className="scroll-mt-20 px-5 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              [ About ] - 02 / Index
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="about-heading"
              className="font-display mt-6 text-[14vw] md:text-[9vw] tracking-tighter leading-[0.85] text-balance"
            >
              Make the data
              <br />
              <span className="font-editorial text-primary">behave.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Bio */}
      <section className="px-5 md:px-10 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                [ Who&apos;s behind the work ]
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[0.95]">
                Hi, I&apos;m Nam.
              </h3>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-8 space-y-4 text-base leading-relaxed">
                <li className="flex gap-3">
                  <MapPin className="size-4 mt-1 shrink-0 text-primary" />
                  <span>Melbourne, Australia</span>
                </li>
                <li className="flex gap-3">
                  <GraduationCap className="size-4 mt-1 shrink-0 text-primary" />
                  <span>
                    Master of Data Science, RMIT (ongoing)
                    <br />
                    <span className="text-muted-foreground">
                      BSc Software Engineering, RMIT VN - First Class Honour
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Award className="size-4 mt-1 shrink-0 text-primary" />
                  <span>
                    Top 1 - RMIT Kaggle Competitions (Life Expectancy & Book
                    Rating)
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-pretty font-inter">
            <Reveal>
              <p>
                I&apos;m a{" "}
                <span className="font-editorial italic text-2xl md:text-3xl font-normal tracking-normal">data engineer</span> and
                backend developer with 4+ years of experience designing systems
                that move, store and surface data at scale. I care about the
                quiet parts: schemas, SLAs, retries, cost.
              </p>
            </Reveal>
            <Reveal delay={60}>
              <p>
                Most recently I led the data ingestion architecture for{" "}
                <span className="font-bold">UDE Central Monitoring</span> at
                NTT DATA VDS, working peer-to-peer with the Wolfsburg team in
                Germany. Before that, I built backend services in Quarkus, a
                customer data platform on HBase + Spark, and processed{" "}
                <span className="font-bold">10TB of daily logs</span> for some
                of Vietnam&apos;s largest news properties.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                I&apos;m now in Melbourne studying a{" "}
                <span className="font-bold">Master of Data Science</span> at
                RMIT, and taking on selected freelance and contract engagements
                - pipelines, observability, backend APIs, cloud migrations.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Work with me
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="/api/cv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Download résumé
                  <FileText className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="px-5 md:px-10 py-20 md:py-32 border-t border-border"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-12 md:mb-16 flex-wrap">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  [ Experience ]
                </p>
                <h2
                  id="experience-heading"
                  className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]"
                >
                  Where I&apos;ve been.
                </h2>
              </div>
            </div>
          </Reveal>

          <ol className="space-y-0">
            {experience.map((role, i) => (
              <Reveal key={`${role.company}-${i}`} delay={i * 50}>
                <li className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-t border-border">
                  <div className="col-span-12 md:col-span-3 font-mono text-sm text-muted-foreground">
                    {role.period}
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-base text-muted-foreground">
                      {role.company}
                      {role.location ? ` · ${role.location}` : ""}
                    </p>
                  </div>
                  <p className="col-span-12 md:col-span-4 text-base text-muted-foreground text-pretty leading-relaxed">
                    {role.blurb}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section
        className="px-5 md:px-10 py-20 md:py-32 border-t border-border"
        aria-labelledby="stack-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              [ The stack ]
            </p>
            <h2
              id="stack-heading"
              className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-12 md:mb-16"
            >
              Tools of the trade.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
            {skills.map((group) => (
              <Reveal key={group.label} className="bg-background p-6 md:p-8">
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-border text-sm hover:border-foreground transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────  WORK  ──────────────────── */}
      <section
        id="work"
        className="scroll-mt-20 px-5 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16 border-t border-border"
        aria-labelledby="work-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              [ Work ] - Index of {projects.length} projects
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="work-heading"
              className="font-display mt-6 text-[14vw] md:text-[10vw] tracking-tighter leading-[0.85] text-balance"
            >
              Selected
              <br />
              <span className="font-editorial text-primary">work.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              A small, considered set of projects spanning observability,
              backend APIs, customer data platforms and big-data analytics.
              Click any project for the full case study.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Project list */}
      <section
        className="px-5 md:px-10 pb-20 md:pb-32"
        aria-label="Project list"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="border-t border-border">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <ProjectCard project={p} variant="list" priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach / pull quote */}
      <section className="px-5 md:px-10 py-20 md:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-background/60 mb-8">
              [ How I work ]
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-balance">
              I obsess over the unglamorous parts of data -{" "}
              <span className="font-editorial text-primary">schemas</span>,{" "}
              <span className="font-editorial text-accent">SLAs</span>, retries,
              cost. The dashboards are the easy bit.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-16">
              {[
                {
                  n: "01",
                  t: "Listen first",
                  d: "I start by understanding the business, not the tech. Bad pipelines almost always trace back to a misread requirement.",
                },
                {
                  n: "02",
                  t: "Design for ops",
                  d: "Every system I ship has runbooks, dashboards and budgets. If it pages, you will know exactly what to do.",
                },
                {
                  n: "03",
                  t: "Boring is good",
                  d: "I default to proven tools - Postgres, Spark, Airflow - and bring novelty only where it pays for itself.",
                },
              ].map((item) => (
                <div key={item.n} className="border-t border-background/15 pt-6">
                  <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-background/60">
                    {item.n}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight">
                    {item.t}
                  </h3>
                  <p className="text-base md:text-lg text-background/75 mt-3 text-pretty leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────  CONTACT  ──────────────────── */}
      <section
        id="contact"
        className="scroll-mt-20 px-5 md:px-10 pt-24 md:pt-32 pb-12 md:pb-16 border-t border-border"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              [ Contact ] - Let&apos;s build something
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2
              id="contact-heading"
              className="font-display mt-6 text-[14vw] md:text-[10vw] tracking-tighter leading-[0.85] text-balance"
            >
              Say <span className="font-editorial text-primary">hello.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              The fastest way to reach me is email. For longer briefs, the form
              below collects everything I need to give you a thoughtful first
              reply.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Channels grid */}
      <section
        className="px-5 md:px-10 mb-16 md:mb-24"
        aria-label="Direct channels"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
            {channels.map(({ icon: Icon, label, value, href, event }) => (
              <a
                key={label}
                href={href}
                target={
                  href.startsWith("http") || href.endsWith(".pdf")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                data-track={event}
                className="group bg-background p-6 md:p-8 flex flex-col justify-between gap-8 hover:bg-foreground hover:text-background transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5" />
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[0.18em] opacity-70">
                    {label}
                  </p>
                  <p className="font-display text-xl md:text-2xl mt-2 tracking-tight break-all">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section
        className="px-5 md:px-10 pb-20 md:pb-32"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto max-w-[1600px] grid grid-cols-12 gap-8 md:gap-16">
          <aside className="col-span-12 md:col-span-4 space-y-10">
            <Reveal>
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  [ How I work with clients ]
                </p>
                <h3
                  id="form-heading"
                  className="font-display text-3xl md:text-4xl tracking-tight leading-[0.95] text-balance"
                >
                  A small, focused engagement -{" "}
                  <span className="font-editorial">done well.</span>
                </h3>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="space-y-5 text-base leading-relaxed">
                <li className="flex gap-3">
                  <Clock className="size-4 mt-1 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">Reply within 2 days.</span>{" "}
                    <span className="text-muted-foreground">
                      I read every message myself.
                    </span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="size-4 mt-1 shrink-0 text-primary" />
                  <span>
                    <span className="font-medium">
                      Based in Melbourne (UTC+10).
                    </span>{" "}
                    <span className="text-muted-foreground">
                      Comfortable working across EU + APAC.
                    </span>
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-md border border-border bg-card p-5">
                <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Best fit
                </p>
                <ul className="text-base space-y-1.5 leading-relaxed">
                  <li>- ETL & data pipeline design</li>
                  <li>- Observability (Grafana / LGTM)</li>
                  <li>- Backend APIs (Python / Java)</li>
                  <li>- Cloud migrations (Azure / AWS)</li>
                </ul>
              </div>
            </Reveal>
          </aside>

          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
