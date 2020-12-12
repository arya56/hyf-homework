import React, { useContext, useEffect, useState } from 'react';
import Nolist from './Nolist';
import Modal from './Modal';
import { HandlerContext } from './GitBase';
import Ripo from './Ripo';
import { GetRipos } from './GetRipos';

export default function GitList() {
  const {
    userName,
    userIsLoaded,
    setUserIsLoaded,
    setOnLoading,
    setFailsConnection,
    failsConnection,
  } = useContext(HandlerContext);

  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUserIsLoaded(true);
    if (userName !== '' && !userIsLoaded) {
      (async () => {
        setOnLoading(false);

        try {
          // const result = await fetch(
          //   'https://api.github.com/search/users?q=' + userName
          // );

          // if (result.status !== 200) {
          //   setFailsConnection(true);
          //   throw new Error('fail to connect api');
          // }
          setOnLoading(true);
          // const content = await result.json();
          // const usersList = content.items;
          setUsers('arya56');
          // setUsers(prev => usersList.map(user => user.login));
        } catch (error) {
          setErrorMessage(prev => error.message);
        }
      })();
    }
  });

  const usersLi = users.map((item, index) => <div key={index}>{item}</div>);
  console.log('GitList');
  return (
    <div>
      <Modal>
        {!usersLi.length && !failsConnection ? (
          <Nolist />
        ) : failsConnection ? (
          errorMessage
        ) : users[0] === userName ? (
          // <Ripo />
          <GetRipos />
        ) : (
          usersLi
        )}
      </Modal>
    </div>
  );
}
