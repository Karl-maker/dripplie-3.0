import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Create system slice for redux store which stores information on device
 * @see Documentation @link https://react-redux.js.org/tutorials/quick-start
 *
 */

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    location: null,
    language: "japanese",
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateLocation, updateLanguage } = systemSlice.actions;
export default systemSlice.reducer;
