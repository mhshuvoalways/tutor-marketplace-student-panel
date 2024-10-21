import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTutors = createAsyncThunk(
  "getTutors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/tutor", {
        cache: "no-store",
      });
      return await response.json();
    } catch {
      return rejectWithValue(await response.json());
    }
  }
);

export const tutorSlice = createSlice({
  name: "myAccount",
  initialState: {
    isLoadingGet: false,
    errors: {},
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get tutors
      .addCase(getTutors.pending, (state) => {
        state.isLoadingGet = true;
        state.errors = {};
      })
      .addCase(getTutors.fulfilled, (state, action) => {
        state.isLoadingGet = false;
        state.data = action.payload;
      })
      .addCase(getTutors.rejected, (state, action) => {
        state.isLoadingGet = false;
        state.errors = action.payload;
      });
  },
});

export const { clearError } = tutorSlice.actions;

export default tutorSlice.reducer;
