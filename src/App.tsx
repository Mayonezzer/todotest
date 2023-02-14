import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {TaskPropsType} from "./TodoList";

export function App() {
    const todoListTitle: string = "what to learn"
    let tasksList: Array<TaskPropsType> = [
        {taskId: 1, taskTitle: "html&css", isDone: true},
        {taskId: 2, taskTitle: "JS", isDone: true},
        {taskId: 3, taskTitle: "notJS", isDone: true},
        {taskId: 4, taskTitle: "ReactJS", isDone: false},
    ]

    const removeTask = (id: number, myTitle: string) => {
        tasksList = tasksList.filter((el) => el.taskId !== id)
    }

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksList}
                removeTask={removeTask}
            />
        </div>
    );
}


