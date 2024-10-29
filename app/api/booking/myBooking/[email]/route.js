import { dbConnect } from "@/db/mongodb";
import AuthModel from "@/models/AuthModel";
import Booking from "@/models/Booking";
import ProfileModel from "@/models/ProfileModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    await dbConnect();
    const authResponse = await AuthModel.findOne({ email: params.email });
    const profileResponse = await ProfileModel.findOne({
      user: authResponse._id,
    });
    const response = await Booking.find({
      student: profileResponse.user,
    });
    const tutorProfiles = await Promise.all(
      response.map(async (el) => {
        const tutorProfile = await TutorProfileModel.findOne({
          user: el.tutor,
        });
        return {
          ...el._doc,
          tutorProfile,
        };
      })
    );
    return new NextResponse(JSON.stringify(tutorProfiles), { status: 200 });
  } catch {
    return serverError();
  }
};
