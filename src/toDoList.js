import React from 'react';
import './toDoList.scss';
import {toggleToDoActon} from './redux'
import {useDispatch, useSelector} from 'react-redux'

function ToDoList() {
  
  const todos = useSelector (state => state.todos)';;;;[[[[[[[['
  
  const dispatch = useDispatch();
  const toggleItem = id => dispatch(toggleToDoActon(id))

  
  return (
    <div className="to-do-list">
      ToDoList
      {todos.map( (item, index) =>{
        return (
          <div className="to-do-item" key={index}>
            <span>{item.name}</span>
              <input type='checkbox'
                onChange={ enevt => {
                  // console.log("enevt", enevt)
                  toggleItem(item.id)}
              } 
                checked={item.complete}
              />
             
          </div>
        )
      })}
    </div>
  );
}

export default ToDoList;
