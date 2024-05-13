import { createSlice } from "@reduxjs/toolkit";

const mode = localStorage.getItem("mode") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: mode,
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("mode", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
