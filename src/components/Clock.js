import React, { useEffect, useState } from 'react';

function Clock() {
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinute(prevMinute => {
        if (prevMinute === 59) {
          setHour(prevHour => (prevHour === 23 ? 0 : prevHour + 1));
          return 0;
        } else {
          return prevMinute + 1;
        }
      });
    }, 1000); // 1초마다 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {hour.toString().padStart(2, '0')}시 {minute.toString().padStart(2, '0')}분
    </div>
  );
}

export default Clock;