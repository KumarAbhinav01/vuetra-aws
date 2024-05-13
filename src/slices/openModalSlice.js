import { createSlice } from "@reduxjs/toolkit";

const openModalSlice = createSlice({
  name: "openModal",
  initialState: {
    open: false,
  },
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleOpen } = openModalSlice.actions;

export default openModalSlice.reducer;
