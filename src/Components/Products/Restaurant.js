import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Start from './Start';
import City from './City';
import Footer from '../Footer';
//import Orders from './Orders';

const Restaurant = () => {
    const navigate=useNavigate();
    const item=(()=>{
        navigate("/menu")
    })
    const [bus,setbus]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:4000/addhotel`)
        .then((res)=>setbus(res.data))
        .catch((err)=>console.log(err))
    })
  return (
  <>
  <Start/>
  <div className='container p-5'>
        <h1>View Restaurants</h1>
        <div className='row'>
               {bus.map((bus)=>{ return(

                    <div className='container col-md-4 '>
                      
                       
                <div className="">
                
                    <div className=" p-3">
                    <div className='ant'>
                    <img className="anty shadow" src={bus.image} alt="Title" onClick={item}/>
                   
                    </div>
                    
                        <b className="text-dark card-text">{bus.Name}</b>
                        <p className="card-text"><b>RS.{bus.distance}</b></p> 
                    </div>  
                
                
                
                   
                </div>
                


                       
                    </div>

                )
            })}
        </div>
    </div>
    <City/>
   
  </>
  )
}

export default Restaurant;