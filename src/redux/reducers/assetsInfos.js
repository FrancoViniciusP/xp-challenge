import { createSlice } from '@reduxjs/toolkit';

const assetsInfos = createSlice({
  name: 'client',
  initialState: [{}],
  reducers: {
    setAllAssets(state, action) {
      return action.payload;
    },
  },
});

export const {
  setAllAssets,
} = assetsInfos.actions;

export default assetsInfos.reducer;
