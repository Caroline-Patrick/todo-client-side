import React, {useEffect, useState} from "react";
import axios from 'axios';
import { CreateTodo } from "./CreateTodo";


export const Todos = ({token}) => {

    const [todos, setTodos] = useState([]);
    const [userId, setUserId] = useState();
    
    useEffect(()=>{
        axios.get("https://todo-workshop-server.vercel.app/todos", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response)=>{
            setTodos(response.data);
            setUserId(response.data[0].user_Id);
        })
      }, [token]);

    return (
        <>
        <div className="todo-container">
            {<CreateTodo token={token} userId={userId} setTodos={setTodos} todos={todos}/>}
        <ul className="list">

        {Array.isArray(todos) && todos.map((item, index)=> {
            return (
            <li className="item" 
                key={`todo-${index}`}>
                    {item.todo}
            </li>)
        })}
        </ul>
        </div>
        </>
    )
}