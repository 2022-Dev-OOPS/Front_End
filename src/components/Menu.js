import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/system";
import teamLogo from '../img/teamLogo.png';
import React from 'react';

const LogoWrapper = styled("a")({
  display: "flex",
  alignItems: "center",
});

const NavLinkWrapper = styled(Button)({
  color: "white",
  margin: "0 10px",
  fontSize: "16px", // 원하는 폰트 크기로 변경
  textTransform: "none", // 모든 문자를 소문자로 변환하지 않도록 설정

  
});
const LogoutButton = styled(Button)({
  color: "white",
  fontSize: "12px",
  marginLeft: "auto",
  marginRight: "0",
});
function Menu() {
  return (
    <AppBar position="fixed" style={{ width: '100%', height: '60px' }} sx={{ backgroundColor: '#7A498A' }}>
      <Toolbar>
        <LogoWrapper href="/">
          <img src={teamLogo} alt="teamLogo" style={{ width: "100%", height: "100px" }} />
        </LogoWrapper>
        <NavLinkWrapper href="/about">관리자 목록</NavLinkWrapper>
        <NavLinkWrapper href="/about">관리자 등록</NavLinkWrapper>
        <LogoutButton href="/about" sx={{ fontSize: 12, textTransform: "none" }}>LogOut</LogoutButton>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;