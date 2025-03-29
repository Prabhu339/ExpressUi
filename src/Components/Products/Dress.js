import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dress = () => {
    const [dress,setDress] =useState([])
    const [scrollPosition,setScrollPosition]=useState(0);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
            setDress(res.data)
        })
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
    <div className='container p-5' >
        <div className='inline'><h3>products</h3>
       
        <div className='inbtn'>
        <button onClick={()=>handleScroll("left")} className='btn btn-primary m-2'></button>
        <button onClick={()=>handleScroll("right")} className='btn btn-danger'></button>
        </div>
       
       </div>

        <div className=' display' id='chainGallery' onScroll={(e)=>setScrollPosition(e.target.scrollLeft)}>
        {
            dress.map((item,index)=>{
                return(
                    <div className=''>
                        <div className="card p-5 dia" >
                            <img src={item.image} className="card-img-top" alt="..." />
                            
                        </div>
                    </div>
                )

            })
        }
        </div>
    </div>
  )
}

export default Dress