import React, {useEffect, useState} from "react";
import axios from 'axios';
import { CreateTodo } from "./CreateTodo";


export const Todos = ({token}) => {

    const [todos, setTodos] = useState([]);
    const [userId, setUserId] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:5000/todos", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((response)=>{
            // console.table(response.data)
            setTodos(response.data);
            setUserId(response.data[0].user_id);
        })
      }, [token]);

    //   useEffect(()=>{
    //     console.log(userId)
    //   },[userId])
    return (
        <>
        <div className="todo-container">
            {<CreateTodo token={token} userId={userId} setTodos={setTodos} todos={todos}/>}
        <ul className="list">

        {todos.map((item, index)=> {
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