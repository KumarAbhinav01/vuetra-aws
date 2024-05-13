import { configureStore } from "@reduxjs/toolkit";
import { openModalSliceReducer, themeSliceReducer } from "./slices";

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
    openModal: openModalSliceReducer,
  },
});
