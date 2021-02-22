import React from 'react'

export const TodoListDone = ({todos,handleDelete}) => {
    return (
        <div>
            <ul>
                {
                    (todos.filter(todo=> todo.done === true)).map((todo,i) => (
                        <li
                        key={todo.id}
                        >
                            <p>
                                {i + 1}. {todo.desc}
                                <button 
                                className="button__Delete"
                                onClick={() => handleDelete(todo.id)}>Delete</button>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
