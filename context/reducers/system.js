import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Create system slice for redux store which stores information on device
 * @see https://react-redux.js.org/tutorials/quick-start
 *
 */

export const systemSlice = createSlice({
  name: "system",
  initialState: {
    location: {
      latitude: null,
      longitude: null,
      country: "",
      city: "",
    },
    language: "english",
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location.latitude = action.payload.latitude;
      state.location.longitude = action.payload.longitude;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateLocation, updateLanguage } = systemSlice.actions;
export default systemSlice.reducer;
