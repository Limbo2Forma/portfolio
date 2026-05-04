import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PostHogProvider } from "./providers"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Nam Vu Hai — Data Engineer & Backend Developer",
    template: "%s — Nam Vu Hai",
  },
  description:
    "Data engineer and backend developer with 4+ years of experience designing data pipelines, ETL systems, and cloud-native APIs across Azure and AWS.",
  keywords: [
    "Data Engineer",
    "Backend Developer",
    "ETL",
    "Azure",
    "AWS",
    "Apache Spark",
    "Grafana",
    "Airflow",
    "Nam Vu Hai",
  ],
  authors: [{ name: "Nam Vu Hai" }],
  creator: "Nam Vu Hai",
  openGraph: {
    title: "Nam Vu Hai — Data Engineer & Backend Developer",
    description:
      "4+ years building data platforms, ETL pipelines, and backend systems. Currently studying a Master of Data Science at RMIT.",
    type: "website",
    locale: "en_AU",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground min-h-screen flex flex-col">
        <PostHogProvider>
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PostHogProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
