import React, { useState } from 'react'
import axios from "axios";
const ApiLogin = () => {
  const [details,setDetails]=useState("")

const changeData=(e)=>{
  console.log(e.target.name,e.target.value);
  setDetails({...details,[e.target.name]:e.target.value})
   
}
const validate=(e)=>{
e.preventDefault();
console.log(details);

axios.post("http://localhost:4000/login",details)
.then((res)=>console.log(res)

)

.catch((err)=>console.log(err)
)
}
  return (
    <div className='container p-5 '>
        <div className='col-lg-6 shadow p-5 mx-auto'>
           <form onSubmit={validate}>
           <input type='email' name='Email'
            placeholder='Email Address'
            onChange={changeData}
             className='mb-3 form-control'/>
             <input type='text'
             name='password'
             placeholder='Password'
             onChange={changeData}
             className='form-control mb-3'/>
             <input type='submit' className='form-control mb-3'/>
           </form>
        </div>
        
    </div>
  )
}

export default ApiLogin