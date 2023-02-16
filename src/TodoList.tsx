import React, {useState} from 'react';
import {ButtonNameType} from "./App";




export type TodoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (id: number, myTitle: string) => void
    // filteringTasks: (ButtonName: ButtonNameType)=> void
}

export type TaskPropsType = {
    taskId: number
    taskTitle: string
    isDone: boolean

}

export function TodoList(props: TodoListPropsType) {

    let [filterTask, setFilterTask] = useState<ButtonNameType>('All')

    const filteringTasks = (buttonName: ButtonNameType) => {
        setFilterTask(buttonName)
    }

    let filteredTasks = props.tasks
    if(filterTask==="Active") {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }
    if (filterTask==="Completed") {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                {props.tasks
                    ?
                    <ul>
                        {filteredTasks.map((el) => {
                            return (
                                <li key={el.taskId}>
                                    <button onClick={() => props.removeTask(el.taskId, "Hello")}>X</button>
                                    <input type="checkbox" checked={el.isDone}/>
                                    <span>{el.taskTitle}</span>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <div>нету</div>
                }

                <div>
                    <button onClick={()=>{filteringTasks('All')}}>All</button>
                    <button onClick={()=>{filteringTasks('Active')}}>Active</button>
                    <button onClick={()=>{filteringTasks('Completed')}}>Completed</button>
                </div>
            </div>
        </div>
    );
};

