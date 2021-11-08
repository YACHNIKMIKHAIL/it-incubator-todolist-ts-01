import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList";


function App() {

    const todoList1: string = "What to learn?";
    const todoList2: string = "Social NetWork?";
    const todoList3: string = "What to buy?";


    const tasks1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false}
    ]
    const tasks2: Array<TaskType> = [
        {id: 4, title: "VK", isDone: false},
        {id: 5, title: "FGSN", isDone: true},
        {id: 6, title: "Inst", isDone: false}
    ]
    const tasks3: Array<TaskType> = [
        {id: 7, title: "Milk", isDone: true},
        {id: 8, title: "Meat", isDone: true},
        {id: 9, title: "Bread", isDone: true}
    ]

    return (
        <div className="App">
            <TodoList title={todoList1} tasks={tasks1}/>
            <TodoList title={todoList2} tasks={tasks2}/>
            <TodoList title={todoList3} tasks={tasks3}/>
        </div>
    );
}

export default App;
