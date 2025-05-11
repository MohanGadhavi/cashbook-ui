import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './slices/deviceSlice';

const store = configureStore({
  reducer: {
    device: deviceReducer,
  },
});

export default store;
