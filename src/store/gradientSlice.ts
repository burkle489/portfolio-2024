import { PayloadAction, current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IGradientState {
  colors: string[];
  text: string;
  previousColors: string[] | [];
  previousText: string;
}

const initialState: IGradientState = {
  colors: ["#FDEBE7", "#E9C8C3", "#FFCDD8", "#FD4F1B", "#FF954F"],
  text: `text-primary-slate-500`,
  previousColors: ["#FDEBE7", "#E9C8C3", "#FFCDD8", "#FD4F1B", "#FF954F"],
  previousText: `text-primary-slate-500`,
};

const gradientSlice = createSlice({
  name: "gradients",
  initialState,
  reducers: {
    setGradient: (state, action: PayloadAction<string[]>) => {
      state.previousColors = current(state).colors;
      state.colors = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.previousText = current(state).text;
      state.text = action.payload;
    },
    setGradientAndText: (
      state,
      action: PayloadAction<{ colors: string[]; text: string }>
    ) => {
      state.previousColors = current(state).colors;
      state.previousText = current(state).text;
      state.colors = action.payload.colors;
      state.text = action.payload.text;
    },
    setGradientForRestore: (
      state,
      action: PayloadAction<{ colors: string[]; text: string }>
    ) => {
      state.previousColors = current(state).colors;
      state.previousText = current(state).text;
      state.colors = action.payload.colors;
      state.text = action.payload.text;
    },
    restoreGradient: (state, action: PayloadAction) => {
      state.colors = current(state).previousColors;
      state.text = current(state).previousText;
    },
  },
});

export const {
  setGradient,
  setText,
  setGradientAndText,
  setGradientForRestore,
  restoreGradient,
} = gradientSlice.actions;
export default gradientSlice.reducer;
