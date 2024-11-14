import { createPaymentIntent } from "@/app/api/services/createPaymentIntent";
import { sendEmailHandler } from "@/app/api/services/resend";
import { authConfig } from "@/auth.config";
import { dbConnect } from "@/db/mongodb";
import AdminProfileModel from "@/models/AdminProfileModel";
import AuthModel from "@/models/AuthModel";
import Booking from "@/models/Booking";
import StudentProfileModel from "@/models/ProfileModel";
import TutorProfileModel from "@/models/TutorProfileModel";
import serverError from "@/services/serverError";
import moment from "moment";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await dbConnect();
    const {
      tutorId,
      tutorName,
      date,
      startedTime,
      endedTime,
      timeZone,
      hourlyRate,
      session,
    } = await request.json();
    const { auth } = NextAuth(authConfig);
    const mySession = await auth();
    if (!mySession) {
      return NextResponse.json(
        { message: "Please login before booking!" },
        { status: 401 }
      );
    }
    const studentEmail = mySession.user.email;
    const studentAuthResponse = await AuthModel.findOne({
      email: studentEmail,
    });
    if (!studentAuthResponse) {
      return NextResponse.json(
        { message: "Student not found!" },
        { status: 404 }
      );
    }

    const { _id: studentId } = studentAuthResponse;

    const studentProfile = await StudentProfileModel.findOne({
      user: studentId,
    });
    if (!studentProfile) {
      return NextResponse.json(
        { message: "Student profile not found!" },
        { status: 404 }
      );
    }
    const { name: studentName } = studentProfile;

    const tutorAuthResponse = await AuthModel.findById(tutorId);
    if (!tutorAuthResponse) {
      return NextResponse.json(
        { message: "Tutor not found!" },
        { status: 404 }
      );
    }
    const { email: tutorEmail } = tutorAuthResponse;

    const amount = session * hourlyRate;

    const paymentIntent = await createPaymentIntent({
      amount,
      tutorId,
      studentId,
    });

    if (paymentIntent.status !== 200) {
      return NextResponse.json(
        { message: paymentIntent.message },
        { status: 500 }
      );
    }

    const adminResponse = await AdminProfileModel.findOne();
    if (!adminResponse) {
      return NextResponse.json(
        { message: "Admin profile not found!" },
        { status: 404 }
      );
    }

    const tutorResponse = TutorProfileModel.findOne({ user: tutorId });
    if (!tutorResponse) {
      return NextResponse.json(
        { message: "Tutor profile not found!" },
        { status: 404 }
      );
    }

    const platformCharge =
      amount -
      (amount * (tutorResponse.percentage || adminResponse.platformCharge)) /
        100;

    await TutorProfileModel.findOneAndUpdate(
      { user: tutorId },
      { $inc: { balance: platformCharge } }
    );

    // const meetingObj = await zoomHandler({ date, session, timeZone });

    await new Booking({
      student: studentId,
      tutor: tutorId,
      date,
      startedTime,
      endedTime,
      timeZone,
      session,
      fee: amount,
      tutorFee: platformCharge,
      // tutorJoinLink: meetingObj.start_url,
      // studentJoinLink: meetingObj.join_url,
    }).save();

    await sendEmailHandler({
      tutorName,
      tutorEmail,
      studentName,
      studentEmail,
      date: moment(date).format("LL"),
      startedTime,
      session,
      fee: amount,
      tutorFee: platformCharge,
      // tutorJoinLink: meetingObj.start_url,
      // studentJoinLink: meetingObj.join_url,
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.clientSecret }),
      { status: 200 }
    );
  } catch {
    return serverError();
  }
};

export const PUT = async (request) => {
  try {
    await dbConnect();
    const { id, review, reviewText } = await request.json();
    const obj = {
      review,
      reviewText,
    };
    const response = await Booking.findOneAndUpdate({ _id: id }, obj, {
      new: true,
    });
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return serverError();
  }
};
