import stripe from "@/config/stripe";

export async function createAccount(tutorEmail) {
  try {
    const response = await stripe.accounts.create({
      type: "standard",
      country: "US",
      email: tutorEmail,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });
    return { status: 200, accountId: response.id };
  } catch {
    return {
      status: 500,
      message:
        "Unable to create account, please ensure your account is activated.",
    };
  }
}
