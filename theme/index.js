/**
 *
 * @author Karl-Johan Bailey
 * @created 18/11/2022
 * @desc Providing WebApp with consistent themes for darkmode, lightmode and others.
 *
 */

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import colors from "./colors";

const colorTheme = {
  // Color focused
  light: createTheme({
    palette: {
      primary: {
        main: colors.light.text.primary,
      },
    },
  }),
};

const designTheme = {
  // Borders, Shadows, etc
  default: createTheme({}),
};

export default function Theme({ children }) {
  return (
    <ThemeProvider
      theme={{ ...colorTheme["light"], ...designTheme["default"] }}
    >
      {children}
    </ThemeProvider>
  );
}
