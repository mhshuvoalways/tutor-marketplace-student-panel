import serverError from "@/services/serverError";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { apiKey, placeId } = await request.json();
    if (apiKey) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
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
