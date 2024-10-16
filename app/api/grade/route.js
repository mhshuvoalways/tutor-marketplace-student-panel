import GradeModel from "@/app/models/GradeModel";
import { dbConnect } from "@/app/services/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await dbConnect();
    const { item } = await request.json();
    const response = await new GradeModel({ item }).save();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};

export const GET = async () => {
  try {
    await dbConnect();
    const response = await GradeModel.find();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (request) => {
  try {
    const { id, item } = await request.json();
    const response = await GradeModel.findOneAndUpdate(
      {
        _id: id,
      },
      { item: item }
    );
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (request) => {
  const { id } = await request.json();
  try {
    const response = await GradeModel.findOneAndDelete({
      _id: id,
    });
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Server error occured" }),
      {
        status: 500,
      }
    );
  }
};
