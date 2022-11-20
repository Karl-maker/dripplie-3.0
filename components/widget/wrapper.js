/**
 *
 * @author Karl-Johan Bailey
 * @created 19/11/2022
 * @desc This keeps a consistent design with all boxes within the UI. This keeps the general shape for all posts
 *
 */

import { Box } from "@mui/material";

export default function Wrapper({ children, width = 200, height = 200 }) {
  const borderRadius = "20px",
    padding = "0px";

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height,
        width,
        borderRadius,
        padding,
      }}
    ></Box>
  );
}
