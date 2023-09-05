import React from 'react';
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import teamLogo from '../img/teamLogo.png';
import Clock from "./Clock";
import Data from '../img/data.png'
import DCU from '../img/dcu.png'
import SDCU from '../img/sdcu.png'
import KMA from '../img/KMA.png'
import iKeeper from '../img/iKeeper.png'
const FooterWrapper = styled(AppBar)({
  width: '100%',
  backgroundColor: '#FFFFFFFF',
  top: 'auto',
  bottom: 0,
});

const FooterContainer = styled(Box)({
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LogoWrapper = styled("a")({
  display: "flex",
  alignItems: "center",
  margin: "0 15px",
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});


function Footer() {
  return (
    
    <FooterWrapper position="fixed">
      <FooterContainer>
      <div style={{ marginRight: '10px', marginLeft: '10px' }}>이정범</div>
        <LogoContainer>
          <LogoWrapper href="https://www.weather.go.kr">
            <img src={KMA} alt="기상청포털" style={{ width: "120px", height: "90%" }} />
          </LogoWrapper>
          <LogoWrapper href="https://www.data.go.kr">
            <img src={Data} alt="공공데이터포털" style={{ width: "200px", height: "90%" }} />
          </LogoWrapper>
          <LogoWrapper href="https://www.cu.ac.kr">
            <img src={DCU} alt="대구가톨릭대학교포털" style={{ width: "200px", height: "90%" }} />
          </LogoWrapper>
          <LogoWrapper href="https://sw.cu.ac.kr/">
            <img src={SDCU} alt="대구가톨릭대학교소프트웨어사업단포털" style={{ width: "200px", height: "90%" }} />
          </LogoWrapper>
           {/* <LogoWrapper href="https://www.facebook.com/cu.ikeeper">
            <img src={iKeeper} alt="i-Keeper" style={{ width: "200px", height: "90%" }} />
          </LogoWrapper> */}
        </LogoContainer>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;