import React from 'react'
import "../Products/Products.css"
import wash from '../Assets/laptops/-original-imagfdeqter4sj2j.webp'
import wash1 from '../Assets/laptops/-original-imah4qsetuyd8gwa.webp'
import wash2 from '../Assets/laptops/-original-imah5uhrgz7sawng.webp'
import wash3 from '../Assets/laptops/cx1400cka-ek0335-chromebook-asus-original-imah2f9ch5u9enbq.webp'
import wash4 from '../Assets/laptops/-original-imahyusrsex3y8zz.webp'
import wash5 from '../Assets/laptops/think.webp'


const LapTops = () => {
  return (
    <div className='Laptops'>
      <h3>laptops</h3>
      <div className='row container'>
        
       <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash1} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash2} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash3} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
       <div className='card'>
        <div className='card-body'>
        
        <div className='app '>
       <img src={wash4} className='w-100'/>

       </div>
        </div>

        </div>
       </div>

       <div className='col-sm-6 col-md-6 col-lg-4 col-xl-2'>
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

export default LapTops