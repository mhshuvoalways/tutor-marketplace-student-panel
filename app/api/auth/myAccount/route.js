import { authConfig } from "@/auth.config";
import cloudinary from "@/config/cloudinary";
import { dbConnect } from "@/db/mongodb";
import AuthModel from "@/models/AuthModel";
import ProfileModel from "@/models/ProfileModel";
import serverError from "@/services/serverError";
import bcrypt from "bcrypt";
import Cloudinary from "cloudinary";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const { auth } = NextAuth(authConfig);
    const session = await auth();
    const email = session.user.email;
    const authResponse = await AuthModel.findOne({ email });
    const response = await ProfileModel.findOne({
      user: authResponse._id,
    });
    const obj = {
      ...response._doc,
      provider: authResponse.provider,
      email: authResponse.email,
    };
    return new NextResponse(JSON.stringify(obj), { status: 200 });
  } catch {
    return serverError();
  }
};

export const PUT = async (request) => {
  try {
    const { public_id, url } = await request.json();
    await dbConnect();
    cloudinary();
    const { auth } = NextAuth(authConfig);
    const session = await auth();
    const email = session.user.email;
    const authResponse = await AuthModel.findOne({ email });
    const response = await ProfileModel.findOneAndUpdate(
      {
        user: authResponse._id,
      },
      { avatar: { public_id, url } }
    );
    Cloudinary.v2.uploader.destroy(response.avatar.public_id);
    const obj = {
      ...response._doc,
      provider: authResponse.provider,
      email: authResponse.email,
    };
    return new NextResponse(
      JSON.stringify({
        response: obj,
        message: "Avatar updated!",
      }),
      { status: 200 }
    );
  } catch {
    return serverError();
  }
};

export const POST = async (request) => {
  try {
    await dbConnect();
    const { name, currentPassword, newPassword } = await request.json();
    const { auth } = NextAuth(authConfig);
    const session = await auth();
    const email = session.user.email;
    const user = await AuthModel.findOne({ email });
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return new NextResponse(
        JSON.stringify({
          message: "Current password doesn't match!",
        }),
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await AuthModel.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );
    const response = await ProfileModel.findOneAndUpdate(
      { user: user._id },
      { name },
      { new: true }
    );
    const obj = {
      ...response._doc,
      provider: user.provider,
      email: user.email,
    };
    return new NextResponse(
      JSON.stringify({
        message: "Password changed successfully!",
        response: obj,
      }),
      { status: 200 }
    );
  } catch {
    return serverError();
  }
};
