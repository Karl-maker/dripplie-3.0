/**
 *
 * @author Karl-Johan Bailey
 * @created 20/11/2022
 * @desc Display user information
 *
 */

import { Typography, Chip, Avatar, Box } from "@mui/material";
import { GoVerified } from "react-icons/go";

const UserInfo = ({ size = "normal", user, profile_img, verified }) => {
  const marginRightName = 0.5;
  return (
    <Chip
      size={size}
      label={
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="caption" sx={{ marginRight: marginRightName }}>
            {user}
          </Typography>
          {verified && <GoVerified color="#0984e3" />}
        </Box>
      }
      avatar={<Avatar src={profile_img || ""} alt={user} />}
      sx={{ bgcolor: "transparent" }}
    />
  );
};

export default UserInfo;
