import { dbConnect } from "@/db/mongodb";
import SubjectModel from "@/models/SubjectModel";
import serverError from "@/services/serverError";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    await dbConnect();
    const response = await SubjectModel.find();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    serverError();
  }
};
