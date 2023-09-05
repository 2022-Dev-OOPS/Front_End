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
// const handleLogoClick = (event) => {
//   event.preventDefault();
//   // 추가로 실행할 로직이 있다면 이곳에 작성합니다.
// };
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
    <AppBar position="fixed" style={{ width: '100%', height: '60px' }} sx={{ backgroundColor: '#3855293' }}>
      <Toolbar>
      {/* <LogoWrapper href="/" onClick={handleLogoClick}> */}
      <LogoWrapper href="/" >

          <img src={teamLogo} alt="teamLogo" style={{ width: "100%", height: "100px" }} />
        </LogoWrapper>
        <NavLinkWrapper href="/" style={{ fontSize: '20px', marginLeft: '30px' }}>대시보드</NavLinkWrapper>

        <NavLinkWrapper href="/teamtable" style={{ fontSize: '20px', marginLeft: '30px' }}>팀 소개</NavLinkWrapper>

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