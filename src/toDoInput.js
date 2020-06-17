import React, {useState} from 'react';
import './toDoInput.scss';
import {addToDoAction} from './redux'
import {useDispatch} from 'react-redux'

import uuid from 'uuid/v4'
function ToDoInput() {

  const [todo, setTodo] = useState('');

  const onChange = event => {
    setTodo(event.target.value)
     
  }

  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addToDoAction(todo))

  const onSubmit = event =>{
    console.log('on submit')

    if( todo.trim() === '') return
    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    })

    setTodo('');

  }


  return (
    <div className="to-do-input">
      toDoInput

      <input
        type='text'
        name='todo'
        value = {todo}
        placeholder="add atodo"
        onChange = {onChange}
      />

      <button onClick={ onSubmit}>
        OnSubmit
        </button>
    </div>
  );
}

export default ToDoInput;
