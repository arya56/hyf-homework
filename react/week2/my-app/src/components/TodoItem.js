import React, { useState } from 'react';

export function TodoItem({ description, deleteCallBack }) {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {checked ? <del>{description}</del> : <span>{description}</span>}
      <input type="checkbox" onChange={() => setChecked(!checked)} />
      <button onClick={() => deleteCallBack()}>Delete</button>
    </div>
  );
}
