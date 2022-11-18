/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Centralized point for reducers
 * @see Documentation @link https://react-redux.js.org/tutorials/quick-start
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import system from "./reducers/system";

export default configureStore({
  reducer: { system },
});
