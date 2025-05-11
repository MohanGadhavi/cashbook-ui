import { createSlice } from '@reduxjs/toolkit';

const getDeviceType = (width) => {
  if (width <= 767) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
};

const initialState = {
  deviceType: getDeviceType(window.innerWidth),
  mainDivType: getDeviceType(window.innerWidth),
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    updateDeviceType: (state, action) => {
      state.deviceType = getDeviceType(action.payload);
    },
    updateMainDivType: (state, action) => {
      state.mainDivType = getDeviceType(action.payload);
    },
  },
});

export const { updateDeviceType, updateMainDivType } = deviceSlice.actions;
export default deviceSlice.reducer;
