import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageManager } from "@utils/localStorage";

export interface AuthState {
  token?: string;
  isAuthenticated: boolean;
}

const storedToken = LocalStorageManager.getItem("token");

const initialState: AuthState = {
  token: storedToken ? (storedToken as AuthState).token : undefined,
  isAuthenticated: storedToken ? (storedToken as AuthState).isAuthenticated : false,
};

const AuthSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      console.log("token", state.token);
      state.isAuthenticated = true;
    },
    resetToken: (state) => {
      state.token = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, resetToken } = AuthSlice.actions;
export default AuthSlice.reducer;
