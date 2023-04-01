import axios from 'axios';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Signin } from './components/Signin';
import {Todos} from './components/Todos'

function App() {
  const [token, setToken] =useState("");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/todos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{setTodos(response.data)})
  }, [token]);

  useEffect(()=>{
    console.log(todos)
  }, [todos])

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Signin setToken={setToken} />} />
      <Route path="/todos" element={<Todos todos={todos}/>} />
    </Routes>
    </div>
  );
}

export default App;
