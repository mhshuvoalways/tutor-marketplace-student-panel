import { authConfig } from "@/app/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { auth } = NextAuth(authConfig);
  const session = await auth();
  
  return !session?.user
    ? NextResponse.redirect(new URL("/login", request.url))
    : null;
}

export const config = {
  matcher: [
    "/",
    "/grades",
    "/subjects",
    "/tutors",
    "/students",
    "/withdraw-requests",
    "/my-account",
  ],
};
