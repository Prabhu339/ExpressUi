import React from 'react'
import scan from "../S/Sassets/scan1.jpg"
const Scan = () => {
  return (
    <div className='container-fluid '>
      <div className='row '>
        <div className='col-8 bg-black text-light text-center p-5'>
            <h3 className='text-danger'>Express</h3>
            <h3>Get the Express Now!</h3>
            <p>For the best offers and discounts curated specially for you</p>
        </div>
        <div className='col-4 bg-black text-center product p-5'>
            <img src={scan} className='w-100'/ >
        </div>
      </div>
    </div>
  )
}

export default Scan