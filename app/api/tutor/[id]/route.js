import { dbConnect } from "@/db/mongodb";
import AvailabilityModel from "@/models/AvailabilityModel";
import Booking from "@/models/Booking";
import "@/models/GradeModel";
import StudentProfile from "@/models/ProfileModel";
import "@/models/SubjectModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import convertScheduleFormat from "@/services/convertScheduleFormat";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async (_, { params }) => {
  try {
    const { id } = params;
    await dbConnect();
    const tutorResponse = await TutorProfileModel.findOne({
      user: id,
      isApproved: true,
    })
      .populate("subjects")
      .populate("grades");
    const availabilityResponse = await AvailabilityModel.find({ user: id });
    const availability = convertScheduleFormat(availabilityResponse);
    const bookingResponse = await Booking.find({ tutor: id });
    const bookingsWithStudentDetails = await Promise.all(
      bookingResponse.map(async (booking) => {
        const studentProfile = await StudentProfile.findOne({
          user: booking.student,
        });
        return {
          ...booking._doc,
          studentProfile,
        };
      })
    );
    const responseObject = {
      ...tutorResponse._doc,
      availability,
      bookings: bookingsWithStudentDetails,
    };
    return new NextResponse(JSON.stringify(responseObject), { status: 200 });
  } catch {
    return serverError();
  }
};
