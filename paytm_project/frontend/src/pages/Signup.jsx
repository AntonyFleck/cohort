import {Heading} from '../components/Heading'
import {SubHeading} from '../components/SubHeading'
import {InputBox} from '../components/InputBox'
import {Button} from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'
import { useState} from 'react'
import {useNavigate } from 'react-router-dom'

export function Signup(){
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')  
  const navigate=useNavigate(); 
    return<>
       <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder="John" onChange={(e)=>{setFirstname(e.target.value)}} label={"First Name"} />
        <InputBox placeholder="Doe" onChange={(e)=>{setLastname(e.target.value)}} label={"Last Name"} />
        <InputBox placeholder="harkirat@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} label={"Email"} />
        <InputBox placeholder="123456" onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            fetch("http://localhost:3000/api/v1/user/signup",{
                method:'POST',
                body:JSON.stringify({
                  firstName:firstname,
                  lastName:lastname,
                  username:email,
                  password
                }),
                headers: {
                  'Content-Type': 'application/json',
              }
            }).then((response)=>{
              if(response.status!=411){
                navigate('/dashboard')
                response.json().then((json)=>localStorage.setItem('token',json.token))
              }
              else
                alert("Wrong Inputs")
            })
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
</>
}