import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


export const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [name, setName] = useState("")
 
    const navigate = useNavigate();

  
    return(
        <>
        <form 
            className='form' 
                onSubmit={(e)=>{
                    e.preventDefault()

                    axios
                    .post("http://localhost:5000/signup", {
                      name,
                      email,
                      password,
                    })
                    
                    setName("")
                    setEmail("")
                    setPassword("")
                    navigate("/")

                   ;
                }}>

            
            <label className='label'>
                Name: 
                <input 
                    className="input" 
                    type="text"
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label className='label'>
                Email: 
                <input 
                    className="input" 
                    type="email"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            
            <label className='label'>
                Password:
                <input 
                    className="input" 
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </label>
            <input type="submit" value="Sign in"/>
        </form>
        </>
    )
}