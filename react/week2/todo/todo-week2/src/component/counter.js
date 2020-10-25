import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, [count]);

  return <p className="counter"> You have used {count} seconds her</p>;
};
export default Counter;
