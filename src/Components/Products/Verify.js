import axios from 'axios'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loginCheck } from '../../App'

const Verify = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
     const [token,setToken]=useContext(loginCheck)
    const navigate=useNavigate()
    const submit=(e)=>{
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
    <div>
        <div className='container p-5 shadow mx-auto col-md-6'>
        <h4 className='text-center'><b>Admin Login</b></h4>
        <form onSubmit={submit}>
        <input type='email' name='email' placeholder='email' value={email}
        className='mb-3 form-control'
         onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='password' value={password} 
        className='mb-3 form-control'
         onChange={(e)=>setPassword(e.target.value)}/>

<input type='submit' value='login'  className='mb-3 form-control bg-primary'/>
        </form>
       
        <NavLink to='/signup'> <button  className='btn btn-danger'>Don't Have An Account</button></NavLink>
    </div>
    </div>
  )
}

export default Verify