
import { atom, selector } from "recoil"

export const todoListState = atom({
    key :"todoListState",
    default: [],
  });


export const todoListFilterSate=atom({
    key:"todoListFLiterSate",
    default:"Show All"
})

export const filtertodoList=selector({
    key:"filtertodoList",
    get:({get})=>{
        const originallist=get(todoListState)
        const filtercriteria=get(todoListFilterSate)
        switch(filtercriteria){
            case "Show Completed":
                return originallist.filter((item)=>{return item.isComplete});
            case "Show Uncompleted":
                return originallist.filter((item)=>{return !item.isComplete});
            default:
                return originallist; 
        }
    }
})


export const todoListStats=selector({
    key:"todoListStats",
    get:({get})=>{
        const originallist=get(todoListState)
        return{
            totalitems:`total item" ${originallist.length}`,
            itemscompleted:"items completed"+originallist.filter((item)=>item.isComplete).length,
            itemsnotcompleted:"items not completed"+originallist.filter((item)=>!item.isComplete).length
        }
    }
})


