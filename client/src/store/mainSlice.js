import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: null,
  photos: []
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload;
    },
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
    clearAllPhotos: (state) => {
      state.photos = [];
    },
    deletePhoto: (state, action) => {
      state.photos = state.photos.filter((photo) => photo !== action.payload);
    }
  }
});

export const mainAtions = mainSlice.actions;
export default mainSlice.reducer;
