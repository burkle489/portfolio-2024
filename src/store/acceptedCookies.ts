import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface IAcceptedCookies {
  accepted: boolean;
}

const initialState: IAcceptedCookies = {
  accepted: Cookies.get("cookies-accepted") ? true : false,
};

const acceptedCookiesSlice = createSlice({
  name: "acceptedCookies",
  initialState,
  reducers: {
    setAcceptedCookies: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        Cookies.set("cookies-accepted", "accepted", {
          expires: 31,
          sameSite: "None",
          secure: true,
        });
        state.accepted = action.payload;
      } else {
        Cookies.remove("cookies-accepted", {
          sameSite: "None",
          secure: true,
        });
      }
    },
  },
});

export const { setAcceptedCookies } = acceptedCookiesSlice.actions;
export default acceptedCookiesSlice.reducer;
