import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScreenSizesName } from '../global-types/enums/screen-sizes';

interface ScreenSize {
  height: number;
  isMobile: boolean;
  name: ScreenSizesName;
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
export const selectScreemSize = (state: ScreenSize) => state;

export default screenSizeSlice.reducer;
