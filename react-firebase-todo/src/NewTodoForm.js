import React, { useRef } from 'react';

import './App.css';
// import Todo from './Todo';
// import TodoList from './TodoList';
// import NewTodo from './NewTodo';
import AllTodos from './AllTodos';

export default function NewTodoForm(props) {
  const todoRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();

    const enteredTodoRef = todoRef.current.value;

    const todoData = {
      todo: enteredTodoRef
    }

    props.onAddTodo(todoData);
  }

  return (
    <div>
      <label for = 'todo_input'>Todo: </label>
      <input type='text' className='todo_input' ref={todoRef}/>
      <button className='addTodo' onClick={addTodo}>Add Todo</button>
      <AllTodos />
    </div>
  );
}