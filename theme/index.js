/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Creating theme and sending it to _app.js, here you can add new themes and configure their palette
 *
 */

import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = "dark";
const colorTheme = {
  // TODO Add all theme colors for dark, light and others (holidays)
  light: createTheme({
    typography: {
      primary: colors[theme].text.primary,
    },
    palette: {
      text: {
        primary: colors[theme].text.primary,
      },
      primary: {
        main: colors[theme].primary,
      },
      secondary: {
        main: colors[theme].text.primary,
      },
      info: {
        main: colors[theme].info,
      },
      background: {
        default: colors[theme].background.default,
        paper: colors[theme].background.paper,
        primary: colors[theme].background.primary,
        secondary: colors[theme].background.secondary,
      },
    },
  }),
};

export default colorTheme["light"];
