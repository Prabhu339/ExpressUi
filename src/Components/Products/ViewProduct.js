import axios from 'axios';
import React, { useEffect, useState } from 'react'
<i class="bi bi-arrow-left-circle"></i>

const ViewProduct = () => {
    const [showProduct,setShowProduct]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/items
`)
.then((res)=>setShowProduct(res.data))
.catch((err)=>console.log(err)
)})

  
  return (
    <div>
      <h1>View Product</h1>
      {showProduct.map((data, index) => (
        <div className="card left" key={index}>
          <div className=''>
            <img src={data.image} className="" />
            <p>{data.price}</p>
          </div>
        </div>
      ))}
      
    </div>
  )
};

export default ViewProduct;