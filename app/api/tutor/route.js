import { dbConnect } from "@/db/mongodb";
import TutorProfileModel from "@/models/TutorProfileModel";
import { NextResponse } from "next/server";
import "@/models/GradeModel";
import "@/models/SubjectModel";

export const GET = async () => {
  try {
    await dbConnect();
    const response = await TutorProfileModel.find()
      .populate("subjects")
      .populate("grades");
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
