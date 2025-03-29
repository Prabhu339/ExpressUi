import React from "react"
import useCallApi from "./CallApi.js"

 

const Welcome = () => {
const courses = useCallApi("http://localhost:4000/courses")
const enquiries = useCallApi("http://localhost:4000/enquiries")
const batches = useCallApi("http://localhost:4000/batches")
const addbus = useCallApi("http://localhost:4000/addbus")





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