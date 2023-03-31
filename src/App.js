import axios from 'axios';
import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    axios.get("http://localhost:5000/users").then((response)=>{console.log(response)})
  }, [])

  return (
    <div className="App">
    Hello World
    </div>
  );
}

export default App;
