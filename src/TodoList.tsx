import React from 'react';

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (id:number, myTitle:string)=>void
}

export type TaskPropsType = {
    taskId: number
    taskTitle: string
    isDone: boolean
}

export function TodoList(props: TodoListPropsType) {
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
                        {props.tasks.map((el) => {
                            return (
                                <li key={el.taskId}>
                                    <button onClick={()=> props.removeTask(el.taskId, "Hello" )}>X</button>
                                    <input type="checkbox" checked={el.isDone}/>
                                    <span>{el.taskTitle}</span>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <div>нету</div>
                }
                <ul>
                    {props.tasks.map((el) => {
                        return (
                            <li key={el.taskId}><input type="checkbox" checked={el.isDone}/> <span>{el.taskTitle}</span></li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

