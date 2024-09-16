import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = appSlice.actions;
export default appSlice.reducer;
