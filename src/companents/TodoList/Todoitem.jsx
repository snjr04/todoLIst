import React from 'react';

const Todoitem = ({item,deleteOneTodo,setChangeOneTodo,setImportantOneTodo,setDoneOneTodo}) => {
    return (
        <li>
            <input checked={item.isDone} type="checkbox" onChange={() => setDoneOneTodo(item.id)}/>

            {
                item.change ? <input type="text"/> : <p style={{color: item.isDone ? 'blue' : 'black'}}> {item.text}</p>
            }

            <button style={{background:item.isImportant ? 'gold' : 'buttonFace'}} type='button' onClick={() =>setImportantOneTodo(item.id)}>Important</button>
            <button onClick={() =>setChangeOneTodo(item.id)}>{item.change ? 'Save': 'Change'}</button>
            <button type='button' onClick={() =>deleteOneTodo(item.id)}>Delete</button>
        </li>
    );
};

export default Todoitem;