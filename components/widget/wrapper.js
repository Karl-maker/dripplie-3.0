/**
 *
 * @author Karl-Johan Bailey
 * @created 19/11/2022
 * @desc This keeps a consistent design with all boxes within the UI. This keeps the general shape for all posts
 *
 */

import { Box } from "@mui/material";

import defaults from "./constants";

export default function WidgetWrapper({
  children,
  width = defaults.width,
  height = defaults.height,
}) {
  const borderRadius = defaults.borderRadius,
    padding = "0px";

  return (
    <Box
      sx={{
        bgcolor: "transparent",
        height,
        width,
        borderRadius,
        padding,
        padding: 0,
      }}
    >
      {children}
    </Box>
  );
}
