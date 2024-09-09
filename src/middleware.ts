import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only redirect if not already on /under-construction
  // if (request.nextUrl.pathname !== "/under-construction") {
  //   return NextResponse.redirect(new URL("/under-construction", request.url))
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|under-construction).*)",
  ],
}
