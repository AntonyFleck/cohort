import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function CustomButton(state){
  function onclickhandler(){
    state.setCount(state.count+1);
  }
  return <button onClick={onclickhandler}>Counter {state.count}</button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
        <CustomButton count={count*10} setCount={setCount}></CustomButton>

      </div>
  )
}


export default App
