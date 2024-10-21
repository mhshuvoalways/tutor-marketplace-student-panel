import { authConfig } from "@/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { auth } = NextAuth(authConfig);
  const session = await auth();
  console.log(session);

  return !session?.user
    ? NextResponse.redirect(new URL("/login", request.url))
    : null;
}

export const config = {
  matcher: ["/my-account", "/all-booking"],
};
