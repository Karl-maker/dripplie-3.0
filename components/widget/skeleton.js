/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Loading component for UI's widget
 *
 */

import { Skeleton } from "@mui/material";

import defaults from "./defaults";

export default function WidgetSkeleton({
  height = defaults.height,
  width = defaults.width,
}) {
  const borderRadius = defaults.borderRadius;
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      sx={{ bgcolor: "background.paper", borderRadius }}
    />
  );
}
