// import '../css/Table.css';
import React, { useRef, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import '../css/TableComponent.css';

function TableComponentDisplay({ data }) {
  const tableRef = useRef(null);
  const titleRef = useRef(null);
  const hour  = sessionStorage.getItem('hour');
  const day  = sessionStorage.getItem('day');
  const month  = sessionStorage.getItem('month');
  const year  = sessionStorage.getItem('year');

  const formattedDate = year ? `${year}년${month ? ` ${month.length === 1 ? '0' + month : month}월${day ? ` ${day.length === 1 ? '0' + day : day}일${hour ? ` ${hour.length === 1 ? '0' + hour : hour}:00` : ''}` : ''}` : ''}` : '';

  return (
    <div>
      <Sheet sx={{ height: 700, overflow: 'auto' }}>
        <Table aria-label="table with sticky header" stickyHeader stripe="odd" ref={tableRef}>
          <thead>
            <tr>
              <th style={{ width: '20%', textAlign: 'center', fontSize: '20px' }}>관측시간</th>
              <th style={{ width: '30%', textAlign: 'center', fontSize: '20px' }}>이름</th>
              <th style={{ width: '20%', textAlign: 'center', fontSize: '20px' }}>파워</th>
              <th style={{ width: '20%', textAlign: 'center', fontSize: '20px' }}>크기</th>
              <th style={{ width: '10%', textAlign: 'center', fontSize: '20px' }}>H+</th>
            </tr>
          </thead>
          {data!=null ? (
            <tbody>
              {data.map((alert, index) => (
                <tr key={`alert-${index}`}>
                  <td style={{ fontSize: '13px', fontWeight: 'bold' }}>{formattedDate}</td>
                  <td style={{ fontSize: '25px' }}>{alert.typ_name}</td>
                  <td style={{ fontSize: '25px' }}>{alert.power}</td>
                  <td style={{ fontSize: '25px' }}>{alert.typ_size}</td>
                  <td style={{ fontSize: '19px' }}>{alert.after_time}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
              <td colSpan={5} style={{ textAlign: 'center', fontSize: '25px' }}>
                데이터가 없습니다.
              </td>
              </tr>
            </tbody>
          )}
        </Table>
      </Sheet>
    </div>
  );
}

export default TableComponentDisplay;