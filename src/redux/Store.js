import { configureStore } from "@reduxjs/toolkit";
import wheelReducer from "./WheelSlice";

const store = configureStore({
  reducer: {
    wheel: wheelReducer,
  },
});

export default store;
