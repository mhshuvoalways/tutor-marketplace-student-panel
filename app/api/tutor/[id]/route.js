import { dbConnect } from "@/db/mongodb";
import AvailabilityModel from "@/models/AvailabilityModel";
import "@/models/GradeModel";
import "@/models/SubjectModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import convertScheduleFormat from "@/services/convertScheduleFormat";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    const { id } = params;
    await dbConnect();
    const response = await TutorProfileModel.findOne({ _id: id })
      .populate("subjects")
      .populate("grades");
    const availibilityResponse = await AvailabilityModel.find({ user: id });
    const availability = convertScheduleFormat(availibilityResponse);
    const obj = {
      ...response._doc,
      availability,
    };
    return new NextResponse(JSON.stringify(obj), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};
