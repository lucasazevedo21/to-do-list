import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoList from './TodoList'
import { Titles, InputContainer, ListContainer, Footer, Status } from './styles/styles'
import { GlobalStyle } from './styles/globalStyles'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
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
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuidv4(),
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = null //clear input
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <GlobalStyle />

      <Titles>
        <h1>To-do List</h1>
      </Titles>

      <InputContainer>
        <input ref={todoNameRef} type="text" placeholder="Write your to-do here" />
        <button onClick={handleAddTodo}>Add To-do</button>
      </InputContainer>

      <ListContainer>
        <h2>Your List</h2>
        <Status>
          <div>{todos.filter(todo => !todo.complete).length} left to do</div>
          <button onClick={handleClearTodos}>Clear Complete</button>
        </Status>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </ListContainer>

      <Footer>
        <p>2021 - Lucas Azevedo</p>
      </Footer>
    </>
  )
}

export default App;
