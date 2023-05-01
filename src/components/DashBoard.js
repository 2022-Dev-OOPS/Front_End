import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/DashBoard.css';
import SubComponent from './SubComponent';
import tp from '../img/tp.jpg';
import Table  from  './TableComponent';
import ImageComponent from './ImageComponent';

function Dashboard() {
  const [specialAlerts, setSpecialAlerts] = useState([]);
  const [imagePower, setImagePower] = useState('NULL'); // power 초기값은 'NULL'로 설정

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/load`)
      .then(response => {
        setSpecialAlerts(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/power`)
      .then(response => {
        setImagePower(response.data.power);
        console.log('LogTEST : '+response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>
        <SubComponent title="태풍 경로" imageSrc={tp} width="450px" />
        <SubComponent title="마산" videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
        <SubComponent title="부산" videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
        <SubComponent title="제주" videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      </div>
      <div>
        <Table data={specialAlerts} />
        <ImageComponent/>
      </div>
    </div>
  );
}

export default Dashboard;