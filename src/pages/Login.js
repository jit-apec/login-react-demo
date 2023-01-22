import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {postApi} from "../service/apiservice"
// const axios = require('axios').default

function Login() {
  
  const [login,setLogin] = useState({
    email: '',
    password: '',
  })
 const [msg, setMsg] = useState(" ")
 const navigate = useNavigate()
//  const add = async (e) => {
//   e.preventDefault();
//   if(login.email === "" || login.password ===""){
//     alert("fileds are mandtory")
//     return
//   }
//   const loginData = await  postApi("/login", login)
//   if(loginData?.token){
//     navigate('/')
//     return
//   }
//   setMsg(loginData?.login?.message)
//   console.log("loginData" , loginData);
//  }

const add = async (e) => {
  e.preventDefault()
  const loginData = await  postApi("/login", login)
  if(loginData?.token){
    // navigate('/')
    return
  }
  setMsg(loginData?.login?.message)
  console.log("loginData" , loginData);
}



  return (
    <>
      <p className="title">Login Form</p>
      <form className="App"  onSubmit={add} >
        <h5>{msg}</h5>
        <input onChange={(e) => setLogin({...login, email:e.target.value})} type="email" placeholder='Email' required/><br/>
        <input onChange={(e) => setLogin({...login, password:e.target.value})} type="password" placeholder='Password' required/><br/>
        <button type='submit'>Login</button>
          
      </form>
    </>
  )
}

export default Login 