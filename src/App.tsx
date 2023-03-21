import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {TaskPropsType} from "./TodoList";
import {v1} from "uuid";


export type ButtonNameType = 'All' | 'Active' | 'Completed'


export function App() {
    const todoListTitle: string = "what to learn"
    let [tasks, setTasks] = useState<Array<TaskPropsType>>( [
        {taskId: v1(), taskTitle: "html&css", isDone: true},
        {taskId: v1(), taskTitle: "JS", isDone: true},
        {taskId: v1(), taskTitle: "notJS", isDone: true},
        {taskId: v1(), taskTitle: "ReactJS", isDone: false},
    ])

    const removeTask = (id: string) => {
        tasks = tasks.filter((t) => t.taskId !== id)
        setTasks(tasks)
    }

    const addTask = (inputTitlePar: string) => {
        const addedTask = {taskId: v1(), taskTitle: inputTitlePar, isDone: true};
        const newTasks = [addedTask, ...tasks]
        setTasks(newTasks) // либо сразу setTasks([addedTask, ...tasks])
    }

    const changeStatus = (idFind: string, isDone: boolean) => {
        let taskFind = tasks.find( (t) => t.taskId === idFind) // ? true : false
        if (taskFind) {
            taskFind.isDone = isDone
        }
        let copyTasks = [...tasks]
        setTasks(copyTasks) // или сразу setTasks([...tasks])
    }



    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
                addTask = {addTask}
                changeStatus={changeStatus}
            />
        </div>
    );
}



