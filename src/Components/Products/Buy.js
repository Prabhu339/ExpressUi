import React, { useContext, useEffect, useState } from 'react'
import { addCount, addmenu } from '../../App'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Buy = () => {
  const [count,setCount]=useContext(addCount)
  const [menu,setMenu]=useContext(addmenu);
  const [men,setmen]=useState("")
  const {_id}=useParams();
  useEffect(()=>{
    axios.get(`https://backend-express-deploy-7cx7.onrender.com/menu/${_id}`)
    .then((res)=>setmen(res.data))
    .catch((err)=>console.log(err))
  
  })
 
  return (
    <>
   
     
       
          <div className='d-flex'>
 <h4 className='bold text-center'></h4>
      <div className=' col-lg-6 card w-25 container p-5'>
      <img src={men.image} className='w-100'/>
      </div>
    <div className=' col-lg-6 container p-5'>
      
      
     
    
      <h1>{men.itemname}</h1>
      <button className='btn bg-primary-subtle w-50'>Price: {menu.price}</button>
      <p> {men.details}</p>
      <button className='btn btn-success w-75'>Buy Now</button>
     </div>

    
       
   </div>
    </>

          
        
    )}

export default Buy