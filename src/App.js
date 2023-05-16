import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoAdd from "./companents/TodoAdd/TodoAdd";
import TodoLIst from "./companents/TodoList/TodoLIst";


function App() {
    const [todo, setTodo] = useState([
        {
            id:uuidv4(),
            text:'hello',
            isImportant:false,
            isDone:true,
            change:false
        }
    ])
  return (
    <div className="App">
        <TodoAdd todo={todo} setTodo={setTodo} />
        <TodoLIst todo={todo} setTodo={setTodo}/>

    </div>
  );
}

export default App;
