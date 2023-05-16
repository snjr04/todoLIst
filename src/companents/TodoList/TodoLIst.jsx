import React from 'react';
import Todoitem from "./Todoitem";

const TodoLIst = ({todo,setTodo}) => {


    const deleteOneTodo = (id) =>{
        setTodo(prev => prev.filter(item =>item.id !==id))
    }

    const setImportantOneTodo = (id) =>{
        setTodo(prev =>prev.map(item =>{
            if (item.id === id){
                return {...item,isImportant: !item.isImportant}
            }
            return item
            }
        ))
    }

    const setDoneOneTodo =(id) =>{
        setTodo(prev =>prev.map(item =>{
                if (item.id === id){
                    return {...item,isDone: !item.isDone}
                }
                return item
            }
        ))
    }

    const setChangeOneTodo =(id) =>{
        setTodo(prev =>prev.map(item =>{
                if (item.id === id){
                    return {...item,change: !item.change}
                }
                return item
            }
        ))
    }

    return (
        <ul>

            {
                todo.map((item) =>(
                    <Todoitem setChangeOneTodo={setChangeOneTodo} setImportantOneTodo={setImportantOneTodo} setDoneOneTodo={setDoneOneTodo} deleteOneTodo={deleteOneTodo} item={item} key={item.id}/>
                ))
            }
        </ul>

    );
};

export default TodoLIst;