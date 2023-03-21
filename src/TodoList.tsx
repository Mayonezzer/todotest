import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {ButtonNameType} from "./App";
import {Button} from "./components/Button";




export type TodoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (id: string) => void
    addTask: (inputTitlePar: string) => void
    changeStatus: (idFind: string, isDone: boolean) => void
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


    let [inpTitle, setInpTitle] = useState('')

    const checkTaskForLength = inpTitle.length === 0 || inpTitle.length > 10

    const onKeyDownInputHandler = checkTaskForLength
        ? undefined  // если чек на чек тру, то кнопку дизейблим, если фолс - разрешаем добавлять энтером
        : (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                onClickInputHandler()
                /*event.key === 'Enter' && onClickInputHandler() - другой синтаксис*/
            }
        }

    const onChangeInpTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInpTitle(event.currentTarget.value)
    }

    const onClickInputHandler = () => {
        if (inpTitle.trim() === '') { // проверяем содержание инпута на пробелы
            return                    // на пробелы при этом обрезая их тримом
        }
        props.addTask(inpTitle.trim())
        setInpTitle('')
    }

    const mappedTasks = filteredTasks.map( (t) => {
        const changeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(t.taskId, event.currentTarget.checked)
        }
        const removeTaskHandler = () => {props.removeTask(t.taskId)} // вынесли удаление таск повыше
        return (
            <li >
                <button onClick={removeTaskHandler}>X</button>
                <input type="checkbox"
                       checked={t.isDone}
                       onChange={changeStatusHandler}
                />
                <span>{t.taskTitle}</span>
            </li>
        )
    } )
    const messageForLongInput = inpTitle.length > 10 && <div>title is too long</div>

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={inpTitle}
                           onKeyDown={onKeyDownInputHandler}
                           onChange={onChangeInpTitleHandler}
                           placeholder={'enter inpTitle please'}/>
                    <button
                        disabled={checkTaskForLength}
                        onClick={onClickInputHandler}
                    >+</button>
                    {messageForLongInput}
                </div>
                {mappedTasks}
                <div>
                    <Button name={"All"} callBack={()=>{filteringTasks('All')}} />
                    <Button name={"Active"} callBack={()=>{filteringTasks('Active')}} />
                    <Button name={"Completed"} callBack={()=>{filteringTasks('Completed')}} />

                    {/*до подключения компонента Баттон*/}
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
