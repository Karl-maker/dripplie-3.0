/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Create system slice for redux store which stores information on device
 * @see Documentation @link https://react-redux.js.org/tutorials/quick-start
 *
 */

import { createSlice } from "@reduxjs/toolkit";

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    location: null,
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = systemSlice.actions;
export default systemSlice.reducer;
