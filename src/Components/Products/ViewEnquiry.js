import axios from 'axios'
import React, { useEffect, useState } from 'react'




const ViewEnquiry = () => {
    const [can,setcan]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/enquiries")
        .then((res)=>setcan(res.data))
        .catch((err)=>console.log(err))
    })
    const deletedata=(_id)=>{
        axios.delete(`http://localhost:4000/enquiries/${_id}`)
        .then((res)=>alert("data Deleted"))
        .catch((err)=>console.log(err));
    }
  return (
    <div className='p-5 container'>
   {can.map((data,index)=>{
    return(
        <div
          class="table-responsive"
        >
          <table
            class="table table-striped table-hover table-borderless table-primary align-middle"
          >
            <thead class="table-light">
              <caption>
                 Quiries
              </caption>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th> Number</th>
                <th>message</th>
                <th>quiry</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr
                class="table-primary"
              >
                <td scope="row">{data.name}</td>
                <td>{data.email}</td>
                
                <td>{data.phone}</td>
                <td>{data.message}</td>
                <td><button className='btn btn-primary'>Solved</button></td>
               <td> <button className='btn btn-danger 'onClick={()=>deletedata(data._id)}>Delete</button></td>
              </tr>
              
            </tbody>
            <tfoot>
              
            </tfoot>
          </table>
        </div>
        
    )
   })
   }
    </div>
  )
}

export default ViewEnquiry;