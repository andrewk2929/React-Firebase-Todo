import React, { useState, useEffect } from 'react';

import TodoList from './TodoList';

export default function AllTodos() {
    const [userTodos, setUserTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
          'https://react-todo-test1-default-rtdb.firebaseio.com/.json'
          ).then(response => {
            return response.json();
          }).then(data => {
            const todos = [];
    
            for (const key in data) {
              const todo = {
                id: key,
                ...data[key]
              }
    
              todos.push(todo);

              setIsLoading(false);
              setUserTodos(todos);
            }
          })
      }, [])

  if (isLoading) {
    return (
        <>
          <p>Loading...</p>
        </>
    )
  }

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <br />
      <TodoList todos = {userTodos}/>
    </div>
  )
}
