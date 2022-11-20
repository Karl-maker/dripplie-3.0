/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Creating theme and sending it to _app.js, here you can add new themes and configure their palette
 *
 */

import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const colorTheme = {
  // TODO Add all theme colors for dark, light and others (holidays)
  light: createTheme({
    palette: {
      primary: {
        main: colors.light.text.primary,
      },
      background: {
        default: colors.light.background.default,
        paper: colors.light.background.paper,
      },
    },
  }),
};

export default colorTheme["light"];
