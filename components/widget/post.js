import { Box, Typography, Chip, Avatar, Backdrop } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

import UserInfo from "../user/user-info";
import Widget from ".";
import defaults from "./constants";
import page from "../../constants/pages";
import Enlarged from "./enlarged";
import useOnClickOutside from "../../hooks/on-click-outside";

/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Post widget for showing information
 *
 */

export default function Post({
  maxWidth = defaults.maxWidth,
  width = defaults.width,
  height = defaults.height,
  author = "",
  profile_img = "",
  verified = false,
  media,
  text = "",
  post_id,
  onPostClick = () => {},
}) {
  const enlargedWidgetRef = useRef();
  const padding = "10px";
  const { borderRadius } = defaults;
  const router = useRouter();
  const [showMedia, setShowMedia] = useState(true);
  const [enlargedWidget, setEnlargedWidget] = useState(false);

  /* Event Handlers */

  // Click outside of enlarged widget

  useOnClickOutside(enlargedWidgetRef, () => setEnlargedWidget(false));

  const handleProfileClick = (e) => {
    e.stopPropagation();
    router.push(`${page.PROFILE}/${author}`); // Send to profile/user-name
  };

  const handlePostClick = (e) => {
    e.preventDefault();
    setEnlargedWidget(true);
    onPostClick();
  };

  const toggleMedia = (e) => setShowMedia((show) => !show);

  /* Media Displayer */

  const MediaDisplay = ({ src }) => {
    return (
      <Box sx={{ position: "relative" }} onClick={toggleMedia}>
        <Box
          sx={{ position: "absolute", padding: 1.5 }}
          onClick={handleProfileClick}
        >
          <UserInfo
            user={author}
            profile_img={profile_img}
            size="small"
            verified={verified}
          />
        </Box>
        <img
          src={src}
          alt="post image"
          width={width}
          height={height}
          objectFit="none"
        />
      </Box>
    );
  };

  return (
    <>
      {/**
       * @desc Widget beside action that happens on click
       */}
      <Widget
        maxWidth={maxWidth}
        width={width}
        height={height}
        media={media ? <MediaDisplay src={media.url} /> : null}
        showMedia={showMedia}
        handleDisplayButtonClick={toggleMedia}
      >
        <Box
          height={height}
          sx={{
            margin: 0,
            padding,
            borderRadius,
            bgcolor: "background.secondary",
          }}
          onClick={handlePostClick}
        >
          {
            // Author information
          }
          <Box onClick={handleProfileClick}>
            <UserInfo
              user={author}
              profile_img={profile_img}
              verified={verified}
            />
          </Box>

          {
            // Text
          }
          <Typography
            variant="subtitle2"
            sx={{ marginTop: 0.5 }}
            color="text.primary"
          >
            {text}
          </Typography>
        </Box>
      </Widget>
      {/**
       * @desc To focus on media
       */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={enlargedWidget}
      >
        <div ref={enlargedWidgetRef}>
          <Enlarged />
        </div>
      </Backdrop>
    </>
  );
}
