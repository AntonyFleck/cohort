import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function Signin(){
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
    return <>
  <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="harkirat@gmail.com" label={"Email"} onChange={(e)=>{setEmail(e.target.value)}} />
        <InputBox placeholder="123456" label={"Password"} onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className="pt-4">
          <Button onClick={async()=>{
            const res=await fetch('http://localhost:3000/api/v1/user/signin',{
              method:'POST',
              body:JSON.stringify({
                username:email,
                password:password
              }),
              headers:{
                'Content-Type': 'application/json',
              }
            })
            const real=await res.json()
            if(res.status!=411)
              {
                navigate('/dashboard');
                localStorage.setItem('token',real.token)
              }
              
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
    </>
}