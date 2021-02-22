import React, { useEffect, useReducer } from 'react';


import { todoReducer } from './todoReducer';
import { useForm } from './hooks/useForm';

import { TodoAdd } from './TodoAdd';
import { TodoListIncomplete } from './TodoListIncomplete';
import { TodoListDone } from './TodoListDone';

import './style.css';

const init = () =>  {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const TodoListApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect (() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const [{description}, handleInputChange, reset ] = useForm({
        description: ''
    })

    const handleSubmit = (e)=>{

        e.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo)

        reset();
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type:'add',
            payload: newTodo
        });

    }

    const handleDone = (todoId) => {

        dispatch({
            type: 'done',
            payload: todoId
        })
    }
    
    const handleEdit = (todo) => {

        dispatch({
            type:'edit',
            payload: todo
        })

    }

    const handleDelete = (todoId) => {

        const action = {
            type:'delete',
            payload: todoId
        }
        dispatch(action);
    }
    

    return (
        <div>
            <h1>TodoListApp</h1>
            <hr/>

            <TodoAdd handleSubmit={handleSubmit} description={description} handleInputChange={handleInputChange}/>

            <div className="container">
                <div>
                    <h3>
                    Incomplete Tasks
                    </h3>
                    <TodoListIncomplete todos={todos} handleDone={handleDone} handleEdit={handleEdit}/>
                </div>
                <div>
                    <h3>
                        Done Tasks
                    </h3>
                    <TodoListDone todos={todos} handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
    )
}