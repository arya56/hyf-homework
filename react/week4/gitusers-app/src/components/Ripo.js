import React, { useContext } from 'react';
import { GetRipos } from './GetRipos';
import { HandlerContext } from './GitBase';

export default function Ripo() {
  const { userName } = useContext(HandlerContext);
  return (
    <div>
      <h2>Ripos of {userName}</h2>
      <GetRipos />
    </div>
  );
}
