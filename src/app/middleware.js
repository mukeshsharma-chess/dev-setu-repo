// app/middleware.js

export async function middleware(req) {
  // Preflight request handle
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Authorization",
      },
    });
  }

  // Normal request: continue
  return new Response(null);
}

// Apply middleware to all /api routes
export const config = {
  matcher: "/api/:path*",
};
