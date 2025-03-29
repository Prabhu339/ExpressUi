import React from 'react'
import Mobiles from './Products/Mobiles'
import LapTops from './Products/LapTops'
import WashingMachine from './Products/WashingMachine'
import AddProduct from './Products/AddProduct'
import Ruff from './Waste/Ruff'
import ViewProduct from './Products/ViewProduct'
import Dress from './Products/Dress'
import Scan from './Products/Scan'
import Sheader from './S/Sheader'
import ViewHotel from './Products/ViewHotel'
import Footer from './Footer'
import Start from './Products/Start'
import Restaurant from './Products/Restaurant'
import SLocation from './S/SLocation'
import Courosel from './S/Courosel'



const LandingPage = () => {
  return (
    <div>
      <Sheader/>
       <ViewHotel/>
       <Courosel/>
     <Scan/>
     <SLocation/>
     
        
    </div>
  )
}

export default LandingPage