import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: null
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload;
    }
  }
});

export const mainAtions = mainSlice.actions;
export default mainSlice.reducer;
