import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
     <h1>code</h1>
     <p>jokes : {jokes.length} </p>
     {
     jokes.map((jokes,index)=>(
      <div key={jokes.id}>
        <h3>{jokes.title}</h3>
        <p>{jokes.content}</p>
        <p></p>

      </div>
     ))
     }
      
    </>
  )
}

export default App
