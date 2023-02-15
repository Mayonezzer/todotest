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

    let removeTask = (id: number, myTitle: string) => {
        tasksList = tasksList.filter((el) => el.taskId !== id)
        setTasksList(tasksList)
    }

    // let [filterTask, setFilterTask] = useState<ButtonNameType>('All')
    //
    // const filteringTasks = (buttonName: ButtonNameType) => {
    //     setFilterTask(buttonName)
    // }
    //
    // let filteredTasks = tasksList
    // if(filterTask==="Active") {
    //     filteredTasks = tasksList.filter(el => el.isDone)
    // }
    // if (filterTask==="Completed") {
    //     filteredTasks = tasksList.filter(el => !el.isDone)
    // }


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksList}
                removeTask={removeTask}
                // filteringTasks = {filteringTasks}
            />
        </div>
    );
}



