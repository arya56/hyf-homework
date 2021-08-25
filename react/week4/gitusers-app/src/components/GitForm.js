import React, { useState, useContext } from 'react';
import './Git.css';
import { HandlerContext } from './GitBase';

export default function GitForm() {
  const { setUserName, setUserIsLoaded } = useContext(HandlerContext);
  const [user, setUser] = useState('');
  const handler = e => {
    setUser(e.target.value);
    setUserName(e.target.value);
    setUserIsLoaded(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for user"
        value={user}
        onChange={e => handler(e)}
      />
    </div>
  );
}
