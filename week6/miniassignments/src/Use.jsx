import { useState,useEffect,useMemo, useCallback, useRef } from "react"

// export default function App(){
//     const [number,setSum]=useState(0)
//     const [counter,setCounter]=useState(0)

//     let count=useMemo(()=>{
//         console.log("run")
//         let finalcount=0
//         for(let i=0;i<=number;i++)
//             finalcount=(finalcount+i)
//         console.log(finalcount)
//     },[number])
//     // only when number changes this snippet runs
//     // let count=0
//     // console.log("run")
//     // for(let i=0;i<=number;i++)
//     //     count=count+i
//     return<div>
//         <input placeholder="number" onChange={(e)=>{setTimeout(()=>{setSum(e.target.value)},2000)}}></input>
//         <h3>The sum is {count}</h3>
//         <button onClick={()=>{
//             setCounter(counter+1)
//         }}>Counter {counter}</button>
//     </div>
// }

//--------------------------<>-------------------------------
//// useEffect cant return anything
// export default function App(){
//     const [todo,setTodos]=useState([])

//     useEffect(()=>{
//         setInterval(()=>{
//             fetch("https://sum-server.100xdevs.com/todos")
//             .then((value)=>{
//                 value.json()
//                     .then((result)=>{
//                         console.log(result)
//                         setTodos(result.todos)
//                     })
//             })
//         },3000)
//     },[])
    
//     return<>
//         {todo.map((value)=>{
//             return<Todo title={value.title} description={value.description}></Todo>
//         })}
//     </>
// }

// function Todo({title,description}){
//     return <>
//     <div>
//         <h1>{title}</h1>
//         {description}
//     </div>
//     </>
// }

//---------------------<useCallback>-----------------------------

////when the dependencies chances the signature of the function changes

// const a=useCallback(()=>{},[])

//-------------------<useRef>----------
//lets you access DOM elements

// export default function App(){
//     const [incomeTax,setincomeTax]=useState(2000)
//     const divref=useRef();

//     useEffect(()=>{
//         setTimeout(()=>{
//             divref.current.innerHTML=10;
//         },3000)
//     },[])
//     return<>
//         <button ref={divref}>{incomeTax}</button>
//     </>
// }