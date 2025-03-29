import React, { useContext, useMemo, useState } from 'react';
import LandingPage from '../LandingPage';
import Restaurant from './Restaurant';
import AddHotel from './AddHotel';
import AddProduct from './AddProduct';
import ViewHotel from './ViewHotel';
import Welcome from './Welcome';
import Offer from './Offer';
import ViewOffer from './ViewOffer';
import OfferEdit from './Info'
import OfferDelete from './OfferDelete';
import Info from './Info';
import AdminPanel from './AdminPanel';
import { loginstatus } from '../../App';
import ViewEnquiry from './ViewEnquiry';


const Dashboard = () => {
  
 
  const [view,setView]=useState();
  const [login,setLogin]=useContext(loginstatus)
  
  const Dashboardview=useMemo(()=>{
    if (view===""){
      return <Welcome/>}
  
      if (view==="addoffer"){
        return <Offer/>
      
    }
    if (view==="viewOffer"){
      return <Info/>
    
  }

    if (view==="addHotel"){
      return <AddHotel/>
    }
    if (view==="cart"){
      return <AddProduct/>
    }
    if (view==="wished items"){
      return <ViewHotel/>
    }
    if (view==="enquiry"){
      return <ViewEnquiry/>
    }
    
    
    
  },[view])
  

  
  
 
  //end{code}

 if(login){
  return (
    <div className='container-fluid'>
        <div className='row'>
        <aside className='col-lg-3'>
          <h1 onClick={()=>setView("")}>DashBoard view</h1>
            <button onClick={()=>setView("addoffer")}>AddOffer</button>
            <button onClick={()=>setView("addHotel")}>AddHotel</button>
            <button onClick={()=>setView("viewOffer")}>viewOffer</button>
            <button  onClick={()=>setView("wished items")}>wished Items</button>
            <button  onClick={()=>setView("enquiry")}> view quiries</button>
          
        </aside>
        <div className='col-lg-9 d-flex justify-content-center align-items-center text-success '>
                    {Dashboardview}</div>
        </div>

    </div>

  ) 
  
}
else{
  return <AdminPanel/>
}

}

export default Dashboard