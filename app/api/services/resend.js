import studentEmailTemplate from "@/lib/mail/studentEmailTemplate";
import tutorEmailTemplate from "@/lib/mail/tutorEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEmailHandler = async ({
  tutorEmail,
  studentEmail,
  tutorName,
  studentName,
  date,
  startedTime,
  session,
  fee,
  tutorFee,
  tutorJoinLink,
  studentJoinLink,
}) => {
  await resend.emails.send({
    from: "Tim's Tutor <noreply@mhshuvo.com>",
    to: tutorEmail,
    subject: "📝 A New Session Booked",
    react: tutorEmailTemplate({
      tutorName,
      studentName,
      date,
      startedTime,
      session,
      fee: tutorFee,
      tutorJoinLink,
    }),
  });
  await resend.emails.send({
    from: "Tim's Tutor <noreply@mhshuvo.com>",
    to: studentEmail,
    subject: "📚 Booking Confirmed with Your Tutor!",
    react: studentEmailTemplate({
      studentName,
      tutorName,
      date,
      startedTime,
      session,
      fee,
      studentJoinLink,
    }),
  });
};
