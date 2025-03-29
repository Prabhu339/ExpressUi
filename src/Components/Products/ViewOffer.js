import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bgoffer from "../S/Sassets/DO_collectionBanner.avif"
import { NavLink } from 'react-router-dom';

const ViewOffer = () => {
    const [give,setgive]=useState([]);
    useEffect(()=>{
    
    axios.get(`http://localhost:4000/offer`)
    .then((res)=>setgive(res.data))
    .catch((err)=>console.log(err))
    })
 
      
    return (
      <div  className='container p-5'>
          <h4 className='bold' > People who love to eat are always the best people</h4>
          <div className='bgoffer ' >
                 <h3 className='text-center  text-light'>Restaurant Near Me For<br></br> Dining Out</h3>
                </div>

         <div className='row'>
         {
        give.map((data,index)=>{
          return(
           
           
            <div key={index} className='col-sm-12 col-md-6 col-lg-4 col-xl-3  offerlist'>
             
              
                  <img src={data.img} className=' '/>
                                   {/* <b>{data.region}</b><br></br>
                  <b>{data.discount}</b><br></br>
                  <p>{data.city}</p>*/}
                 <NavLink to={`/ruff/${data._id}`}>
                 <button className='btn btn-success w-75'>Know More</button>
                 </NavLink>
                 
  
              
            </div>
           
          
          )
        })
      }
         </div>
      

       </div>
      
  )
}

export default ViewOffer



 