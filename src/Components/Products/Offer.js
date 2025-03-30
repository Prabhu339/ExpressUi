import axios from 'axios';
import React, { useState } from 'react'


const Offer = () => {
  const [img,setImg]=useState("");
  
  const [region,setregion]=useState("");
 const [city,setcity]=useState("");
 const [offer,setoffer]=useState("");
 const [discount,setdiscount]=useState("");
 const attach=(e)=>{
  e.preventDefault();
  axios.post(`https://backend-express-deploy-7cx7.onrender.com/offer`,{img,region,city,offer,discount})
  .then((res)=>{
    alert("added")
    console.log(res.data);
    
  })
  .catch((err)=>console.log(err)
  )
    
 }
  return (
    <div className='container p-5 col-lg-6 shadow '>
      <form onSubmit={attach}>
      <input type='text'
      name='img'
      placeholder='image'
      className='form-control w-100 mb-3'
      value={img}
      onChange={(e)=>setImg(e.target.value)}
      />


      

<input type='text'
      name='region'
      placeholder='region'
      className='form-control w-100 mb-3'
      value={region}
      onChange={(e)=>setregion(e.target.value)}
      />

<input type='text'
      name='city'
      placeholder='city'
      className='form-control w-100 mb-3'
      value={city}
      onChange={(e)=>setcity(e.target.value)}
      />

<input type='text'
      name='discount'
      placeholder='discount'
      className='form-control w-100 mb-3'
      value={discount}
      onChange={(e)=>setdiscount(e.target.value)}
      /> 

<input type='text'
      name='offer'
      placeholder='offer'
      className='form-control w-100 mb-3'
      value={offer}
      onChange={(e)=>setoffer(e.target.value)}
      />
    
    <input type='submit' value='submit' className='w-100 mb-3 bg-primary'/>
      </form>
    </div>
  )
}

export default Offer