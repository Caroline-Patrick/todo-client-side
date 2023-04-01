import React from "react";

export const Todos = (props) => {
    console.log("In todos comp" + props.todos)


    return (
        <>
        <div className="todo-container">
            
        <ul className="lish">
        {props.todos.map(({todo} )=> {
            return <li className="item" key={`todo-${todo.id}`}>{todo}</li>
        })}
        </ul>
        </div>
        </>
    )
}