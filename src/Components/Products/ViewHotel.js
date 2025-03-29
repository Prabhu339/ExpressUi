import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Mobiles from './Mobiles';
import left from "../S/Sassets/left1.png"
import right from "../S/Sassets/right1.png"

const ViewHotel = () => {
    const [show,setShow]=useState([]);
    const [scrollPosition,setScrollPosition]=useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:4000/addhotel`)
        .then((res)=>setShow(res.data))
        .catch((err)=>console.log(err))
    })

    const handleScroll=((dir)=>{
      const gallery=document.getElementById("chainGallery")
      const scrollAmount=500;
      if(dir==="left"){
          gallery.scrollTo({
              left:gallery.scrollLeft-scrollAmount,
              behavior:"smooth"

          })

      }else if(dir==="right"){
          gallery.scrollTo({
              left:gallery.scrollLeft+scrollAmount,
              behavior:"smooth"
          })
      }
     
  })
    
    
  return (
   


   <div>

<div className='inline p-5'>
       <h4 className='bold '>Discover best restaurants on Dineout</h4>
       <div className='inbtn'>
       <button onClick={()=>handleScroll("left")} className='btn btn '><img src={left} className='but '/></button>
       <button onClick={()=>handleScroll("right")} className='btn btn me-auto'><img src={right} className='but '/></button>
       </div>
      
      </div>

     <div className='container p-1 display'id='chainGallery' onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
     

     

      {
        show.map((data,index)=>{
          return(
            <div key={index}  className=''>
              
             
              <div className=" p-1 product " >
                            <img src={data.image}   alt="..." className='' />
                            <p><b>{data.Name}</b></p>
              <p>{data.distance}</p>
                        </div>
            </div>
          )
        })
      }
      
    </div>
   </div>
  )
}

export default ViewHotel