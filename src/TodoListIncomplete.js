import React from 'react'

export const TodoListIncomplete = ({todos, handleDone, handleEdit}) => {
    return (
        <div>
            <ul>
                {
                    (todos.filter(todo=> todo.done === false)).map((todo,i) => (
                        <li
                        key={todo.id}
                        >
                            <p>
                                {i + 1}. {todo.desc}
                                <button 
                                className="button__Done"
                                onClick={() => handleDone(todo.id)}>Done</button>
                                <button 
                                className="button__Edit"
                                onClick={() => handleEdit(todo)}>Edit</button>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
