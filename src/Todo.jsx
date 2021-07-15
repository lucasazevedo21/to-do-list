import React from 'react'
import styled from 'styled-components'

export const SingleTodo = styled.li`
    border: 1px solid #747171;
    border-radius: 5px;
    width: 700px;
    padding: 12px;
    margin: 0 auto;
    margin-bottom: 0.7rem;
    list-style: none;
    font-size: 1.2rem;

    :hover {
        border: 1px solid #4361EE;
        transition: 0.2s;
    }

    input {
        cursor: pointer;
        margin-right: 10px;
    }
`

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <ul>
            <SingleTodo>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </SingleTodo>
        </ul>
    )
}
