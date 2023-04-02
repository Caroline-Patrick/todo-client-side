import React, {useState, useEffect} from 'react';
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
                        console.log(response.data)
                        props.setToken(response.data.token);
                    return Promise.resolve().then(()=> navigate('/todos'));
                    })
                    .catch((error) => {
                      if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.error("Error data: ", error.response.data);
                        console.error("Error status: ", error.response.status);
                        console.error("Error headers: ", error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        console.error("Error request: ", error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error("Error message: ", error.message);
                      }
                      console.error("Error config: ", error.config);
                    });
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
            <input type="submit" value="Sign in"/>
        </form>
        </>
    )
}