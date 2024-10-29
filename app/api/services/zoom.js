import serverError from "@/services/serverError";

let zoomTokens = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
};

const refreshToken = async () => {
  if (Date.now() > zoomTokens.expiresIn) {
    const encodedCredentials = btoa(
      `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`
    );
    const response = await fetch("https://zoom.us/oauth/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: process.env.ZOOM_REFRESH_TOKEN,
      }),
    });
    const result = await response.json();
    zoomTokens.accessToken = result.access_token;
    zoomTokens.refreshToken = result.refresh_token;
    zoomTokens.expiresIn = Date.now() + result.expires_in * 1000;
  }
};

export const zoomHandler = async ({ date, session, timeZone }) => {
  await refreshToken();
  try {
    const meetingDetails = {
      topic: "Tutoring",
      type: 2,
      start_time: date,
      duration: session,
      timezone: timeZone,
    };
    const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${zoomTokens.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetingDetails),
    });
    const meetingObj = await response.json();
    return meetingObj;
  } catch {
    serverError();
  }
};
