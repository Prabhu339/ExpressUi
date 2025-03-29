import axios from 'axios';
import React, { useState } from 'react'

const AddHotel = () => {
  const [Name, setName] = useState("");
  const [distance,setDistance]=useState("");
  const [image,setImage]=useState("");
  const add=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/addhotel`,{Name,distance,image})
    .then((res)=>alert("added"))
    .catch((err)=>console.log(err))
  }
  return (
    <div className='row'>
      <div className='container shadow p-5 '>
      <form onSubmit={add}>
        
        <input type="text" name="Name" 
        placeholder="Enter hotel name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className='mb-3 form-control w-100'
        />
        <input type="text" name="distance" 
        placeholder="distannce"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className='mb-3 form-control w-100'
        />

        <input type="text" name="image" 
        placeholder="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className='mb-3 form-control w-100'
        />
        <input type='submit'
        value='send'
        className='w-100 text-bg-success'
        />
      </form>
      </div>
    </div>
  )
}

export default AddHotel