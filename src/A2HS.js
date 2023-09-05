import React from 'react';
import { A2HSProvider } from 'react-a2hs';

const A2HSConfig = {
  title: '내 앱', // 타이틀 이름 수정
  startUrl: '/',
  icon: '/img/팀로고.jpg',
};

export const A2HS = ({ children }) => (
  <A2HSProvider config={A2HSConfig}>
    {children}
  </A2HSProvider>
);
