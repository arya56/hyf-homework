import React, { useContext, useState } from 'react';
import { GetRipos } from './GetRipos';
import { HandlerContext } from './GitBase';

export default function Ripo() {
  const { userName } = useContext(HandlerContext);
  // const [ripos, setRipos] = useState([]);
  // ripos={ripos} setRipos={setRipos}
  console.log('Ripo');
  return (
    <div>
      <h2>Ripos of {userName}</h2>
      <GetRipos  />
    </div>
  );
}
