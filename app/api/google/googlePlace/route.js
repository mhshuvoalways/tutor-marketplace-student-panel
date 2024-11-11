import serverError from "@/services/serverError";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { apiKey, address } = await request.json();
    if (apiKey) {
      const query = encodeURIComponent(address);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`
      );
      const result = await response.json();
      return new NextResponse(JSON.stringify(result), {
        status: 200,
      });
    }
  } catch {
    serverError();
  }
};
