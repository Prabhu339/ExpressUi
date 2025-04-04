import React, { useContext, useEffect, useMemo, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loginCheck } from '../../App'
import Welcome from './Welcome'
import Offer from './Offer'
import { Info } from 'react-bootstrap-icons'
import AddHotel from './AddHotel'
import AddProduct from './AddProduct'
import ViewHotel from './ViewHotel'
import OfferDelete from './OfferDelete'
import ViewEnquiry from './ViewEnquiry'
import Addmenu from './Addmenu'

const DashboardAuth = () => { 
  const [token,setToken]=useContext(loginCheck)
  const [data,setData]=useState("")
const [view,setView]=useState();

  const Dashboardview=useMemo(()=>{
    if(view===" "){
      return(Welcome)
    }
    else if (view==="addmenu"){
      return <Addmenu/>}
  
     else if (view==="addoffer"){
        return <Offer/>
      
    }
    else if (view==="viewOffer"){
      return <OfferDelete/>
    
  }

    else if (view==="addHotel"){
      return <AddHotel/>
    }
    else if (view==="cart"){
      return <AddProduct/>
    }
    else if (view==="wished items"){
      return <ViewHotel/>
    }
    

    else if (view==="enquiry"){
      return <ViewEnquiry/>
    }

    else {
      return <Welcome/>
    }
    
    
  },[view])
  


  useEffect(()=>{
    axios.get(`https://backend-express-deploy-7cx7.onrender.com/dashboard`,{
      headers:{"x-token":token}}
    )
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
  },[])

  const navigate=useNavigate();
  if(!token){
    navigate('/login')
  } 
  return (
    <div>
      
     
      <div className='container-fluid'>
        <div className='row'>
        <aside className='col-lg-3'>
          <h3><b onClick={()=>setView("")}>DashBoard view</b></h3>
            <button onClick={()=>setView("addoffer")}>AddOffer</button>
            <button onClick={()=>setView("addHotel")}>AddHotel</button>
            <button onClick={()=>setView("viewOffer")}>viewOffer</button>
            <button onClick={()=>setView("addmenu")}>AddMenu</button>
            <button  onClick={()=>setView("enquiry")}>View Quiries</button>
            <button onClick={()=>setToken("")} className='text-light bg-danger' >Logout</button>

          
        </aside>
        <div className='col-lg-9 d-flex justify-content-center align-items-center text-success '>
                    {Dashboardview}</div>
        </div>

    </div>



    </div>
  )
}  

export default DashboardAuth