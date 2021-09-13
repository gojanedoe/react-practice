import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <button onClick={decrease}>subtract</button>
      <div>{count}</div>
      <button onClick={increase}>add</button>
    </div>
  );
}

export default App;
