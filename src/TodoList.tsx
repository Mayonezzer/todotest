import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {ButtonNameType} from "./App";
import {Button} from "./components/Button";




export type TodoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (id: string) => void
    addTask: (inputTitlePar: string) => void
}

export type TaskPropsType = {
    taskId: string
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
         filteredTasks = props.tasks.filter(t => t.isDone)
    }
    if (filterTask==="Completed") {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }

    const mappedTasks = filteredTasks.map( (t) => {
        return (
            <li >
                <button onClick={() => {props.removeTask(t.taskId)}}>X</button>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.taskTitle}</span>
            </li>
        )
    } )

    let [inpTitle, setInpTitle] = useState('')

    const onClickInputHandler = () => {
        props.addTask(inpTitle)
        setInpTitle('')
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInpTitle(event.currentTarget.value)
    }

    const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickInputHandler()
        }
    }


    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={inpTitle}
                           onKeyDown={onKeyPressInputHandler}
                           onChange={onChangeInputHandler}/>
                    <button
                        onClick={onClickInputHandler}>
                        +
                    </button>
                </div>
                {mappedTasks}
                <div>
                    <Button name={"All"} callBack={()=>{filteringTasks('All')}} />
                    <Button name={"Active"} callBack={()=>{filteringTasks('Active')}} />
                    <Button name={"Completed"} callBack={()=>{filteringTasks('Completed')}} />

                    {/*a<button onClick={()=>{filteringTasks('All')}}>All</button>
                    <button onClick={()=>{filteringTasks('Active')}}>Active</button>
                    <button onClick={()=>{filteringTasks('Completed')}}>Completed</button>a*/}
                </div>
            </div>
        </div>
    );
}


/*<button onClick={()=>{filteringTasks('All')}}>All</button>
<button onClick={()=>{filteringTasks('Active')}}>Active</button>
<button onClick={()=>{filteringTasks('Completed')}}>Completed</button>*/
