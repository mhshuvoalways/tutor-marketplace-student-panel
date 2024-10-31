import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const authModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      min: 6,
      max: 20,
    },
    isVerified: {
      type: String,
      default: false,
    },
    role: {
      type: String,
      default: "student",
    },
    provider: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default models.auth ?? model("auth", authModel);
