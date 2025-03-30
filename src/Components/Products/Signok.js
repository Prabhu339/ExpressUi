import axios from 'axios'
import React, { useContext, useState } from 'react'
import { loginCheck } from '../App'
import { useNavigate } from 'react-router-dom'

const Signok = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [token,setToken]=useContext(loginCheck)
    const navigate=useNavigate()
    const login=(e)=>{
        e.preventDefault()
        axios.post(`https://backend-express-deploy-7cx7.onrender.com/login`,{email,password})
        .then((res)=>{
            console.log(res.data);
            if(res.data.token){
                setToken(res.data.token)
            }
            
        })
        .catch((err)=>console.log(err))
    }

  if(token){
    navigate('/dashboard')
  }

  return (
    <div className='container p-5'>
        <h1>login{token}</h1>
        <form onSubmit={login}>
        <input type='email' name='email' placeholder='email' value={email}
        className='mb-3 form-control'
         onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='password' value={password} 
        className='mb-3 form-control'
         onChange={(e)=>setPassword(e.target.value)}/>

<input type='submit' value='login'  className='mb-3 form-control'/>
        </form>
    </div>
  )
}

export default Signok