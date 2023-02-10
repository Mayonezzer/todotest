import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {TaskPropsType} from "./TodoList";

export function App() {
    const todoListTitle: string = "what to learn"
    const tasksList: Array<TaskPropsType> = [
        {taskId: 1, taskTitle: "asd", isDone: true},
        {taskId: 2, taskTitle: "sdf", isDone: false},
        {taskId: 3, taskTitle: "fgh", isDone: false},
        {taskId: 4, taskTitle: "fgh", isDone: false},
        {taskId: 5, taskTitle: "fgh", isDone: false},
        {taskId: 6, taskTitle: "fgh", isDone: false},
        {taskId: 7, taskTitle: "fgh", isDone: false},
        {taskId: 8, taskTitle: "fgh", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasksList}/>
        </div>
    );
}


