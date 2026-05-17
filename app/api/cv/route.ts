import { NextResponse } from "next/server"

const CV_URL =
  process.env.CV_BLOB_URL ??
  "https://q7dvhjxishjxdnvb.public.blob.vercel-storage.com/vhn-cv.pdf"

/**
 * GET /api/cv
 * Redirects to the Vercel Blob-hosted CV PDF.
 */
export function GET() {
  return NextResponse.redirect(CV_URL, 302)
}
