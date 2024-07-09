import { atom, selector } from "recoil";

export const countAtom=atom({
    key:"countAtom",
    default:0
})

export const evenSelector=selector({
    key:"evenSelector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2
    }
}) 

module.exports={
    
}
//evenSelector depends on countAtom
//kind of like useMemo()
//inside the get key/argument which is a function we write the logic how this selector
//is dependent on other atoms or selectors


