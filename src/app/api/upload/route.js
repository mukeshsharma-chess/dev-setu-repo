import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import os from "os";
import { v2 as cloudinary } from "cloudinary";

export const config = { api: { bodyParser: false } };

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    // Use OS temp folder
    const uploadDir = path.join(os.tmpdir());

    const form = formidable({
      multiples: true,
      uploadDir,
      keepExtensions: true,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    if (!files.file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const fileArray = Array.isArray(files.file) ? files.file : [files.file];
    const uploadedUrls = [];

    for (const f of fileArray) {
      if (!fs.existsSync(f.filepath)) continue;

      const result = await cloudinary.uploader.upload(f.filepath, {
        folder: "devsetu_uploads",
      });
      uploadedUrls.push(result.secure_url);
    }

    if (uploadedUrls.length === 0)
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });

    return NextResponse.json({ message: "Files uploaded successfully", uploadedUrls });
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 });
  }
}
