import React from 'react'
import { BlogData } from './RuffRestaurantData'
const RuffView = () => {
   
  return (
    <div className='row'>
        {BlogData.map((data,index)=>{
    return(
       
         <div key={index}  className=' col-sm-6 col-md-4 col-lg-4 col-xl-3 p-3 text-center'>
       <div className=' ruffview'>
       <img src={data.img} className='w-100'/>
       
       <h5><b>{data.name}</b></h5>
      <p>{data.region}</p>
       <b className='btn btn-warning w-50'>Add to Cart</b>
       </div>
            </div>  
 
    )
   })}
    </div>
  )
}

export default RuffView;