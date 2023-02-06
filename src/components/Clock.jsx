import React, { useEffect, useState } from "react";

import "./clock.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div  className="container">
        <>The Currrent Time is:</><br/>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    </>
  );
}

export default Clock;
