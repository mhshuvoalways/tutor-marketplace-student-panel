import { authConfig } from "@/auth.config";
import { dbConnect } from "@/db/mongodb";
import AuthModel from "@/models/AuthModel";
import Booking from "@/models/Booking";
import serverError from "@/services/serverError";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await dbConnect();
    const {
      tutorId,
      selectedDate,
      startedTime,
      endedTime,
      timeZone,
      session,
      fee,
    } = await request.json();
    const { auth } = NextAuth(authConfig);
    const mySession = await auth();
    const email = mySession.user.email;
    const authResponse = await AuthModel.findOne({ email });
    const obj = {
      student: authResponse._id,
      tutor: tutorId,
      date: selectedDate,
      startedTime,
      endedTime,
      timeZone,
      session,
      fee,
    };
    const response = await new Booking(obj).save();
    return new NextResponse(
      JSON.stringify({
        message: "You have booked successfully!",
        response: response,
      }),
      { status: 200 }
    );
  } catch {
    return serverError();
  }
};
