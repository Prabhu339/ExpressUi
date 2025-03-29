import axios from 'axios'
import React, { useState } from 'react'

const Additems = () => {
    const [travel,setTravel]=useState("")
    const [price,setprice]=useState("")
    const [img,setimg]=useState("")
    const [description,setdescription]=useState("");
    const sendpost=((e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/signup`,
            {travel,price,img,description})
            .then((res)=>alert("posted"))
            .catch((err)=>alert("error"))
        
    })
  return (
    <div className='container p-5'>
        <form onSubmit={sendpost}>
            <input type='text'
            className='form-control mb-3'
            placeholder=' TRAVEL'
            name='travel'
            value={travel}
            onChange={(e)=>setTravel(e.target.value)}
            
            />
            <input type='text'
            placeholder='price'
            className='form-control mb-3'
            name='price'
            value={price}
            onChange={(e)=>setprice(e.target.value)}
            />
    
    <input type='text'
            placeholder='img'
            className='form-control mb-3'
            name='img'
            value={img}
            onChange={(e)=>setimg(e.target.value)}
            />

<input type='description'
            placeholder='description'
            className='form-control mb-3'
            name='description'
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
            />      
<input type='submit' value='sendpost'/>
        </form>
    </div>
  )
}

export default Additems