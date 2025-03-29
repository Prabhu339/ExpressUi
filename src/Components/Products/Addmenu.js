import axios from 'axios';
import React, { useState } from 'react'

const Addmenu = () => {
    const [itemname,setitemname]=useState("");
    const [price,setprice]=useState("");
    const [image,setimage]=useState("");
    const [details,setdetails]=useState("");
    const menu=((e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/menu`,{
           details,itemname,image,price
        })
        .then((res)=>alert("added"))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container p-5 shadow '>
     <form onSubmit={menu}>
     <input
        type='text'
        name='itemname'
        placeholder=' item name'
        value={itemname}
        className='mb-3 form-control w-75'
        onChange={(e)=>setitemname(e.target.value)}
        />

<input
        type='text'
        name='details'
        placeholder=' details'
        value={details}
        className='mb-3 form-control w-75'
        onChange={(e)=>setdetails(e.target.value)}
        />
       
       <input
        type='text'
        name='image'
        placeholder=' image'
        value={image}
        className='mb-3 form-control w-75'
        onChange={(e)=>setimage(e.target.value)}
        />
        
 <input
        type='text'
        name='price'
        placeholder='price'
        value={price}
        className='mb-3 form-control w-75'
        onChange={(e)=>setprice(e.target.value)}
        />
     <input type='submit' value='Addmenu' className='w-75'/>
     </form>
    </div>
  )
}

export default Addmenu;