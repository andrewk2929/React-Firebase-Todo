import React from 'react'

import NewTodoForm from './NewTodoForm'

export default function NewTodo() {
  function addTodoHandler(todoData) {
    fetch(
        'https://react-todo-test1-default-rtdb.firebaseio.com/.json',
        {
            method: 'POST',
            body: JSON.stringify(todoData),
            headers: {
                'Content-Type': 'application/json' // show were sending json
            }
        }
    )
  }

  return (
    <div>
      <h1>Add a new Todo</h1>
      <NewTodoForm onAddTodo = {addTodoHandler} />
    </div>
  )
}
