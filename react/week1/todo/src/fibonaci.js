import React, { useState } from 'react';
export function Fibonaci() {
  const [counterState, setCounterState] = useState([0, 1]);
  // ... some code here
  const increment = () => {
    const newElement =
      counterState[counterState.length - 1] +
      counterState[counterState.length - 2];
    setCounterState([...counterState, newElement]);
  };

  return (
    <div>
      {counterState.map(counter => (
        <div>{counter}</div>
      ))}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
