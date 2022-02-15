import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    setInterval(updateTime1, 1000);
  }, []); // An empty array as the second param ensures it's run once

  const [time1, setTime1] = useState(new Date().toLocaleTimeString("en-GB"));
  const [time2, setTime2] = useState(new Date().toLocaleTimeString("en-GB"));

  function updateTime1() {
    setTime1(new Date().toLocaleTimeString("en-GB"));
  }

  function updateTime2() {
    setTime2(new Date().toLocaleTimeString("en-GB"));
  }

  return (
    <div className="container">
      <h1>{time1}</h1>
      <button onClick={updateTime2}>Get Time</button>
      <h1>{time2}</h1>
    </div>
  );
}

export default App;
