import './App.css'
import {TodolistItem} from './TodolistItem'
import {Fragment} from "react";

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const App = () => {

    let tasks = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Typescript', isDone: false },
        { id: 5, title: 'RTK query', isDone: false },
        { id: 6, title: 'Redux', isDone: false },
    ]

    const deleteTask = (taskId:number ) => {
        tasks = tasks.filter(t => {
        return t.id !== taskId
        })

    return (
        <div className="app">
            <Fragment>
                <TodolistItem title="What to learn" tasks={tasks} date={"25.12.205"} deleteTask={deleteTask}/>
            </Fragment>
        </div>
    )
}
