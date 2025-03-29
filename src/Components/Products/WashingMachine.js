import React from 'react'
import wash from '../Assets/washing/-original-imags7pzrywzxc2z.webp'
import "../Products/Products.css"
import wash1 from '../Assets/washing/-original-imagx7qh8qzppe3s.webp'
import wash2 from '../Assets/washing/-original-imagx7qmg7cmycjr.webp'
import wash3 from '../Assets/washing/-original-imagz7gdydgggym4.webp'
import wash4 from '../Assets/washing/-original-imah3cw6nzunnedd.webp'
import wash5 from '../Assets/washing/-original-imah3zyxzxqeszja.webp'
 

const WashingMachine = () => {
  return (
    <div className='washing'>
        <h3>Washing Machine</h3>
       <div className='row container'>
        
       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash1} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       
        <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash2} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash3} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash4} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-4 col-md-4 col-lg-3 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash5} className='w-100'/>

       </div>
        </div>

        </div>
       </div>
        

       </div>
    </div>
  )
}

export default WashingMachine