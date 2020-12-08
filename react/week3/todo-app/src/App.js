import { TodoWrapper } from './components/TodoWrapper';
import { Counter } from './components/Counter';
import { Loader } from './components/Loader';
import React, { useState, useEffect } from 'react';
export function App() {
  const initial = null;
  const [todos, setTodos] = useState(initial);
  useEffect(() => {
    (async () => {
      const result = await fetch(
        'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
      ).then(res => res.json());
      setTodos(result);
    })();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <Counter />
      {todos === initial ? <Loader /> : <TodoWrapper toDoList={todos} />}
    </div>
  );
}

export default App;
