/**
 *
 * @author Karl-Johan Bailey
 * @created 21/11/2022
 * @desc Provides layout for all pages
 *
 */

import { Container, Box, Tabs, Tab, Button, Typography } from "@mui/material";
import { RiLayout4Fill, RiCalendarFill, RiEarthFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";

import language from "../../constants/language";

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

  const ICON_SIZE = 25;

  const NavigationList = [
    {
      label: "Home",
      icon: <RiLayout4Fill size={ICON_SIZE} />,
      link: "",
    },
    {
      label: "Events",
      icon: <RiCalendarFill size={ICON_SIZE} />,
      link: "",
    },
    {
      label: "Global",
      icon: <RiEarthFill size={ICON_SIZE} />,
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
            return <Tab label={item.icon} key={index} sx={{ padding: 2 }} />;
          })}
        </Tabs>
        <Box sx={{ marginRight: "20px" }}>
          <Button
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
          </Button>
        </Box>
      </Box>
      <main style={{ paddingTop: "50px" }}>{children}</main>
    </Box>
  );
}
