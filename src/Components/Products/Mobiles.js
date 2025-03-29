import React from 'react'
import '../Products/Products.css'
import wash from '../Assets/mobiles/-original-imagtc2qzgnnuhxh.webp'
import wash1 from '../Assets/mobiles/-original-imagtc5fuzkvczr7.webp'
import wash2 from '../Assets/mobiles/-original-imah3xk8crpgrg9y.webp'
import wash3 from '../Assets/mobiles/-original-imah4gzvrgwnayrb.webp'
import wash4 from '../Assets/mobiles/-original-imah56hkgehywn5b.webp'
import wash5 from '../Assets/mobiles/13c-5g-redmi-13c-5g-redmi-original-imagw6s7x86zhqj6.webp'


const Mobiles = () => {
  return (
    <div className='mobiles'>
      <h3>Mobiles</h3>
      <diva className='row container'>
        
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash1} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
 
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
 
        
         <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash2} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
 
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash3} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
 
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash4} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
 
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-2'>
        <div className='card'>
         <div className='card-body'>
         
         <div className='app '>
        <img src={wash5} className='w-100'/>
 
        </div>
         </div>
 
         </div>
        </div>
         
 
        </diva>
      </div>
    
  )
}

export default Mobiles