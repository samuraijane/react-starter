import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getEnvironment, EnvValues, LocationUrl } from './utils';

export const environmentSlice = createSlice({
  initialState: {} as EnvValues,
  name: "environment",
  reducers: {
    setEnvironment: (_, action: PayloadAction<LocationUrl>) => getEnvironment(action.payload)
  }
});

export const { setEnvironment } = environmentSlice.actions;
export const selectEnvironment = (state: RootState) => state.environment;

export default environmentSlice.reducer;
