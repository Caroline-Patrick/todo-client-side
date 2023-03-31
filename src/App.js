import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import { Signin } from './components/Signin';

function App() {
  const [token, setToken] =useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/todos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{console.log(response)})
  }, [token]);

  useEffect(()=>{
    console.log("token", token)
  }, [token])

  return (
    <div className="App">
    <Signin setToken={setToken}/>
    </div>
  );
}

export default App;
