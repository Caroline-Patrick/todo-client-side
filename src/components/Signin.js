import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


export const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
 
    const navigate = useNavigate();

  
    return(
        <>
        <form 
            className='form' 
                onSubmit={(e)=>{
                    e.preventDefault()

                    axios
                    .post("http://localhost:5000/signin", {
                      email,
                      password,
                    })
                    .then((response) => {
                        // console.log(response.data)
                        props.setToken(response.data.token);
                    return Promise.resolve().then(()=> navigate('/todos'));
                    })
                    
                }}>

            
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
            <input className="submit" type="submit" value="Sign in"/>
        </form>
        </>
    )
}