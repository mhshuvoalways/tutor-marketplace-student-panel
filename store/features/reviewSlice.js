import { reviewValidation } from "@/lib/utils/validations/review";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const writeReview = createAsyncThunk(
  "writeReview",
  async (review, { rejectWithValue }) => {
    try {
      reviewValidation.parse(review);
      const response = await fetch(`/api/booking`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      });
      if (response.status === 200) {
        const finalResult = await response.json();
        return finalResult;
      } else {
        return rejectWithValue(await response.json());
      }
    } catch (errors) {
      const formattedErrors = errors?.issues?.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      return rejectWithValue(formattedErrors);
    }
  }
);

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    isLoading: false,
    errors: {},
    data: null,
    isOpen: false,
  },
  reducers: {
    clearError: (state) => {
      state.errors = {};
    },
    modelHandler: (state) => {
      state.isOpen = !state.isOpen;
      state.errors = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(writeReview.pending, (state) => {
        state.isLoading = true;
        state.errors = {};
      })
      .addCase(writeReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isOpen = false;
      })
      .addCase(writeReview.rejected, (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export const { clearError, modelHandler } = reviewSlice.actions;

export default reviewSlice.reducer;
