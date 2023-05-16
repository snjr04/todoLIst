import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoAdd = ({todo,setTodo}) => {

    const AddTodo = async (e) =>{
        let text = e.target[0].value

        e.preventDefault()

        let isHas = todo.some(item => item.text === text)

        if (!isHas){
            await setTodo((prev) =>[...prev,{
                id:uuidv4(),
                text:text,
                isImportant:false,
                isDone:false,
                change:false
            }])
        }else {
            alert('you now?')
        }


        e.target[0].value =''

    }

    return (
        <form onSubmit={(e)=>{


        }}>
            <input required type="text"/>
            <button type='submit'>add todo</button>
        </form>
    );
};

export default TodoAdd;

