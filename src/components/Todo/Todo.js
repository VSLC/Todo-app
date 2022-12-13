import React, { useState } from 'react'
import TodoPage from '../../pages/TodoPage.js';
import AddInput from '../AddInput/AddInput.js';
import TodoList from '../TodoList/TodoList.js';

import Header from '../Header/Header.js'
import './Todo.css'

export default function Todo() {
    const [todos, setTodos] = useState([]);
    return (
        <div className="todo">
            <Header title="todo" />
            <AddInput
                todos={todos}
                setTodos={setTodos} />
            <TodoList
                todos={todos}
                setTodos={setTodos} />
        </div>
    );
}