import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Start from './Start';
import City from './City';
import Footer from '../Footer';
import { Carousel } from 'bootstrap';
import { CardImage } from 'react-bootstrap-icons';
import ViewHotel from './ViewHotel';
//import Orders from './Orders';

const Restaurant = () => {
    const navigate=useNavigate();
    const item=(()=>{
        navigate("/menu")
    })
    const [bus,setbus]=useState([]);
    useEffect(()=>{
        axios.get(`https://backend-express-deploy-7cx7.onrender.com/addhotel`)
        .then((res)=>setbus(res.data))
        .catch((err)=>console.log(err))
    })
  return (
  <>
  <Start/>
  <ViewHotel/>
  <div className='container'>
        <h1>View Restaurants</h1>
        <div className='row p-3'>
      {
bus.map((data,index)=>{
    return(
        <div className=' col-sm-6 col-md-6 col-lg-4 col-xl-4 vil' key={index}>
           
            <img src={data.image} onClick={item}/>
          <div className='text-center bg-primary-subtle'>
          <b>  {data.Name}</b>
          <p>  {data.distance}</p>
          </div>
        </div>
    )
})
        }
      </div>

        </div>

    <City/>
   
  </>
  )
}

export default Restaurant;