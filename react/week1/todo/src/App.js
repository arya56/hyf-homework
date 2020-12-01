import './App.css';
import React from 'react';
import { Fibonaci } from './fibonaci';
import { TodoList } from './todoList';

export function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <Fibonaci></Fibonaci>
    </div>
  );
}
export default App;
