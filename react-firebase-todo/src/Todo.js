import React, { useRef } from 'react'

export default function Todo(props) {
  removeTodoId = useRef();

  const removeTodoHandler = () => {
    todo_id = props.id
    
  }

  return (
    <div>
      <li ref={removeTodoId}>{props.text}</li>
      <button onClick={removeTodoHandler}>Remove Todo</button>
    </div>
  )
}
