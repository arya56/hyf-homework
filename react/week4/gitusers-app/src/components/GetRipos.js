import React, { useEffect, useState, useContext, useRef } from 'react';
import Modal from './Modal';
import { HandlerContext } from './GitBase';
import { Data } from './newData';
export function GetRipos() {
  console.log('GetRipos');
  // {ripos, setRipos}
  // let  riposList2='';
  const { userName } = useContext(HandlerContext);
  // const [ ripos, setRipos ] =useState([]);
  const ripos = useRef([]);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(userName);
  useEffect(() => {
    (async () => {
      try {
        const result = Data;
        // await fetch(
        //   `https://api.github.com/users/${userName}/repos`
        // );
        console.log('Data', result);
        // if (result.status !== 200) {
        //   console.log(result.status);
        //   throw new Error('fail to connect api for ripos');
        // }
        // const content = await result.json();
        // const riposList = content;
        const riposList = result;
        ripos.current = riposList.map(ripo => ripo.name);
        console.log('ripos', ripos.current);
        // setRipos(prev =>
        //   // riposList.map(ripo => ripo.name);
        //   result.map(ripo => ripo.name)

        // );
        // console.log('Ripo',ripos);
        // riposList2=riposList.map(ripo => ripo.name);
      } catch (error) {
        setErrorMessage(prev => error.message);
      }
    })();
  });

  console.log('ripos', ripos.current);
  const riposLi = ripos.current.map((item, index) => <div key={index}>{item}</div>);

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
