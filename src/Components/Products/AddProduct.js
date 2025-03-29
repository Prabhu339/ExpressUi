import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {
    const [addProduct,setAddProduct]=useState("");
    const [addPrice,setAddPrice]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const add=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/items`,{
            addProduct,addPrice,description,image})
            .then((res)=>{
                console.log("added");
                alert("success")
         
            })
            .catch((err)=>console.log(err))
    } 
  return (
    <div >
        <form onSubmit={add} >
           
            <input type='text'
            placeholder=' product name'
            value={addProduct}
            onChange={(e)=>setAddProduct(e.target.value)}
            className='mb-3 form-control w-50 text-center'
            />
            <input type='text'
            placeholder=' price'
            value={addPrice}
            onChange={(e)=>setAddPrice(e.target.value)}
            className='mb-3 form-control  w-50 text-center'
            />
            <input type='text'
            placeholder=' description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className='mb-3 form-control  w-50 text-center'
            />
             <input type='text'
            placeholder=' image'
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            className='mb-3 form-control  w-50 text-center'
            />
            <input type='submit' value='submit' className='btn btn-primary mb-3 w-50 text-center'/>
        </form>
    </div>
  )
}

export default AddProduct