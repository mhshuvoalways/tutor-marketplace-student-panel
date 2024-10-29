import myAccountSlice from "@/store/features/myAccountSlice";
import reviewSlice from "@/store/features/reviewSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      myAccount: myAccountSlice,
      review: reviewSlice,
    },
  });
};
