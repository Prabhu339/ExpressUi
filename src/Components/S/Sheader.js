import React from 'react'
import veg from "../S/Sassets/Veggies_new (1).avif"
import fruit from "../S/Sassets/fruit.avif"
import card1 from "../S/Sassets/arrow.jpg";
import card2 from "../S/Sassets/card22.avif"
import { useNavigate } from 'react-router-dom';


const Sheader = () => {
  const navigate=useNavigate();
  const shift=()=>{
    navigate("/restaurant");
  }
  return (
    <div>
        <div className='row bg'>
       <div className='col-3'>
        <img src={veg} className='w-100'/>
       </div>
       <div className='col-6'>
        <h2 className='text-center mt-5'>Order food & groceries. Discover best restaurants. Express it!</h2>
       
        <img src={card1} className='w-50 mt-5'onClick={shift}/>
        <img src={card2} className='w-50 mt-5' onClick={shift} /> </div>
       <div className='col-3'>
        <img src={fruit} className='w-100'/>
       </div>
       
        </div>
    </div>
  )
}

export default Sheader