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
