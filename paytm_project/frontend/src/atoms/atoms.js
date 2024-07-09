import { atom, selector } from "recoil";

export const filter1=atom({
    default:"",
    key:'filter'
})

export const users=atom({
    key:'users',
    default:selector({
        key:'userselector',
        get:async({get})=>{
            const filter=get(filter1)
            const res=await fetch(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            const json=await res.json()
            return json
        }
    })
})


