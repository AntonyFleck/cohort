import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function  App(){
  const[todos,setCount]=useState([{
    title:"Go to gym",
    description:"chest day",
    completed:false
  },
  {
    title:"Go to class",
    description:"study biology",
    completed:false
  },
  {
    title:"Study DSA",
    description:"linked list",
    completed:false
  }])

  return <div>
    {
        todos.map((value)=>{
            return <Todo title={value.title} description={value.description}></Todo>
        })
    }
  </div>
}

function Todo(state){
    return <div>
        <h1>{state.title}</h1>
        <h2>{state.description}</h2>
    </div>
    
}
  
export default App