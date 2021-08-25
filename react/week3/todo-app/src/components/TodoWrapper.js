import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Moment from 'moment';

export function TodoWrapper({ toDoList }) {
  const [list, setList] = useState(toDoList);
  const [description, setDescription] = useState('');
  const [startdate, setStartdate] = useState(new Date());
  const randomId = Math.floor(Math.random() * 1000);

  const addToList = () => {
    if (!description) {
      alert('Todo description must be filled out');
      return false;
    }

    setList([
      ...list,
      {
        id: randomId,
        description: description,
        deadline: Moment(startdate).format('YYYY-DD-MM'),
      },
    ]);
    setDescription('');
  };
  const handleRemoveItem = index => {
    list.splice(index, 1);
    setList([...list]);
  };

  const editCallback = (newText, id) => {
    const newList = [...list];
    newList.forEach(list => {
      if (list.id === id) {
        list.description = newText;
      }
    });
    setList([...newList]);
  };
  return (
    <div>
      <form>
        <label >Todo description</label>
        <input
          type="text"
          value={description}
          placeholder="description"
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <DatePicker
          selected={startdate}
          onChange={date => setStartdate(date)}
        />
      </form>
      <button type="submit" onClick={addToList}>
        Add todo
      </button>
      {list.length === 0 ? <div>"No items..."</div> : ''}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <TodoItem
              id={item.id}
              description={item.description}
              deadline={item.deadline}
              editCallback={editCallback}
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
