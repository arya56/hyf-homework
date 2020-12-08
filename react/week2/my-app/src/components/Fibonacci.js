import React, { useState, useEffect } from 'react';
export function Fibonacci() {
  const [counterState, setCounterState] = useState([0, 1]);
  const [triggerFibo, SetTriggerFibo] = useState(false);
  const increment = () => {
    const newElement =
      counterState[counterState.length - 1] +
      counterState[counterState.length - 2];
    setCounterState([...counterState, newElement]);
  };
  useEffect(() => {
    var timer = setTimeout(() => {
      if (counterState.length % 10 !== 0) {
        increment();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [counterState]);
  return (
    <div>
      <button onClick={() => SetTriggerFibo(true)}>Fibonacci</button>
      {triggerFibo &&
        counterState.map((counter, index) => <div key={index}>{counter}</div>)}
    </div>
  );
}
