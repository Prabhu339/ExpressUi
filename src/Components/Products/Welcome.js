import React from "react"
import useCallApi from "./CallApi.js"

 

const Welcome = () => {
const courses = useCallApi("https://backend-express-deploy-7cx7.onrender.com/courses")
const enquiries = useCallApi("https://backend-express-deploy-7cx7.onrender.com/enquiries")
const batches = useCallApi("https://backend-express-deploy-7cx7.onrender.com/batches")
const addbus = useCallApi("https://backend-express-deploy-7cx7.onrender.com/addbus")





  return (
     <div >
      <h1>Welcome to Admiin DashBoard</h1>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>{addbus.length}</h5>
              
              <h5 className='card-title'>buses</h5>
            </div>
          </div>

        </div>
        <div className='col-lg-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{enquiries.length}</h5>
            <h5 className='card-title'>quiries</h5>
          </div>
        </div>
      </div>
      
      </div>
      
     </div>
  )
}

export default Welcome