import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import TableComponentDisplay from './TableComponentDisplay';

import ImageComponent from './ImageComponent';
import WallCountComponent from './WallCountComponent';

function Dashboard() {
  const [imagePower, setImagePower] = useState('NULL'); // power 초기값은 'NULL'로 설정
  const [specialAlerts, setSpecialAlerts] = useState([]);
  const [wallCheck, setWallCheck] = useState([]); // power 초기값은 'NULL'로 설정

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/load`)
  //     .then(response => {
  //       setSpecialAlerts(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/power`)
  //     .then(response => {
  //       setImagePower(response.data.power);
  //       console.log('LogTEST : '+response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);  

  // useEffect(() => {
  //   axios.get('test.json')
  //     .then(response => {
  //       setSpecialAlerts(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/past/information/0`)
      .then(response => {
        setSpecialAlerts(response.data.data);
        console.log('LogTEST : '+response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  
  
  useEffect(() => {
    axios.get('test2.json')
      .then(response => {
        setImagePower(response.data.data.power);
        console.log('LogTEST : '+response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  
  useEffect(() => {
    axios.get('test3.json')
      .then(response => {
        setWallCheck(response.data.data);
        console.log('LogTEST : '+response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);  
 
  return (
    <div style={{ width: '100%',  display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {/* <Card sx={{ width: '450px', height: '310px', m: '16px', ml : '32px' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          태풍 경로
        </Typography>
        <CardMedia
          component="img"
          image={tp}
          alt="태풍 사진"
        />
      </Card> */}
      <Card sx={{ width: '504px', height: '700px', m: '16px', mr: '30px', ml: '32px' }}>
        {/* <TableComponent data={specialAlerts} /> */}
        <TableComponentDisplay data={specialAlerts} />
      </Card>


      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Card sx={{ width: '320px', height: '240px', m: '16px', mr: '30px'}}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          부산 1지역
        </Typography>
        <CardMedia
          component="video"
          src="http://192.168.200.110:81/stream"
          autoPlay
          controls
        />
      </Card>
      <Card sx={{ width: '320px', height: '240px', m: '16px', mr: '30px' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          제주 1지역
        </Typography>
        <CardMedia
          component="video"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          // autoPlay
          controls
        />
      </Card>
      <Card sx={{ width: '320px', height: '240px', m: '16px', mr: '32px' }}>
      <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
        마산 1지역
      </Typography>
      <CardMedia
        component="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        // autoPlay
        controls
      />
      </Card>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Card sx={{ width: '600px', height: '400px', m: '16px', mr: '30px',mt:'44px'}}>
      <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
        위험도
      </Typography>
      <ImageComponent power={imagePower}/>
      </Card>
      <Card sx={{ width: '406px', height: '400px', m: '16px', mr: '30px',mt:'44px'}}>
        <WallCountComponent data={wallCheck}/>
      </Card>
      </div>
      </div>
    </div>

  );
}

export default Dashboard;