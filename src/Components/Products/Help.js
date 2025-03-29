import React, { useMemo, useState } from 'react'

import Onboarding from './Help/Onboarding'
import Partner from './Help/Partner'
import FAQ from './Help/FAQ'
import Legal from './Help/Legal'
import HelpImage from '../HelpImage'

const Help = () => {
    const [supportview,setSupportView]=useState()
    const HelpView=useMemo(()=>{
    
       if(supportview==="onboarding"){
        return <Onboarding/>
      }
      else if(supportview==="partner"){
        return <Partner/>
      }
      else if(supportview==="faq"){
        return <FAQ/>
      }
      else if(supportview==="legal"){
        return <Legal/>
      }
      else {
        return <HelpImage/>
      }


    },[supportview])
  return (
    <div>
        <div className='container-fluid help'>
            <h3>Help & Support</h3>
            <p>Let's take a step ahead and help you better.</p>
        </div>

       <div className='support'>

       </div>

       <div className='container-fluid helpside'>
        <div className='row'>
        <aside className='col-lg-3'>
          <b  className='text-center p-5'>View</b>
          <b onClick={()=>setSupportView("")}></b>
            <button onClick={()=>setSupportView("onboarding")}>Onboarding</button>
            <button onClick={()=>setSupportView("partner")}>partner</button>
            <button onClick={()=>setSupportView("legal")}>Legal</button>
            <button onClick={()=>setSupportView("faq")}>FAQ</button>
    
          
        </aside>
        <div className='col-lg-9 d-flex justify-content-center align-items-center text-success '>
                    {HelpView}</div>
        </div>

    </div>

    </div>
  )
}

export default Help