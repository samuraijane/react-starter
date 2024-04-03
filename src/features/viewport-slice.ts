import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ViewportNames } from '../types/enum';

export interface ViewportSlice {
  height: number;
  isMobile: boolean;
  name: ViewportNames;
  width: number;
}

export const viewportSlice = createSlice({
  name: "viewport",
  initialState: {} as ViewportSlice | Object,
  reducers: {
    setViewport: (_, action: PayloadAction<ViewportSlice>) => action.payload
  }
});

export const { setViewport } = viewportSlice.actions;
export const selectViewport = (state: {viewport: ViewportSlice}) => (
  state.viewport
);

export default viewportSlice.reducer;
