import { createSlice } from "@reduxjs/toolkit";

let optionFromWeb = JSON.parse(localStorage.getItem("WheelOption")) || [];
let historyFromWeb = JSON.parse(localStorage.getItem("History")) || [];

const initialState = {
  options: optionFromWeb,
  history: historyFromWeb,
};

const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {
    addOption: (state, action) => {
      state.options.push(action.payload);
      localStorage.setItem("WheelOption", JSON.stringify(state.options));
    },
    removeOption: (state, action) => {
      state.options = state.options.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem("WheelOption", JSON.stringify(state.options));
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem("History", JSON.stringify(state.history));
    },
    removeHistory: (state, action) => {
      state.history = state.history.filter(
        (_, index) => index !== action.payload
      );
      localStorage.setItem("History", JSON.stringify(state.history));
    },
  },
});

export const { addOption, removeOption, addHistory, removeHistory } =
  wheelSlice.actions;
export default wheelSlice.reducer;
