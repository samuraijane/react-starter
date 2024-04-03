import { configureStore } from "@reduxjs/toolkit";
import environmentReducer from "../features/environment-slice";
import screenSizeReducer from "../features/screen-size-slice";

export const store = configureStore({
  reducer: {
    environment: environmentReducer,
    screenSize: screenSizeReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
