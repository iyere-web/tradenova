import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken")?.value;

  const {pathname} = req.nextUrl;

  if(pathname.startsWith("/dashboard") || pathname.startsWith("/logout")){

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  }

  if(pathname.startsWith("/login") || pathname.startsWith("/register") ){
    if(token){
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"], // protect dashboard routes
};
