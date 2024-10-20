import myAccountSlice from "@/store/features/myAccountSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      myAccount: myAccountSlice,
    },
  });
};
