import react, { useState } from 'react';
import { TodoCatcher } from './TodoCatcher';
//import { TodoLister } from './TodoLister';

export function TodoCreat({todos}) {
  const [toDoList, settoDoList] = useState(todos);//
 // console.log('here is the todos',todos );
 // console.log(setCatcher);
  return (
    <div>
      {/* <TodoCatcher settoDoList={settoDoList} /> */}
      <TodoCatcher toDoList={toDoList} />
    </div>
  );
}