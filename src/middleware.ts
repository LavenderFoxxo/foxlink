import { prisma } from "@/util/db";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const requestHeaders = headers();
  // grab user ip from cloudflare's headers
  const userIp =
    (requestHeaders.get("cf-connecting-ip") as string);

  await prisma.request.create({
    data: {
      ip: userIp,
      route: req.nextUrl.pathname,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
