import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IPortalState {
  open: boolean;
}

const initialState: IPortalState = {
  open: false,
};

const portalSlice = createSlice({
  name: "portal",
  initialState,
  reducers: {
    setPortal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setPortal } = portalSlice.actions;
export default portalSlice.reducer;
