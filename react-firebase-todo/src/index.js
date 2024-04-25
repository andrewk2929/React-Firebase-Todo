import React from 'react';
import { createRoot } from 'react-dom';

import './index.css';
import NewTodo from './NewTodo';
// import NewTodoForm from './NewTodoForm';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(<NewTodo />);