import React, { useEffect, useState } from 'react';
import NanumGothicBold from '../fonts/NanumGothic-Bold.ttf';

function Clock() {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(15);
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setMinute(prevMinute => {
        if (prevMinute === 59) {
          setHour(prevHour => {
            if (prevHour === 23) {
              setDay(prevDay => {
                if (prevDay === getDaysInMonth(month, year)) {
                  setMonth(prevMonth => {
                    if (prevMonth === 12) {
                      setYear(prevYear => prevYear + 1);
                      return 1;
                    } else {
                      return prevMonth + 1;
                    }
                  });
                  return 1;
                } else {
                  return prevDay + 1;
                }
              });
              return 0;
            } else {
              return prevHour + 1;
            }
          });
          return 0;
        } else {
          return prevMinute + 1;
        }
      });
    }, 100); // 1초마다 갱신

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('hour', hour.toString());
  }, [hour]);

  useEffect(() => {
    sessionStorage.setItem('day', day.toString());
  }, [day]);

  useEffect(() => {
    sessionStorage.setItem('month', month.toString());
  }, [month]);

  useEffect(() => {
    sessionStorage.setItem('year', year.toString());
  }, [year]);

  const getDaysInMonth = (month, year) => {
    switch (month) {
      case 2:
        return isLeapYear(year) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  return (
    <div
      style={{
        fontSize: '20px',
        fontFamily: 'NanumGothic-Bold',
      }}
    >
      {`${year.toString().padStart(4, '0')}년 ${month
        .toString()
        .padStart(2, '0')}월 ${day
        .toString()
        .padStart(2, '0')}일 ${hour.toString().padStart(2, '0')}시 ${minute
        .toString()
        .padStart(2, '0')}분`}
    </div>
  );
}

export default Clock;