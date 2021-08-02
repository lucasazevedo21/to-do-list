import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { GlobalStyle } from './styles/globalStyles'
import { InputContainer, ListContainer } from './styles/styles'
import Todo from './Todo'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function App() {
	const [todos, setTodos] = useState([])
	const todoNameRef = useRef()

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedTodos) setTodos(storedTodos)
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	function toggleTodo(id) {
		const newTodos = [...todos]
		const todo = newTodos.find((todo) => todo.id === id)
		todo.complete = !todo.complete
		setTodos(newTodos)
	}

	function handleAddTodo(e) {
		const name = todoNameRef.current.value
		if (name === '') return
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: uuidv4(),
					name: name,
					complete: false,
				},
			]
		})
		todoNameRef.current.value = null //clear input
	}

	function handleClearTodos() {
		const newTodos = todos.filter((todo) => !todo.complete)
		setTodos(newTodos)
	}

	return (
		<>
			<GlobalStyle />
			<main>
				<h1>To-do List</h1>
				<InputContainer>
					<input ref={todoNameRef} type="text" placeholder="New Task" />
					<button onClick={handleAddTodo}>Add</button>
				</InputContainer>

				<ListContainer>
					<div>
						<p>{todos.filter((todo) => !todo.complete).length} left to do</p>
						<button onClick={handleClearTodos}>Clear</button>
					</div>
					<ul>
						{todos.map((todo) => {
							return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
						})}
					</ul>
				</ListContainer>
			</main>
			<footer>
				<span>2021 - Lucas Azevedo</span>
			</footer>
		</>
	)
}
