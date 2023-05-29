// import '../css/Table.css';
import React, { useRef, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function TableComponentDisplay({ data }) {
  const tableRef = useRef(null);
  const titleRef = useRef(null);

  // useEffect(() => {
  //   function handleScroll() {
  //     const tableTop = tableRef.current.getBoundingClientRect().top;
  //     const titleHeight = titleRef.current.offsetHeight;

  //     if (tableTop < titleHeight) {
  //       titleRef.current.style.top = `${-tableTop}px`;
  //     } else {
  //       titleRef.current.style.top = '0';
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div>
      <Sheet sx={{ height: 700, overflow: 'auto' }}>
        <Table     
        aria-label="table with sticky header"
        stickyHeader
        stripe="odd"
        hoverRow ref={tableRef}
        >
        <thead>
          <tr>
            <th style={{ width: '30%', textAlign: 'center', fontSize: '25px' }}>관측시간</th>
            <th style={{ width: '30%', textAlign: 'center', fontSize: '25px' }}>이름</th>
            <th style={{ width: '15%', textAlign: 'center', fontSize: '25px' }}>파워</th>
            <th style={{ width: '15%',textAlign: 'center', fontSize: '25px' }}>크기</th>
            <th style={{ width: '10%',textAlign: 'center', fontSize: '25px' }}>H+</th>



          </tr>
        </thead>
          <tbody>
            {
              data.map((alert, index) => (
              <tr key={`alert-${index}`}>
                <td>{alert.typ_date}</td>
                <td>{alert.typ_name}</td>
                <td>{alert.power}</td>
                <td>{alert.typ_size}</td>
                <td>{alert.after_time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>

    </div>
  );
}

export default TableComponentDisplay;