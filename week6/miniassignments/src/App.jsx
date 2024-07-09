  
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return <div>
    <Button></Button>
    <Header></Header>
    </div>
}

//can use react that memo too
function Button({handler}){
  const [name,setname]=useState("harkirat");
  return<>
  <button onClick={()=>setname(Math.random())}>Click me to Update</button>
  <h5>My name is {name}</h5>  
</>
  }

function Header(){
  return<>
  <h5>My name is anirudha</h5>
  </>
}

