import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const[balance,setBalance]=useState()
    useEffect(()=>{
       fetch('http://localhost:3000/api/v1/account/balance',{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data)
                setBalance(data.balance)
            })
        })
    },[])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users/>
        </div>
    </div>
}