import { TodoWrapper } from './components/TodoWrapper';
import { Counter } from './components/Counter';
export function App() {
  const todos = [
    {
      id: 1,
      description: 'Get out of bed',
    },
    {
      id: 2,
      description: 'Brush teeth',
    },
    {
      id: 3,
      description: 'Eat breakfast',
    },
  ];
  return (
    <div>
      <h1>Todo List</h1>
       <Counter />
      <TodoWrapper toDoList={todos} /> 
    </div>
  );
}

export default App;
