/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Display user information
 *
 */

import { Typography, Chip, Avatar } from "@mui/material";

const UserInfo = ({ size = "normal", user, profile_img }) => {
  return (
    <Chip
      size={size}
      label={<Typography variant="caption">{user}</Typography>}
      avatar={<Avatar src={profile_img || null} alt={user} />}
      sx={{ bgcolor: "transparent" }}
    />
  );
};

export default UserInfo;
