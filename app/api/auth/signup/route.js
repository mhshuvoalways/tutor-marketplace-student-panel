import { verifyEmail } from "@/app/api/services/verifyEmail";
import { dbConnect } from "@/db/mongodb";
import AuthModel from "@/models/AuthModel";
import ProfileModel from "@/models/ProfileModel";
import serverError from "@/services/serverError";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();
    const findUser = await AuthModel.findOne({ email });
    if (!findUser) {
      const hashed = await bcrypt.hash(password, 10);
      const userObj = {
        email,
        password: hashed,
        provider: "credential",
      };
      const auth = await new AuthModel(userObj).save();
      const profileObj = {
        name,
        user: auth._id,
      };
      verifyEmail({ ...profileObj, email });
      const response = await new ProfileModel(profileObj).save();
      return new NextResponse(JSON.stringify(response), { status: 200 });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "User already exit!" }),
        {
          status: 400,
        }
      );
    }
  } catch {
    serverError();
  }
};
