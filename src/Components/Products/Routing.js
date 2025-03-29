import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sheader from '../S/Sheader'
import Login from './Login'

import Signup from './Signup'



import Header from '../Header'
import Scan from './Scan'
import LandingPage from '../LandingPage'
import ViewHotel from './ViewHotel'
import AddHotel from './AddHotel'
import Restaurant from './Restaurant'
import AdminPanel from './AdminPanel'
import Menu from './Menu'
import Addmenu from './Addmenu'
import Offer from './Offer'
import ViewOffer from './ViewOffer'
import Info from './Info'
import Help from './Help'
import Onboarding from './Help/Onboarding'
import Partner from './Help/Partner'
import Legal from './Help/Legal'
import FAQ from './Help/FAQ'
import Buy from './Buy'


import { Cart } from 'react-bootstrap-icons'

import Verify from './Verify'
import DashboardAuth from './DashboardAuth'
import Rufff from '../Rufff'
import Contact from './Contact'
import ViewEnquiry from './ViewEnquiry'
import RuffView from './RuffView'



const Routing = () => {
  return (
    <Routes>
         <Route path='/' element={<LandingPage/>}/>
    <Route path='/dashboard' element={<DashboardAuth/>}/>
    <Route path='/sheader' element={<Sheader/>}/>
    <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/help' element={<Help/>}/>
   <Route path='/onboarding' element={<Onboarding/>}/>
   <Route path='/addhotel' element={<AddHotel/>}/>
   <Route path='/viewhotel' element={<ViewHotel/>}/>
   <Route path='/restaurant' element={<Restaurant/>}/>
   <Route path='/adminpanel' element={<Verify/>}/>
   <Route path='/menu' element={<Menu/>}/>
   <Route path='/addmenu' element={<Addmenu/>}/>
   <Route path="/offer" element={<ViewOffer/>} />
   <Route path="/viewoffer" element={<Info/>} />
   <Route path="/partner" element={<Partner/>} />
   <Route path="/legal" element={<Legal/>} />
   <Route path="/faq" element={<FAQ/>} />
   <Route path="/cart/:_id" element={<Buy/>} />
   <Route path="/ruff/:_id" element={<Rufff/>} />
   <Route path="/contact" element={<Contact/>} />
   <Route path="/enquiry" element={<ViewEnquiry/>} />
   
    </Routes>
  )
}

export default Routing