import { dbConnect } from "@/db/mongodb";
import recoverPass from "@/lib/mail/recoverPass";
import AuthModel from "@/models/AuthModel";
import serverError from "@/services/serverError";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const POST = async (request) => {
  try {
    await dbConnect();
    const { email } = await request.json();
    const user = await AuthModel.findOne({ email });
    if (user.isVerified) {
      if (!user || user.provider === "google") {
        return new NextResponse(
          JSON.stringify({
            message: "User not found!",
          }),
          { status: 400 }
        );
      }
      const token = jwt.sign(
        {
          _id: user._id,
          email,
        },
        process.env.AUTH_SECRET,
        { expiresIn: "30m" }
      );
      await resend.emails.send({
        from: "Tim's Tutor <noreply@mhshuvo.com>",
        to: email,
        subject: "Change Your Password",
        react: recoverPass(token),
      });
      return new NextResponse(
        JSON.stringify({
          message: "Please check your email to recover your password!",
        }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Please verify your account to recover your password!",
        }),
        { status: 401 }
      );
    }
  } catch {
    return serverError();
  }
};
