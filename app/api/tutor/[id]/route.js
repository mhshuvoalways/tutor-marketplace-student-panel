import { dbConnect } from "@/db/mongodb";
import "@/models/GradeModel";
import "@/models/SubjectModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    const { id } = params;
    await dbConnect();
    const response = await TutorProfileModel.findOne({ _id: id })
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
