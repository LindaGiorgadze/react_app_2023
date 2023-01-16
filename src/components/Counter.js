import { useEffect, useState } from "react";

const Counter = ({ startNumber, increaseNumber, decreaseNumber }) => {
  const [number, setNumber] = useState(startNumber || 0);

  useEffect(() => {
    console.log("First Appearance");
  }, []);
  
  useEffect(() => {
    startNumber && setNumber(startNumber);
  }, [startNumber]);

  function increase(Increment) {
    setNumber(number + Increment);
  }
  function decrease(Decrement) {
    setNumber(number - Decrement);
  }

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <button onClick={() => decrease(decreaseNumber || 1)}>Decrease</button>
      <br />
      <span>{number}</span>
      <br />
      <button onClick={() => increase(increaseNumber || 1)}>Increase</button>
    </div>
  );
};

export default Counter;
