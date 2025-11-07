// src/app/api/db/sync/route.js
import db from "@/models/index.js";
import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = request.headers.get("x-api-key");

  // ✅ optional security layer
  if (apiKey !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await db.sequelize.authenticate();
    console.log("✅ DB Connected");

    // ⚠️ Use { alter: true } for safe schema update
    await db.sequelize.sync({ alter: true });

    return NextResponse.json({ message: "✅ Database synced successfully!" });
  } catch (error) {
    console.error("❌ Sync failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
