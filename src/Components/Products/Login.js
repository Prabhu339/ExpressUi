import axios from 'axios';
import React, { useContext, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [token,setToken]=useState("")  
  const navigate=useNavigate();
  const send=(e)=>{
 e.preventDefault();
axios.post(`https://backend-express-deploy-7cx7.onrender.com/vendor/login`,{email,password})
.then((res)=>{
  console.log(res.data)
  if(res.data.token){
    setToken(res.data.token)
   
  }
 
})

.catch((err)=>console.log(err))

  }
  
  
  return (
    <div className='container shadow-lg ms-auto p-5 col-lg-6 text-center'>
     <h5 className='bold text-center'>Admin login</h5>
       <form onSubmit={send}>
        <input
        type='text'
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='mb-3 form-control'
        placeholder='Email Adress'

        />

        <input
        type='password'
        value={password}
        placeholder='Password'
        className='mb-3 form-control'
        onChange={(e)=>setPassword(e.target.value)}
        name='password'
        />

        <input
        type='submit'
        value='Login'
        className='form-control mb-3 bg-secondary'
        
        />


        </form>     
        
    </div>
  )
}

export default Login