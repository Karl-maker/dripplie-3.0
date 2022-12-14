import { Typography, Chip, Avatar, Box } from "@mui/material";
import Verified from "./verified";

/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Display user information
 *
 */

const UserInfo = ({
  size = "normal",
  user,
  profile_img,
  verified,
  fontSize = 10,
  typographyStyle = {},
}) => {
  const marginRightName = 0.5;
  return (
    <Chip
      size={size}
      label={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="caption"
            sx={{ marginRight: marginRightName, fontSize, ...typographyStyle }}
          >
            {user}
          </Typography>
          {verified && <Verified />}
        </Box>
      }
      avatar={<Avatar src={profile_img || ""} alt={user} />}
      sx={{ bgcolor: "transparent" }}
    />
  );
};

export default UserInfo;
