import React, { useRef, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import '../css/TableComponent.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import test from '../img/team.png'
function TeamTable({ data }) {
  const tableRef = useRef(null);

  return (
<div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
        <CardMedia
          component="img"
          src={test}
          alt="Video 1"
          style={{ width: '500px', height: '500px', display: 'block', margin: '0 auto', marginBottom: '30px' }}
          />
      <Card sx={{ width: '1000px', height: '200px' }}>
        <Sheet sx={{ height: 1000, width: 1000 }}>
          <Table aria-label="table with sticky header" stickyHeader stripe="odd" ref={tableRef}>
            <thead>
              <tr>
                <th style={{ width: '10%', textAlign: 'center', fontSize: '23px' }}>이름</th>
                <th style={{ width: '20%', textAlign: 'center', fontSize: '23px' }}>소속</th>
                <th style={{ width: '10%', textAlign: 'center', fontSize: '23px' }}>학번</th>
                <th style={{ width: '30%', textAlign: 'center', fontSize: '23px' }}>역할</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr key={`student-${index}`}>
                  <td style={{ fontSize: '25px' }}>{student.name}</td>
                  <td style={{ fontSize: '25px' }}>{student.department}</td>
                  <td style={{ fontSize: '25px' }}>{student.studentId}</td>
                  <td style={{ fontSize: '25px' }}>{student.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Card>
    </div>
  );
}

export default TeamTable;