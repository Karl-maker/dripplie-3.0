import { useState, useRef } from "react";
import { Box, Button, Slide, Fade } from "@mui/material";

import WidgetWrapper from "./wrapper";
import defaults from "./constants";

/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc This is the default widget which takes children and media element then displays it
 *
 */

export default function Widget({
  children = <></>,
  media = null,
  showMedia = true,
  height = defaults.height,
  width = defaults.width,
  handleDisplayButtonClick,
}) {
  const { borderRadius, borderWidth } = defaults;
  const boxRef = useRef(null);

  /**
   * @desc Small button that toggles if media should be shown
   * @returns JSX button
   */

  const DisplayButton = () => {
    const buttonWidth = (width || defaults.width) / 1.5;
    return (
      <Box
        width="100%"
        sx={{
          position: "absolute",
          bottom: 1,
          height: "30px",
          bgcolor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleDisplayButtonClick}
      >
        <Button
          color="info"
          size="small"
          variant="outlined"
          disableElevation
          disabled={!media}
          sx={{
            borderWidth,
            borderRadius: "30px",
            "&:hover": {
              borderWidth,
            },
          }}
          height={10}
          width={buttonWidth}
        />
      </Box>
    );
  };

  return (
    <WidgetWrapper height={height} width={width}>
      <Box
        ref={boxRef}
        sx={{
          overflow: "hidden",
          position: "relative",
          borderRadius,
          zIndex: 1,
          padding: 0,
          margin: 0,
          border: !showMedia || !media ? borderWidth : 0,
          borderColor: "background.primary",
        }}
      >
        {/* Box has a position of absolute to keep media content there */}
        <Fade in={showMedia} timeout={{ exit: 600 }}>
          <Box
            height={height}
            width={width}
            sx={{
              position: "absolute",
              padding: 0,
              margin: 0,
              borderRadius,
            }}
          >
            {media || <></>}
          </Box>
        </Fade>

        {/* Box below uses Slide component to show content or child component */}
        <Box
          height={height}
          width={width}
          sx={{ padding: 0, margin: 0, borderRadius }}
        >
          <Slide
            direction="up"
            timeout={{
              enter: 700,
              exit: 700,
            }}
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
