import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo' 
import { Todo } from './components/Todo'


function App() {
  const [todos, setCount] = useState([])
  //This is a wrong way to send request as it creates an infinite loop 
  //Use effect hook
  useEffect(()=>{
    fetch("http://localhost:3002/todos").then(async (value)=>{
      const result=await value.json();
      setCount(result.todos)
    })

  },[])
return (
  <div>
    <CreateTodo></CreateTodo>
    <Todo params={todos}></Todo>

  </div>
  )
}

export default App
