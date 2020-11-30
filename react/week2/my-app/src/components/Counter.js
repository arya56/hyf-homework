import React, { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var timer = setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => {
      console.log('clean up');
      clearTimeout(timer);
    };
  }, [count]);

  return(
  <div>
    <p>You have used {count} seconds on this website</p>
  </div>
  );
}
