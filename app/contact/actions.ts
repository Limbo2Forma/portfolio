"use server"

type Result = { ok: true } | { ok: false; error: string }

export async function submitContact(data: FormData): Promise<Result> {
  const name = String(data.get("name") || "").trim()
  const email = String(data.get("email") || "").trim()
  const message = String(data.get("message") || "").trim()
  const company = String(data.get("company") || "").trim()
  const projectType = String(data.get("projectType") || "")
  const budget = String(data.get("budget") || "")

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in name, email and message." }
  }
  // Very light email shape check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "That email doesn't look right." }
  }

  // In production you'd hand this off to an email provider (Resend, SES, etc.).
  // For now we log on the server so the message is preserved in deploy logs.
  console.log("[contact] new message", {
    name,
    email,
    company,
    projectType,
    budget,
    message,
    ts: new Date().toISOString(),
  })

  // Simulate a small delay so the loading state is visible.
  await new Promise((r) => setTimeout(r, 600))

  return { ok: true }
}
