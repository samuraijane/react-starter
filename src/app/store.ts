import { configureStore } from "@reduxjs/toolkit";
import environmentReducer from "../features/environmentSlice";
import screenSizeReducer from "../features/screenSizeSlice";

export const store = configureStore({
  reducer: {
    environment: environmentReducer,
    screenSize: screenSizeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
