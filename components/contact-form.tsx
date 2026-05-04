"use client"

import { useState, useTransition } from "react"
import { ArrowUpRight, Check, Loader2 } from "lucide-react"
import { track } from "@/lib/analytics"
import { submitContact } from "@/app/contact/actions"

type Status = "idle" | "success" | "error"

const budgetOptions = ["< $5k", "$5k — $20k", "$20k — $50k", "$50k+", "Not sure yet"]
const projectTypes = [
  "Data Pipeline",
  "Backend API",
  "Cloud Migration",
  "Observability",
  "Consulting",
  "Other",
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const [type, setType] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (type) data.set("projectType", type)
    if (budget) data.set("budget", budget)

    startTransition(async () => {
      try {
        const res = await submitContact(data)
        if (res.ok) {
          setStatus("success")
          setError(null)
          track("contact_form_submit", {
            projectType: data.get("projectType"),
            budget: data.get("budget"),
          })
          form.reset()
          setType(null)
          setBudget(null)
        } else {
          setStatus("error")
          setError(res.error ?? "Something went wrong.")
        }
      } catch (err) {
        setStatus("error")
        setError("Network error. Please email me directly.")
      }
    })
  }

  if (status === "success") {
    return (
      <div className="rounded-md border border-border bg-card p-8 md:p-10">
        <div className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6">
          <Check className="size-5" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl tracking-tight">
          Got it. Thanks for reaching out.
        </h3>
        <p className="mt-3 text-muted-foreground text-pretty max-w-md">
          I read every message personally and usually reply within two business days.
          If it&apos;s urgent, email{" "}
          <a
            href="mailto:nam671999hai@gmail.com"
            className="text-foreground link-underline"
          >
            nam671999hai@gmail.com
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium link-underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* Project type */}
      <fieldset className="space-y-3">
        <legend className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          01 / What kind of project?
        </legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              className={
                "px-4 py-2 rounded-full border text-sm transition-colors " +
                (type === t
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground")
              }
              aria-pressed={type === t}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Details */}
      <div className="space-y-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          03 / Your details
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Field name="name" label="Your name" required autoComplete="name" />
          <Field
            name="email"
            type="email"
            label="Email"
            required
            autoComplete="email"
          />
        </div>
        <Field
          name="company"
          label="Company / Organisation"
          autoComplete="organization"
        />
        <TextArea
          name="message"
          label="Tell me about it"
          required
          rows={5}
          placeholder="A few sentences about the problem, timeline, and what success looks like."
        />
      </div>

      {error && (
        <p className="text-sm text-primary" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground">
          Or email{" "}
          <a
            href="mailto:nam671999hai@gmail.com"
            className="text-foreground link-underline"
          >
            nam671999hai@gmail.com
          </a>{" "}
          directly.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="block group">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base md:text-lg placeholder:text-muted-foreground/60 transition-colors"
      />
    </label>
  )
}

function TextArea({
  name,
  label,
  required,
  rows = 4,
  placeholder,
}: {
  name: string
  label: string
  required?: boolean
  rows?: number
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base md:text-lg placeholder:text-muted-foreground/60 resize-none transition-colors"
      />
    </label>
  )
}
