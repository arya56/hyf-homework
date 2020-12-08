import React, { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var timer = setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return(
  <div>
    <p>You have used {count} seconds on this website</p>
  </div>
  );
}
