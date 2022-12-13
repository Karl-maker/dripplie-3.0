import { Typography } from "@mui/material";
import { useState } from "react";
import UserInfo from "../user/user-info";
import defaults from "./constants";
import Media from "./media";

export default function MainWidget({
  media,
  user,
  profile_img,
  verified,
  text,
}) {
  const [showText, setShowText] = useState(true);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          height: "80%",
          maxWidth: "80vw",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "0%",
            padding: "20px",
          }}
        >
          {
            // User Info
          }
          <UserInfo
            size="large"
            user={user}
            profile_img={profile_img}
            verified={verified}
            typographyStyle={{
              fontSize: 11,
              fontWeight: "bold",
              color: "#ffff",
            }}
          />
          {showText && (
            <div>
              <Typography variant="caption">{text}</Typography>
            </div>
          )}
        </div>
        {media && <Media media={media} />}
      </div>
    </div>
  );
}
