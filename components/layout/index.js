import {
  Container,
  Box,
  Tabs,
  Tab,
  Button,
  IconButton,
  Typography,
  Skeleton,
} from "@mui/material";
import * as RiIcon from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import Flag from "react-world-flags";

import language from "../../constants/language";

/**
 *
 * @author Karl-Johan Bailey
 * @created 21/11/2022
 * @desc Provides layout for all pages
 *
 */

export default function Layout({ children }) {
  const [tabValue, setTabValue] = useState(0);
  const system = useSelector((state) => state.system);
  const shadow = "0px 5px 30px 1px rgba(10,10,10,0.1)";
  const NavStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "background.secondary",
    boxShadow: shadow,
    webkitBoxShadow: shadow,
    MozBoxShadow: shadow,
    zIndex: 2,
    width: "100%",
  };

  const ICON_SIZE = 20;
  const NavigationList = [
    {
      label: "Home",
      icon: <RiIcon.RiLayout4Fill size={ICON_SIZE} />,
      link: "",
    },
    {
      label: "Search",
      icon: <RiIcon.RiSearch2Line size={ICON_SIZE} />,
      link: "",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{ bgcolor: "background.default", height: "100%", minHeight: "100vh" }}
    >
      <Box component="nav" sx={NavStyle} position="fixed">
        <Box style={{ display: "flex" }}>
          {/* Logo */}
          <Box style={{ marginLeft: "20px" }}>
            <Typography color="text.primary">Dripplie</Typography>
          </Box>
          {/* Search Bar */}
        </Box>
        {/* Nav Options */}
        <Tabs
          direction="row"
          spacing={2}
          value={tabValue}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {NavigationList.map((item, index) => {
            return <Tab label={item.icon} key={index} sx={{ padding: 0 }} />;
          })}
        </Tabs>
        <Box sx={{ marginRight: "20px" }}>
          {/* <Button
          variant="contained"
          disableElevation
          maxWidth={40}
          sx={{
            textTransform: "none",
            borderRadius: "5px",
            color: "#ffff",
          }}
        >
          {language[system.language].auth.sign_up}
        </Button> */}

          <IconButton sx={{ width: 40, height: 40 }} disabled>
            {!system.location.code ? (
              <Skeleton height={24} width={34} />
            ) : (
              <Flag
                style={{ borderRadius: 2 }}
                code={system.location.code}
                height="14"
                width="24"
              />
            )}
          </IconButton>
        </Box>
      </Box>
      <main style={{ paddingTop: "50px" }}>{children}</main>
    </Box>
  );
}
