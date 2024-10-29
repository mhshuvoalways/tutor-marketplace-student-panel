import stripe from "@/config/stripe";

export const createPaymentIntent = async ({ amount, tutorId, studentId }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      metadata: {
        tutorId,
        studentId: studentId.toString(),
      },
    });
    return { status: 200, clientSecret: paymentIntent.client_secret };
  } catch {
    return {
      status: 500,
      message: "Payment processing failed, please use a valid payment method.",
    };
  }
};
