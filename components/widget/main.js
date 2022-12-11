import { Card, CardHeader, Avatar, Chip } from "@mui/material";
import UserInfo from "../user/user-info";
import Verified from "../user/verified";
import defaults from "./constants";
import Media from "./media";

export default function MainWidget({
  media,
  user,
  profile_img,
  verified,
  text,
}) {
  const height = "100%";
  return (
    <Card
      elevation={false}
      sx={{
        height,
        maxWidth: "90vw",
        borderRadius: defaults.borderRadius,
        position: "relative",
      }}
    >
      <CardHeader
        avatar={<Avatar src={profile_img} />}
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            {user}
            <div style={{ margin: 2 }} />
            {verified && <Verified />}
          </div>
        }
      />
      {media && <Media media={media} />}
    </Card>
  );
}
