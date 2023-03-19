import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {TaskPropsType} from "./TodoList";


export type ButtonNameType = 'All' | 'Active' | 'Completed'


export function App() {
    const todoListTitle: string = "what to learn"
    let [tasksList, setTasksList] = useState<Array<TaskPropsType>>( [
        {taskId: 1, taskTitle: "html&css", isDone: true},
        {taskId: 2, taskTitle: "JS", isDone: true},
        {taskId: 3, taskTitle: "notJS", isDone: true},
        {taskId: 4, taskTitle: "ReactJS", isDone: false},
    ])

    let removeTask = (id: number) => {
        tasksList = tasksList.filter((t) => t.taskId !== id)
        setTasksList(tasksList)
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



