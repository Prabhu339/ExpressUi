import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddHotel from './Products/AddHotel'
import axios from 'axios'

const Rufff = () => {
    const {_id}=useParams();
    const [bun,setbun]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/offer/${_id}`)
        .then((res)=>setbun(res.data))
        .catch((err)=>console.log(err))
    })
   
  return (
  <div className='row'>
                    <div className='card shadow col-md-6  '>
                    <div className='card-body'>
                    <img src={bun.img} className='w-75'/>
                    </div>
                       <div className='card-footer bg-primary-subtle'>
                       <b>{bun.region}</b>-----
                  <b>{bun.discount}</b>
                  <p>{bun.city}</p>
                       </div>
                 <button className='btn btn-primary'>Add To Cart</button>
            
                  </div>
  </div>
  )
}

export default Rufff