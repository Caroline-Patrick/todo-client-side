import { useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Signin } from './components/Signin';
import {Signup} from './components/Signup'
import {Todos} from './components/Todos'

function App() {
  const [token, setToken] =useState("");


  

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Signin setToken={setToken} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todos" element={<Todos token={token}/>} />
    </Routes>
    </div>
  );
}

export default App;
