import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Ruff = () => {
    const [enquiry,setEnquiry]=useState([]);
    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products`)
      
      .then((res)=>setEnquiry(res.data))
      .catch((err)=>console.log(err));
      
    })
  return (
    <div>
       {
        enquiry.map((data)=>{
            return (
           
          <section className='h-50 w-50 left'>
             
           <img src={data.image} className='h-50 w-50 p-5'/>
           
       
          </section>
            
            )
            

        })
       }

    </div>
  )
}

export default Ruff