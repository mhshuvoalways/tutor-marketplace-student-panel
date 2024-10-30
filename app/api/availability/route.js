import { dbConnect } from "@/db/mongodb";
import AvailabilityModel from "@/models/AvailabilityModel";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    await dbConnect();
    const response = await AvailabilityModel.find();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    serverError();
  }
};
