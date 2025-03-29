import React from 'react'
import youtube from "./S/Sassets/youtube.webp"
import twitter from  "./S/Sassets/twiiter.webp"
import insta from  "./S/Sassets/insta2.jpeg"
import facebook from  "./S/Sassets/facebook.webp"
import gplay from  "./S/Sassets/gplay.avif"
import appstore from  "./S/Sassets/appstore.avif"


const Footer = () => {
  return (
    <div className='container-fluid'>
        <div className='end clear'>
<h4 className='text-center bold'>"Life is uncertain. Eat dessert first." 
</h4>
        </div>
        <section className='foott'>
            <div className="row ">
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                    <h3>Contact</h3>
                    <p className=''>Address: kakinada, Bhanugudi junction,  Andhra pradesh,
                        pin:533001 india</p>
                        <p>cell:7337266170</p>
                        <p>express123@gmail.com</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h3>Quick Links</h3>
                    <ul>
                        
                        <li>contact</li>
                      
                        <li>Refund status</li>
                        <li>Registration</li>
                        <li>gallery</li>
                        <li>privacy policy</li>
                        <li>About us</li>
                        
                       
                    </ul>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-4'>
                    <h3>Follow us on</h3>
<img src={youtube} className='img'/>
<img src={facebook}  className='img'/>
<img src={insta}  className='img'/>
<img src={twitter}  className='img'/>
                </div>
            </div>
        </section>
        <divi className='row'>
<div className=' col-lg-12 container p-4 border'><h4 className='lasts p-2'><b>For better experience, download the Express app now
</b></h4>
<img src={gplay} className=' m-2'/>
<img src={appstore} className='m-2'/>
</div>
        </divi>

       
    </div>
  )
}

export default Footer