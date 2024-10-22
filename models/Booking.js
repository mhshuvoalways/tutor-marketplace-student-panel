import mongoose from "mongoose";
const { Schema, model, models, Types } = mongoose;

const bookingModel = new Schema(
  {
    student: {
      type: Types.ObjectId,
      ref: "auth",
    },
    tutor: {
      type: Types.ObjectId,
      ref: "auth",
    },
    date: {
      type: Date,
      required: true,
    },
    startedTime: {
      type: String,
      required: true,
      trim: true,
    },
    endedTime: {
      type: String,
      required: true,
      trim: true,
    },
    timeZone: {
      type: String,
      required: true,
      trim: true,
    },
    session: {
      type: String,
      required: true,
      trim: true,
    },
    fee: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.booking ?? model("booking", bookingModel);
