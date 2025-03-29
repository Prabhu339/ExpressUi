import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  const post=((e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/signup`,
     {name,email,password,cpassword})
     .then((res)=>console.log(res),alert("signup successful"))
     .catch((err)=>console.log(err))

  })
  return (
    <div className='container p-5 shadow col-md-6 text-center'>
      <h5><b>Signup</b></h5>
      <form onSubmit={post}>
        <input type='text'
        name='name'
        placeholder='userName'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='mb-3 form-control'
        />

        <input
        type='text'
        name='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mb-3 form-control'
        />

        <input
        type='text'
        name='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-3 form-control'

        />
        <input
        type='text'
        name='cpassword'
        placeholder='cPassword'
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
        className='mb-3 form-control'

        />

        

      <input
      type='submit'
      value='signup'
      className='form-control mb-3 bg-success'

      />

      </form>
    </div>
  )
}

export default Signup