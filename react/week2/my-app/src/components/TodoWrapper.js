import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

export function TodoWrapper({ toDoList }) {
  const [list, setList] = useState([]);

  const addToList = () => {
    const randomNumber = Math.floor(Math.random() * toDoList.length);
    const randomItem = toDoList[randomNumber];
    randomItem.id = list.length + 1;
    setList([...list, { ...randomItem }]);
  };
  const handleRemoveItem = index => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <button onClick={addToList}>Add to list</button>
      {list.length === 0 ? <div>"No items..."</div> : ''}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <TodoItem
              description={item.description}
              deleteCallBack={() => {
                handleRemoveItem(index);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
