/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc This is the default widget which takes children and media element then displays it
 *
 */

import { useState, useRef } from "react";
import { Box, Button, Slide } from "@mui/material";

import WidgetWrapper from "./wrapper";
import defaults from "./defaults";

export default function Widget({
  children = <></>,
  media = null,
  displayMediaByDefault = true,
  height,
  width,
}) {
  const borderRadius = defaults.borderRadius;
  const [showMedia, setShowMedia] = useState(displayMediaByDefault);
  const boxRef = useRef(null);
  const toggleMedia = (e) => setShowMedia((show) => !show);

  /**
   * @desc Small button that toggles if media should be shown
   * @returns JSX button
   */

  const DisplayButton = () => {
    const buttonWidth = (width || defaults.width) / 2;
    return (
      <Box
        width="100%"
        sx={{
          position: "absolute",
          bottom: 5,
          bgcolor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          color="info"
          variant="contained"
          disableElevation
          disabled={!media}
          sx={{
            borderRadius: "30px",
          }}
          onClick={toggleMedia}
          height={5}
          width={buttonWidth}
        />
      </Box>
    );
  };

  return (
    <WidgetWrapper height={height} width={width}>
      <Box
        height="100%"
        width="100%"
        ref={boxRef}
        sx={{
          overflow: "hidden",
          position: "relative",
          borderRadius,
          zIndex: 1,
        }}
      >
        {/* Box has a position of absolute to keep media content there */}
        <Box
          height="100%"
          width="100%"
          sx={{ position: "absolute", zIndex: -1 }}
        >
          {media || <></>}
        </Box>

        {/* Box below uses Slide component to show content or child component */}
        <Box height="100%" width="100%">
          <Slide
            direction="up"
            in={!showMedia || !media}
            container={boxRef.current}
          >
            {children}
          </Slide>
        </Box>
        <DisplayButton />
      </Box>
    </WidgetWrapper>
  );
}
