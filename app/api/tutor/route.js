import { dbConnect } from "@/db/mongodb";
import BookingModel from "@/models/Booking";
import "@/models/GradeModel";
import "@/models/SubjectModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    await dbConnect();
    const response = await TutorProfileModel.find({ isApproved: true })
      .populate("subjects")
      .populate("grades");
    const bookingResponse = await BookingModel.find();

    const updatedTutors = response.map((tutor) => {
      const tutorReviews = bookingResponse.filter(
        (booking) => booking.tutor.equals(tutor.user) && booking.review
      );
      if (tutorReviews.length > 0) {
        const totalReviews = tutorReviews.length;
        const averageReview =
          tutorReviews.reduce((acc, curr) => acc + curr.review, 0) /
          totalReviews;
        return {
          ...tutor._doc,
          totalReviews,
          averageReview,
        };
      }
      return tutor;
    });

    return new NextResponse(JSON.stringify(updatedTutors), { status: 200 });
  } catch {
    serverError();
  }
};
