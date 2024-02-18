import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../features/screenSizeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
