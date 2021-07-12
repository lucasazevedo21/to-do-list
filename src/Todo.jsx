import React from 'react'

import { SingleTodo } from './styles/styles'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <SingleTodo>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </SingleTodo>
        </div>
    )
}
