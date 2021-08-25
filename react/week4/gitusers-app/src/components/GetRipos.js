import React, { useEffect, useState, useContext } from 'react';
import Modal from './Modal';
import { HandlerContext } from './GitBase';

export function GetRipos() {
  const { userName, ripos, setRipos } = useContext(HandlerContext);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        if (result.status !== 200) {
          throw new Error('fail to connect api for ripos');
        }
        const content = await result.json();
        const riposList = content;
        setRipos(prev => riposList.map(ripo => ripo.name));
      } catch (error) {
        setErrorMessage(prev => error.message);
      }
    })();
  }, [userName]);

  const riposLi = ripos.map((item, index) => <div key={index}>{item}</div>);

  return (
    <div>
      <Modal>
        {!riposLi.length && !errorMessage
          ? 'No ripo'
          : errorMessage
          ? errorMessage
          : riposLi}
      </Modal>
    </div>
  );
}
