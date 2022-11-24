import { configureStore } from "@reduxjs/toolkit";
import system from "./reducers/system";

/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Centralized point for reducers
 * @see Documentation @link https://react-redux.js.org/tutorials/quick-start
 *
 */

export default configureStore({
  reducer: { system },
});
