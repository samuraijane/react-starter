import { configureStore } from "@reduxjs/toolkit";
import environmentReducer from "../features/environment-slice";
import viewportReducer from "../features/viewport-slice";

export const store = configureStore({
  reducer: {
    environment: environmentReducer,
    viewport: viewportReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
