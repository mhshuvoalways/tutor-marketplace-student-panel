"use server";

import { signIn, signOut } from "@/auth";

export async function credentialLogin(formData) {
  if (formData.email && formData.password) {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirectTo: "/",
    });
  }
}

export async function socialLogin(formData) {
  await signIn(formData, { redirectTo: "/" });
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}
