import { RecoilRoot, useRecoilState,useRecoilValue,atom,selector, useResetRecoilState, useSetRecoilState, atomFamily, selectorFamily, useRecoilStateLoadable } from "recoil"
import {countAtom} from "./components/atoms/count"
import { useEffect } from "react"
// export default function App(){  
//   return<>
//   <RecoilRoot>
//     <Count/>
//     </RecoilRoot>
//   </>
  
//   }
  
//   function Count(){
//     console.log("re-rendered") 
//   return<div>
//     <CountRender/>
//     <br/><br/>
//     <Button/>
//     </div>
//   }
  
//   function CountRender(){
//     const count=useRecoilValue(countAtom)
//     return <div>
//       {count}
//     </div>
//   }
  
  
//   function Button(){
//     // const [count,setCounter]=useRecoilState(countAtom)
//     console.log("buttons")
//     const setCounter=useSetRecoilState(countAtom)
//     return <div>
//       <button onClick={()=>{setCounter(count=>count+1)}}>increase</button>
//       <br/><br/>
//       <button onClick={()=>{setCounter(count=>count-1)}}>decreasejjj</button>
//     </div>
// } 

//----------------------selector------------------------------------------------
//suppose you had to display the count is even or odd
//you could use useMemo() with the count as the value in array
//

//---------------------------asunchronous data queries--------------------------------

// const notification=atom({
//   key:"notification",
//   default:{
//     network:10,
//     jobs:10,
//     notifications:10,
//     messaging:10
//   }
// })

// const totalNotificationsSelector=selector({
//   key:"totalNotifications",
//   get:({get})=>{
//     const allNoti=get(notification);
//     return allNoti.network+allNoti.jobs+allNoti.notifications+allNoti.messaging
//   }
// })

// export default function App(){
//   return <>
//   <RecoilRoot>
//     <MainApp></MainApp>
//   </RecoilRoot>
//   </>
// }

// function MainApp(){
//   const [networkCount,setNetworkCount]=useRecoilState(notification)
//   const totalNotifications=useRecoilValue(totalNotificationsSelector)

//   useEffect(()=>{
//       fetch("https://sum-server.100xdevs.com/notifications")
//       .then((value)=>{
//           value.json()
//             .then((result)=>{
//               setNetworkCount(result)
//             })
//       })
//   },[])

//   return <>
//     <button>Home</button>
//     <button>My Network ({networkCount.network>=100?"99+":networkCount.network})</button>
//     <button>Jobs ({networkCount.jobs})</button>
//     <button>Messaging ({networkCount.messaging})</button>
//     <button>Notifications ({networkCount.notifications})</button>
//     <button>Me ({totalNotifications})</button>
//   </>
// }

//But this is not the right way 
// cause we have to give default values

//------------------------<>---------------------------------
//selectors can be used to incorporate default asynchronous data in your code


// const notification=atom({
//   key:"notification",
//   default:selector({
//     key:"anything",
//     get:async()=>{
//       const value=await fetch("https://sum-server.100xdevs.com/notifications")
//       const result =await value.json()
//       return result
//     }
//   })
// })

// const totalNotificationsSelector=selector({
//   key:"totalNotifications",
//   get:({get})=>{
//     const allNoti=get(notification);
//     return allNoti.network+allNoti.jobs+allNoti.notifications+allNoti.messaging
//   }
// })

// export default function App(){
//   return <>
//   <RecoilRoot>
//     <MainApp></MainApp> 
//   </RecoilRoot>
//   </>
// }

// function MainApp(){
//   const [networkCount,setNetworkCount]=useRecoilState(notification)
//   const totalNotifications=useRecoilValue(totalNotificationsSelector)

//   useEffect(()=>{
//       setNetworkCount(networkCount)
//   },[])


//   return <>
//     <button>Home</button>
//     <button>My Network ({networkCount.network>=100?"99+":networkCount.network})</button>
//     <button>Jobs ({networkCount.jobs})</button>
//     <button>Messaging ({networkCount.messaging})</button>
//     <button>Notifications ({networkCount.notifications})</button>
//     <button>Me ({totalNotifications})</button>
//   </>
// }

//-----------------------------------<atomfamily>-----------------------------------
// //reduces the number of re-renders but in the case of having the default value an array
// //all the components re-render as they depend on the same atom 

// const TODOS=[{
//   id:1,
//   title:"go to gym",
//   description:"Hit hard"
// },
// {
//   id:2,
//   title:"go to class",
//   description:"Hit hard"
// }]

// const todoAtomFamily=atomFamily({
//   key:"todoAtomFamily",
//   default:id=>{
//     return TODOS.find(x=>x.id==id)
//   }
// });

// const todoAtom=atom({
//   key:"todoAtom",
//   default:1
// })


// export default function App(){



//   return<>
//   <div>
//   <RecoilRoot>
//     <Todo id={1}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={2}></Todo>
//     <Todo id={2}></Todo>
//     </RecoilRoot>
//     </div>
//   </>
// }

// function Todo({id}){
//   const currentTodo=useRecoilValue(todoAtomFamily(id))
//   return <>
// {currentTodo.title}
// <br/>
//   </>
// }

//---------------------------------------<selectorFamily>---------------------------------------------

const todoAtomFamily=atomFamily({
  key:"todoAtomFamily",
  default:selectorFamily({
    key:"selectorFamily",
    get:(id)=>{
        return async()=>{
          const result=await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
          const value= await result.json()
          return value.todo
        }
    }
  })
});

//a function that returns a function 
// whenever an id is given an input to atomfamily return a function that can use this id and return an atom 

export default function App(){

  return<>
  <div>
  <RecoilRoot>
    <Todo id={1}></Todo>
    <Todo id={2}></Todo>
    <Todo id={2}></Todo>
    <Todo id={2}></Todo>
    </RecoilRoot>
    </div>
  </>
}

function Todo({id}){
  const currentTodo=useRecoilValue(todoAtomFamily(id))
  return <>
{currentTodo.title}
<br/>
  </>
}

//---------------------------------<>--------------------------------------------
//useRecoilStateLoadable,useRecoilValueLodable
// await new Promise(r=>setTimeout(r,5000))
//suspense and errorBoundary API understand yourself