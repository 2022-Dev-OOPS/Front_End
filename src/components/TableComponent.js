// import '../css/Table.css';
import React, { useRef, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function TableComponent({ data }) {
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
            <th style={{ width: '80%', textAlign: 'center', fontSize: '25px' }}>특보</th>
            <th style={{ textAlign: 'center', fontSize: '25px' }}>지역</th>
          </tr>
        </thead>
          <tbody>
            {
              data.map((alert, index) => (
              <tr key={`alert-${index}`}>
                <td>{alert.title}</td>
                <td width={"40px"}>{alert.region}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>

    </div>
  );
}

export default TableComponent;