import { TodoCreat } from "./TodoCreat";

export function TodoCatcher({toDoList}) {
    const increment = () => {
      console.log({toDoList});
      //settoDoList(()=>{
        
      return(<div>salam</div>)
       
      };
    return (
      <div>
        <button onClick={increment}>increment</button>
      </div>
    );
  }

  // setCatcher(previous => {
        // calling back to his parent
        // console.log(toDoList);
                //[...previous, nextFibonacci];