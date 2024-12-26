import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Define routes
  const publicRoutes = ["/signin", "/about", "/contact"];
  const protectedRoutes = ["/alltask", "/important", "/completed", "/incomplete", "/"];

  // Allow access to public routes without authentication
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users trying to access protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Allow access to other requests if token is valid or not a protected route
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/alltask",
    "/important",
    "/completed",
    "/incomplete",
    "/", // Ensure home is included as protected
    "/signin", // Specify paths explicitly for clarity
    "/about",
    "/contact",
  ],
};
