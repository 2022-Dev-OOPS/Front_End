import React, { useState, useEffect } from 'react';
import tp from '../img/tp.jpg';
import Table  from  './TableComponent';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import TableComponent from './TableComponent';

export default function FlexGrow() {
  const [imagePower, setImagePower] = useState('NULL'); // power 초기값은 'NULL'로 설정
  const [specialAlerts, setSpecialAlerts] = useState([]);

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
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Card sx={{ width: '450px', height: '310px', m: '16px', ml : '32px' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          태풍 경로
        </Typography>
        <CardMedia
          component="img"
          image={tp}
          alt="태풍 사진"
        />
      </Card>
      <Card sx={{ width: '260px', height: '205px', m: '16px'}}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          부산
        </Typography>
        <CardMedia
          component="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          controls
        />
      </Card>
      <Card sx={{ width: '260px', height: '205px', m: '16px' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          제주
        </Typography>
        <CardMedia
          component="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          controls
        />
      </Card>
      <Card sx={{ width: '260px', height: '205px', m: '16px' }}>
      <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
        부산
      </Typography>
      <CardMedia
        component="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        controls
      />
    </Card>
    </div>
    <Card sx={{ width: '504px', height: '310px', m: '16px' }}>
      <TableComponent data={specialAlerts} />
    </Card>
  </div>
  );
}