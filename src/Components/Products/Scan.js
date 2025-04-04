import React from 'react'
import scan from "../S/Sassets/foodscan.avif"
const Scan = () => {
  return (
    <div className='row'>
     
        <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6 bg-black text-light text-center p-5'>
            <h3 className='text-danger'>Express</h3>
            <h3>Get the Express Now!</h3>
            <p>For the best offers and discounts curated specially for you</p>
        </div>
        <div className='col-md-12 col-sm-12 col-lg-6 col-xl-6  bg-black text-center product p-5'>
            <img src={scan} className='w-50'/ >
        </div>
      
    </div>
  )
}

export default Scan