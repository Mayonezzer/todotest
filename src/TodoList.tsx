import React from 'react';

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskPropsType>
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
                <ul>
                    <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].taskTitle}</span>
                    </li>
                    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].taskTitle}</span>
                    </li>
                    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].taskTitle}</span>
                    </li>

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

