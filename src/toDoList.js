import React from 'react';
import './toDoList.scss';
import { toggleToDoActon, deleteToDoAction } from './redux';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ToDoList() {
	const todos = useSelector((state) => state.todos);

	const dispatch = useDispatch();
	const toggleItem = (id) => dispatch(toggleToDoActon(id));
	const closeTodo = (id) => dispatch(deleteToDoAction(id));

	return (
		<div className="to-do-list">
			ToDoList
			{todos.map((item, index) => {
				return (
					<div className="to-do-item" key={index}>
						<input type="checkbox" onChange={(enevt) => toggleItem(item.id)} checked={item.complete} />
						<span>{item.name}</span>
						<FontAwesomeIcon onClick={() => closeTodo(item.id)} className="close" icon={faTimes} />
					</div>
				);
			})}
		</div>
	);
}

export default ToDoList;
