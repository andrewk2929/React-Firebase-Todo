import React from 'react';

import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
            <Todo 
                id = {todo.id}
                key = {todo.key}
                text = {todo.todo}
            />
        ))}
      </ul>
    </div>
  )
}
