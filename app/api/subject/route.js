import SubjectModel from "@/models/SubjectModel";
import { dbConnect } from "@/db/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const response = await SubjectModel.find();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};