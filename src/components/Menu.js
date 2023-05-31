import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import teamLogo from '../img/teamLogo.png';
import React, { useEffect, useState } from 'react';
import Clock from "./Clock";

const LogoWrapper = styled("a")({
  display: "flex",
  alignItems: "center",
});

const NavLinkWrapper = styled(Button)({
  color: "white",
  margin: "0 10px",
  fontSize: "16px",
  textTransform: "none",
});

const LogoutButton = styled(Button)({
  color: "white",
  fontSize: "12px",
  marginLeft: "auto",
  marginRight: "0",
});

function Menu() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <AppBar position="fixed" style={{ width: '100%', height: '60px' }} sx={{ backgroundColor: '#7A498A' }}>
      <Toolbar>
        <LogoWrapper href="/">
          <img src={teamLogo} alt="teamLogo" style={{ width: "100%", height: "100px" }} />
        </LogoWrapper>
        {/* <NavLinkWrapper href="/about">관리자 목록</NavLinkWrapper> */}
        {/* <NavLinkWrapper href="/about">관리자 등록</NavLinkWrapper> */}
        {/* <LogoutButton href="/about" sx={{ fontSize: 12, textTransform: "none" }}>LogOut</LogoutButton> */}
        <Box sx={{ marginLeft: "auto" }}>
          <Clock />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;