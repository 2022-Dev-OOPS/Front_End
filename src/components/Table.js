import '../css/Table.css';
import React, { useRef, useEffect } from 'react';

function Table({ data }) {
  const tableRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const tableTop = tableRef.current.getBoundingClientRect().top;
      const titleHeight = titleRef.current.offsetHeight;

      if (tableTop < titleHeight) {
        titleRef.current.style.top = `${-tableTop}px`;
      } else {
        titleRef.current.style.top = '0';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="box">
      <h2 className="table-title">특보</h2>
      <table ref={tableRef}>
        <tbody>
          {data.map((alert) => (
            <tr key={alert.tmSeq}>
              <td>{alert.title}</td>
              <td width={"40px"}>{alert.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;