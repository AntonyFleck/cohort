import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {todoListState,todoListFilterSate, filtertodoList,todoListStats} from "./atoms"
import { useState } from 'react'

export default function App() {
  return<>
    <RecoilRoot>
    <Stats></Stats>
    <FilterOption/>
    <TodoList/>
    </RecoilRoot>
  </>
}

function Stats(){
  const value=useRecoilValue(todoListStats)
   return<>
    <h5>{value.totalitems}</h5>
    <h5>{value.itemscompleted}</h5>
    <h5>{value.itemsnotcompleted}</h5>
    </>
}

function FilterOption(){
  const [filter,setFilter]=useRecoilState(todoListFilterSate)

  const onChange=({target:{value}})=>{
      setFilter(value)
  }
    return <>
      Filter:
      <select value={filter} onChange={onChange}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
}

function TodoList(){
  const todo=useRecoilValue(filtertodoList)
  return <>
    <TodoItemCreator />
    {todo.map((item)=><Todoitem key={item.id} item={item}/>)}
  </>
}

function TodoItemCreator(){
  const [inputValue,setinputValue]=useState('')
  const settodoList=useSetRecoilState(todoListState);

  const onChange=({target:{value}})=>{
    setinputValue(value)
  }

  const addItem=()=>{
    settodoList((todoList)=>([...todoList,{
      id:getId(),
      text:inputValue,
      isComplete:false
    }]));
    setinputValue('');
  }

  return(
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}



function Todoitem({item}){
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const deleteItem=()=>{
    const newList=deletionAtIndex(todoList,index)
    setTodoList(newList)
  }


  const toggleItemCompletion=()=>{
      const newList=replaceItemAtIndex(todoList,index,{
        ...item,
        isComplete:!item.isComplete
      })
      setTodoList(newList)
}

function replaceItemAtIndex(arr,index,newvalue){
    return [...arr.slice(0,index),newvalue,...arr.slice(index+1)]
  }

  function deletionAtIndex(arr,index){
    return [...arr.slice(0,index),...arr.slice(index+1)]
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

let id = 1;
function getId() {
  return id++;
}




