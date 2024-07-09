
import {Suspense,lazy,createContext, useContext} from 'react'
import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom'
const Home = lazy(()=>import ("./components/Home"))
const Landing =lazy(()=>import("./components/Landing"))
import { useState } from 'react'
//react-router-dom
//This is the library

//---------------------------<Routing>------------------------------------------------------------------

// export default function App() {
  
//   return (
//     <>
//       <BrowserRouter>
//       <Navigate/>
//         <Routes>
//           <Route path='/' element={<Suspense fallback={loading......}><Home/></Suspense>}/>
//           <Route path='/landing' element={<Suspense><Landing/></Suspense>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function Navigate(){
//   const navigate=useNavigate(); 
//   return <>
//           <div>
//         <button onClick={()=>{
//           navigate("/")
//         }}>Home</button>
//         <button onClick={()=>{
//           navigate("/landing")
//         }}>Landing</button>
//       </div>
//   </>
// }

//-------------------Prop Drilling----------------------------------------------------------

// export default function App(){
// const [count,setCounter]=useState(0)

// return<>
//   <Count count={count} setCounter={setCounter}></Count>
// </>

// }

// function Count({count,setCounter}){
// return <div>
//   <CountRender count={count}/>
//   <Button count={count} setCounter={setCounter}></Button>
// </div>
// }

// function CountRender({count}){
//   return <div>
//     {count}
//   </div>
// }

// function Button({count,setCounter}){
//   return <div>
//     <button onClick={()=>setCounter(count+1)}>increase</button>
//     <button onClick={()=>setCounter(count-1)}>decreasejjj</button>
//   </div>
// }

//-----------------Context API(syntactical sugar)--------------------------------------------
//creating an objects that lets you teleport

// const CountContext=createContext();
// //Wrap anyone that wants to use the teleported value inside a provider


// export default function App(){
//   const [count,setCounter]=useState(0)
//   return<CountContext.Provider value={{count,setCounter}}>
//     <Count/>
//   </CountContext.Provider>  
// }
  
// function Count(){
//   return <div>
//     <CountRender/>
//     <Button/>
//   </div>
// }
  
// function CountRender(){
//     const {count}=useContext(CountContext)
//     return <div>
//       {count}
//     </div>
// }
  
  
//   function Button(){
//     const {count,setCounter}=useContext(CountContext)
//     return <div>
//       <button onClick={()=>setCounter((c)=>c+1)}>increase</button>
//       <button onClick={()=>setCounter((c)=>c-1)}>decrease</button>
//       <CountContext.Provider value={count+2}>
//         <Dummy/>
//       </CountContext.Provider>
//     </div>
// }

// function Dummy(){
//     const value=useContext(CountContext);
//     return<div>
//         {"hello with value"+value}
//     </div>
// }

//----------------------------------<RECOIL>--------------------------------------------------------
//After this redux and recoil was introduced
//State management tools
//read about reducer 
//and useReducer hook
