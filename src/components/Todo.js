import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon className='fa-trash' icon={faTrashAlt} onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}
