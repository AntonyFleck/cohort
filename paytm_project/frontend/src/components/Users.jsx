import { useEffect, useMemo, useState } from "react"
import { Button } from "./Button"
import {users,filter1} from '../atoms/atoms'
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"
export const Users = () => {
    // const [filte,setFilter]=useRecoilState(filter1)
    // const user1 =useRecoilValue(users)

    const [filte,setFilter]=useState()
    const [user1,setUsers]=useState([])
    // let timeout=0
    // function DebounceChange(){
    //     clearTimeout(timeout)
    //     timeout=setTimeout(onChange,1000)
    // }

    const onChange=(e)=>{
        setFilter((c)=>e.target.value)
    }

    useEffect(()=>{
            fetch(`http://localhost:3000/api/v1/user/bulk?filter=${filte}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('token')}`,
                }
            }).then((res)=>{
                res.json().then((real)=>{
                    setUsers(real.user)
                })
            })
        
    },[filte])
    return<RecoilRoot>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" onChange={onChange} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {user1.map((user)=>{return <User key={user._id} user={user} /> })}
        </div>
    </RecoilRoot>
}

function User({user}) {
    const navigate=useNavigate()
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} onClick={()=>{navigate(`/send?id=${user._id}&name=${user.firstName}`)}}/>
        </div>
    </div>
}