import React from 'react'
import img from "../S/Sassets/biriyani.avif"
import pic from "../S/Sassets/bonda.avif"
import pic1 from "../S/Sassets/idli.avif"
import pic2 from "../S/Sassets/dosa.avif"
import img2 from "../S/Sassets/parata.avif"
import pics from "../S/Sassets/poori.avif"



const Start = () => {
  return (
    <div className=''>
        <div className='container'>
        <div><h3 className='bold'>what's on your mind</h3></div>
        <div className='dataimg'>
        <img src={img} alt="image" />
        <img src={pic} alt="image" />
        <img src={pics} alt="image" />
        <img src={pic1} alt="image" />
        <img src={pic2} alt="image" />
     <img src={img2} alt="image" />

        </div>
        
        </div>
       
    </div>
   
  )
}

export default Start