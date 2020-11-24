// import './App.css';
//import { Fibonacci } from './fibonacci';
// import {Counter} from './counter'
// import {WatchCount} from './WatchCount'

// import { ShowTodolist } from './ShowTodolist';
// import { WatchCount } from './WatchCount';
import {TodoCreat} from './TodoCreat'
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
      <TodoCreat todos={todos} />
      
    </div>
  );
}

export default App;