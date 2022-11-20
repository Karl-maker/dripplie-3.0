/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Post widget for showing information
 *
 */

import { Box, Typography, Chip, Avatar } from "@mui/material";
import Image from "next/image";

import UserInfo from "../user/user-info";
import Widget from ".";
import defaults from "./defaults";

export default function Post({
  width = defaults.width,
  height = defaults.height,
  author = "",
  profile_img = "",
  verified = false,
  media,
  text = "",
}) {
  const padding = "10px";
  const { borderRadius } = defaults;
  const MediaDisplay = ({ src }) => {
    return (
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", padding: 1 }}>
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
          objectFit="fill"
        />
      </Box>
    );
  };

  return (
    <Widget
      width={width}
      height={height}
      media={media ? <MediaDisplay src={media.url} /> : null}
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
        {
          // Author information
        }
        <UserInfo user={author} profile_img={profile_img} verified={verified} />
      </Box>
    </Widget>
  );
}
