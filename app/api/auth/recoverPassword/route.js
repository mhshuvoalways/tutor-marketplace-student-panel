import { dbConnect } from "@/db/mongodb";
import AuthModel from "@/models/AuthModel";
import serverError from "@/services/serverError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { token, newPassword } = await request.json();
  try {
    const result = await jwt.verify(token, process.env.AUTH_SECRET);
    try {
      await dbConnect();
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const authRes = await AuthModel.findOneAndUpdate(
        { _id: result._id },
        { password: hashedPassword },
        { new: true }
      );
      return new NextResponse(JSON.stringify(authRes), { status: 200 });
    } catch {
      return serverError();
    }
  } catch {
    serverError();
  }
};
