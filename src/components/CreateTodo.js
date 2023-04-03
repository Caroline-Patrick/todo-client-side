import React, {useState} from "react";
import axios from 'axios';

export const CreateTodo = ({token,todos, setTodos, userId}) => {
   
const [todo, setTodo] = useState("");

    return (
        <>
        <form 
            onSubmit={((e)=>{
                e.preventDefault();
                axios.post('http://localhost:5000/todos', {
                    todo,
                    user_id: userId
                }, {
                    headers: {
                    Authorization: `Bearer ${token}`
                    }
                })
                setTodo("")
                setTodos([...todos, {todo, user_id: userId}] )
                ;
            })}
            >
            <input
                className="input"
                type="text"
                value={todo}
                onChange={((e)=>{
                    setTodo(e.target.value)
                  
                })}
                 />
            <input 
                className="submit"
                type="submit" 
                value="Add Todo!"
                 />
         </form>   
        </>
    )
}