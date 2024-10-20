import { passwordChangeSchema } from "@/lib/utils/validations/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyAccount = createAsyncThunk(
  "myAccount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/auth/myAccount", {
        method: "GET",
      });
      return await response.json();
    } catch {
      return rejectWithValue(await response.json());
    }
  }
);

export const changeAvatar = createAsyncThunk(
  "changeAvatar",
  async (formData, { rejectWithValue }) => {
    if (formData) {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/mhshuvoalways/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        const result = await fetch(`/api/auth/myAccount`, {
          method: "PUT",
          body: JSON.stringify({
            public_id: data.public_id,
            url: data.url,
          }),
        });
        if (result.status === 200) {
          return await result.json();
        } else {
          return rejectWithValue(await result.json());
        }
      } else {
        return rejectWithValue({ message: "Something went wrong!" });
      }
    } else {
      return rejectWithValue({ message: "Upload an avatar!" });
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (password, { rejectWithValue }) => {
    try {
      passwordChangeSchema.parse(password);
      if (password.newPassword === password.confirmPassword) {
        const response = await fetch(`/api/auth/myAccount`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(password),
        });
        if (response.status === 200) {
          return await response.json();
        } else {
          return rejectWithValue(await response.json());
        }
      } else {
        return rejectWithValue({
          message: "New password and confirm password don't match!",
        });
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

export const myAccountSlice = createSlice({
  name: "myAccount",
  initialState: {
    isLoadingGet: false,
    isLoadingAvatar: false,
    isLoadingPassword: false,
    errors: {},
    successMessage: "",
    data: null,
  },
  reducers: {
    clearError: (state, action) => {
      state.successMessage = "";
      if (action.payload) {
        delete state.errors[action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // get my account
      .addCase(getMyAccount.pending, (state) => {
        state.isLoadingGet = true;
        state.errors = {};
      })
      .addCase(getMyAccount.fulfilled, (state, action) => {
        state.isLoadingGet = false;
        state.data = action.payload;
      })
      .addCase(getMyAccount.rejected, (state, action) => {
        state.isLoadingGet = false;
        state.errors = action.payload;
      })
      // change avatar
      .addCase(changeAvatar.pending, (state) => {
        state.isLoadingAvatar = true;
        state.errors = {};
      })
      .addCase(changeAvatar.fulfilled, (state, action) => {
        const { response, message } = action.payload;
        state.isLoadingAvatar = false;
        state.data = response;
        state.successMessage = message;
      })
      .addCase(changeAvatar.rejected, (state, action) => {
        state.isLoadingAvatar = false;
        state.errors = action.payload;
      })
      // change password
      .addCase(changePassword.pending, (state) => {
        state.isLoadingPassword = true;
        state.errors = {};
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        const { response, message } = action.payload;
        state.isLoadingPassword = false;
        state.data = response;
        state.successMessage = message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoadingPassword = false;
        state.errors = action.payload;
      });
  },
});

export const { clearError } = myAccountSlice.actions;

export default myAccountSlice.reducer;
