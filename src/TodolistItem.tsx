import {Task} from "./App.tsx";
import {FC} from "react";

type Props = {
    title: string
    subTitle?: string
    description?: string
    tasks: Task[]
    date?: string
}

export const TodolistItem: FC<Props> = (props)=>{

    const {title, subTitle, tasks, date} = props

    return (
        <div>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.map((el)=>{
                    return (
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                    </li>
                    )})}
            </ul>
            <div>{date}</div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
