import { TodoItem } from './todoItem';
export function TodoList() {
  return (
    <div>
        <h1>Todo List</h1>
      <TodoItem title="Get out of bed" date=" Wed Sep 13 2017"/>
      <TodoItem title="Brush teeth" date=" Thu Sep 14 2017"/>
      <TodoItem title="Eat breakfast" date=" Fri Sep 15 2017"/>
    </div>
  );
}