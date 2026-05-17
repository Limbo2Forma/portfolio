import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

/**
 * POST /api/cv/upload
 * One-time upload of the CV PDF to Vercel Blob.
 * Protected by a simple secret so only the owner can trigger it.
 *
 * Usage:
 *   curl -X POST https://your-site.vercel.app/api/cv/upload \
 *        -H "Authorization: Bearer <BLOB_UPLOAD_SECRET>"
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization")
  const secret = process.env.BLOB_UPLOAD_SECRET

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Read the PDF from the project root
    const pdfPath = join(process.cwd(), "vhn-cv.pdf")
    const pdfBuffer = readFileSync(pdfPath)

    const blob = await put("vhn-cv.pdf", pdfBuffer, {
      access: "public",
      contentType: "application/pdf",
      addRandomSuffix: false,
    })

    return NextResponse.json({
      message: "CV uploaded successfully",
      url: blob.url,
    })
  } catch (error) {
    console.error("CV upload failed:", error)
    return NextResponse.json(
      { error: "Upload failed", details: String(error) },
      { status: 500 }
    )
  }
}
