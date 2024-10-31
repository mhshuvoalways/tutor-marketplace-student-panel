import { dbConnect } from "@/db/mongodb";
import Booking from "@/models/Booking";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const POST = async (request, { params }) => {
  try {
    const { date } = params;
    const { tutorId } = await request.json();
    await dbConnect();
    const response = await Booking.find({ date, tutor: tutorId });
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return serverError();
  }
};
