import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { addCount, addmenu } from '../../App';
import { use } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Menu = () => {

  
  const acart=()=>alert( `added to cart`,{count});
    const [menu,setMenu]=useContext(addmenu);
    const [count,setCount]=useContext(addCount);

    const {addToCart,CartItems}=useCart()
   // const [img, setImg] = useState("");
    //const [discount, setDiscount] = useState("");
    //const [_id,setid]=useState("");
    
   

 
    useEffect(()=>{
        axios.get(`http://localhost:4000/menu`)
        .then((res)=>setMenu(res.data))
        .catch((err)=>console.log(err))
      
    })
  return (
    <div className='container p-5'>
        
        
           {
            menu.map((data,index)=>{
                return(
                  <div key={index} className='row border'>
                      <div className='col-9 container'>
                       <h5> <b>{data.itemname}</b></h5>
                        <h5>Rs{data.price}</h5>
                        <p> {data.details}</p>
                      </div>

                   <div className='col-3 container '>
                    <img src= {data.image} className='w-50 text-center block'/>
                   <NavLink to={`/cart/${data._id}`}> 
                   <button className='text-success btn btn-light shadow m-3 block w-50' >AddTO
                      <span className='text-danger'><b>Cart</b></span></button>
                      
                   </NavLink>
                                        
                    </div> 

                  </div>
        
                )
            })
           }
           

       
    </div>
  )
}

export default Menu