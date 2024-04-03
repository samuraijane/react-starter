import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewportNames } from '../types/enum';

export interface ScreenSize {
  height: number;
  isMobile: boolean;
  name: ViewportNames;
  width: number;
}

export const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState: {} as ScreenSize | Object,
  reducers: {
    setScreenSize: (_, action: PayloadAction<ScreenSize>) => action.payload
  }
});

export const { setScreenSize } = screenSizeSlice.actions;
export const selectScreenSize = (state: {screenSize: ScreenSize}) => (
  state.screenSize
);

export default screenSizeSlice.reducer;
