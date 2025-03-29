import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const [name,setname]=useState("");
    const [cpassword,setCpassword]=useState("");

    const sign=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/signup`,{email,password,name,cpassword})
        .then((res)=>console.log(res))
        
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container p-5 shadow-lg'>
     <form onSubmit={sign}>
        <input type='text' name='name' value={name} placeholder='name' className='mb-3 form-control'
         onChange={(e)=>setname(e.target.value)}/>
        <input type='email' name='email' placeholder='email' value={email}
        className='mb-3 form-control'
         onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='password' value={password} className='mb-3 form-control'
         onChange={(e)=>setPassword(e.target.value)}/>
         <input type='password' name='cpassword' placeholder='cpassword' value={cpassword} className='mb-3 form-control'
         onChange={(e)=>setCpassword(e.target.value)}/>
        
        <input type='submit' value='signup'  className='mb-3 form-control'/>
     </form>
    </div>
  )
}

export default Signup