import { createPaymentIntent } from "@/app/api/services/createPaymentIntent";
import { sendEmailHandler } from "@/app/api/services/resend";
import { zoomHandler } from "@/app/api/services/zoom";
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
    const studentEmail = mySession.user.email;

    const studentAuthResponse = await AuthModel.findOne({
      email: studentEmail,
    });

    const { _id: studentId } = studentAuthResponse;

    const studentProfile = await StudentProfileModel.findOne({
      user: studentId,
    });

    const { name: studentName } = studentProfile;

    const tutorAuthResponse = await AuthModel.findById(tutorId);

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
    const platformCharge =
      amount - (amount * adminResponse.platformCharge) / 100;

    await TutorProfileModel.findOneAndUpdate(
      { user: tutorId },
      { $inc: { balance: 10 } }
    );

    const meetingObj = await zoomHandler({ date, session, timeZone });

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
      tutorJoinLink: meetingObj.start_url,
      studentJoinLink: meetingObj.join_url,
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
      tutorJoinLink: meetingObj.start_url,
      studentJoinLink: meetingObj.join_url,
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
