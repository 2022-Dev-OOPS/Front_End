import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import TableComponentDisplay from './TableComponentDisplay';
import ImageComponentDisplay from './ImageComponentDispaly';
import ImageComponent from './ImageComponent';
import WallCountComponent from './WallCountComponent';
import HLSPlayer from './HLSplayer';
import barrier from '../img/barrier.png';
function Dashboard() {
  const [video1Error, setVideo1Error] = React.useState(false);
  const [video2Error, setVideo2Error] = React.useState(false);

  const handleVideo1Error = () => {
    setVideo1Error(true);
  };

  const handleVideo2Error = () => {
    setVideo2Error(true);
  };

  const [imagePower, setImagePower] = useState('NULL');
  const [specialAlerts, setSpecialAlerts] = useState([]);
  const wallCheck = [
    { id: '고장난 차수벽', value: 2 },
    { id: '정상동작 차수벽', value: 1 },
    { id: '수리중 차수벽', value: 0 },
  ];
  let number = 0;
  const zxc = useState();

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/past/information/${number}`)
      .then(response => {
        setSpecialAlerts(response.data.data);
        console.log('LogTEST: ' + response);
        number++;

        axios.get(`${process.env.REACT_APP_API_URL}/api/past/information/danger`)
          .then(response => {
            setImagePower(response.data.data);
            console.log('LogTEST : ' + response.data.data);

            axios.post(`${process.env.REACT_APP_API_URL}/api/past/information/iot`, zxc)
              .then(response => {
                // console.log('LogTEST : ' + response.data.data);
              });
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 3 * 60 * 100);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {/* <Card sx={{ width: '450px', height: '310px', m: '16px', ml : '32px', mt : '32px' }}>
        <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left'}}>
          태풍 경로
        </Typography>
        <CardMedia
          component="img"
          image={tp}
          alt="태풍 사진"
        />
      </Card> */}
      <Card sx={{ width: '504px', height: '700px', mt: '120px', md: '16px', mr: '30px', ml: '32px' }}>
        {/* <TableComponent data={specialAlerts} /> */}
        <TableComponentDisplay data={specialAlerts} />
      </Card>


      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Card sx={{ width: '320px', height: '240px', mt: '120px', md: '16px', mr: '40px', ml: '16px' }}>
            <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left' }}>
              마산 1지역
            </Typography>
            <HLSPlayer />
          </Card>
          <Card sx={{ width: '320px', height: '240px', mt: '120px', md: '16px', mr: '40px' }}>
            <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left' }}>
              부산 1지역
            </Typography>
            {video1Error ? (
              <CardMedia
                component="img"
                src={barrier}
                alt="Video 1"
                style={{ width: '150px', height: '150px', display: 'block', margin: '0 auto' }}
              />
            ) : (
              <CardMedia
                component="video"
                src="https://www.w3schools.com/html/mov_bb.mp4"
                autoPlay
                controls
                onError={handleVideo1Error}
              />
            )}
          </Card>
          <Card sx={{ width: '320px', height: '240px', mt: '120px', md: '16px', mr: '32px' }}>
            <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left' }}>
              제주 1지역
            </Typography>
            {video1Error ? (
              <CardMedia
                component="img"
                src={barrier}
                alt="Video 2"
                style={{ width: '150px', height: '150px', display: 'block', margin: '0 auto' }}
              />
            ) : (
              <CardMedia
                component="video"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                controls
                onError={handleVideo1Error}
              />
            )}
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Card sx={{ width: '600px', height: '410px', m: '16px', mr: '30px', mt: '44px' }}>
            <Typography variant="h5" component="div" fontWeight="bold" sx={{ m: 2, textAlign: 'left' }}>
              위험도
            </Typography>
            <ImageComponentDisplay power={imagePower} />
          </Card>
          <Card sx={{ width: '406px', height: '410px', m: '16px', mr: '30px', mt: '44px' }}>
            <WallCountComponent data={wallCheck} />
          </Card>
        </div>
      </div>
    </div>

  );
}


export default Dashboard;