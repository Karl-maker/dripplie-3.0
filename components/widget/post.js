import { Box } from "@mui/material";
import Image from "next/image";

import Widget from ".";
import defaults from "./defaults";

export default function Post({
  width = defaults.width,
  height = defaults.height,
  info,
}) {
  const padding = "10px";
  const { borderRadius } = defaults;
  const MediaDisplay = ({ src }) => {
    return (
      <img
        src={src}
        alt="Picture of the author"
        width={width}
        height={height}
        objectFit="fill"
      />
    );
  };

  return (
    <Widget
      width={width}
      height={height}
      media={
        <MediaDisplay
          src={`https://picsum.photos/${width * 2}/${height * 2}`}
        />
      }
    >
      <Box
        height={height}
        sx={{
          margin: 0,
          padding,
          borderRadius,
          bgcolor: "background.default",
        }}
      >
        hi
      </Box>
    </Widget>
  );
}
