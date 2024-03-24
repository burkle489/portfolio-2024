import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IGradientReadyState {
  ready: boolean;
}

const initialState: IGradientReadyState = { ready: false };

const gradientReadySlice = createSlice({
  name: "gradientReady",
  initialState,
  reducers: {
    setGradientReady: (state, action: PayloadAction<boolean>) => {
      state.ready = action.payload;
    },
  },
});

export const { setGradientReady } = gradientReadySlice.actions;
export default gradientReadySlice.reducer;
