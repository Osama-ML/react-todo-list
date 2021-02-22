import React from 'react';
import './style.css';

export const TodoAdd = ({handleSubmit, description, handleInputChange }) => {
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Type a task..."
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
                />

                <button
                className="button__Add"
                type="submit"
                >
                    Add task
                </button>
            </form>
        </>
    )
}
