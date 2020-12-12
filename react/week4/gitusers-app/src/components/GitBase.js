import React, { useState, createContext } from 'react';
import GitForm from './GitForm';
import GitList from './GitList';
import Nolist from './Nolist';
import Modal from './Modal';
import Loader from './Loader';
import './Git.css';
export const UserContext = createContext(null);
export const HandlerContext = createContext(null);
export function GitBase() {
  const [userName, setUserName] = useState('');
  const [userIsLoaded, setUserIsLoaded] = useState(false);
  const [onLoading, setOnLoading] = useState(false);
  const [failsConnection, setFailsConnection] = useState(false);
  // const [ripos, setRipos] = useState([]);
  return (
    <div>
      <h1 className="container">Github user searcher</h1>
      <HandlerContext.Provider value={{ setUserName, setUserIsLoaded }}>
        <GitForm />
      </HandlerContext.Provider>
      <Modal>
        {!onLoading && userName && !failsConnection ? <Loader /> : ''}

        {userName === '' ? (
          <Nolist />
        ) : (
          <HandlerContext.Provider
            value={{
              userName,
              userIsLoaded,
              setUserIsLoaded,
              setOnLoading,
              setFailsConnection,
              failsConnection,
            }}
          >
            <GitList />
          </HandlerContext.Provider>
        )}
      </Modal>
    </div>
  );
}
