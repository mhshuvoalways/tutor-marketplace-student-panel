import myAccountSlice from "@/store/features/myAccountSlice";
import tutorSlice from "@/store/features/tutorSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      myAccount: myAccountSlice,
      tutor: tutorSlice,
    },
  });
};
