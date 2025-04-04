import React from 'react'

import Scan from './Products/Scan'
import Sheader from './S/Sheader'
import ViewHotel from './Products/ViewHotel'

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