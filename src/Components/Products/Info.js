import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Info = () => {
    const [app,setApp]=useState([]);
    const [region,setRegion]=useState("");
    const [city,setCity]=useState("");
    const [discount,setDiscount]=useState("")
    const [img,setImg]=useState("");
    const [_id,setid]=useState("");
    useEffect(()=>{
        axios.get(`http://localhost:4000/offer`)
        .then((res)=>setApp(res.data))
        .catch((err)=>console.log(err))
        
    })
    const deletedata=(_id)=>{
        axios.delete(`http://localhost:4000/offer/${_id}`)
        .then((res)=>alert("data Deleted"))
        .catch((err)=>console.log(err));
    }
    const getonedata=(_id)=>{
        axios.get(`http://localhost:4000/offer/${_id}`)
        .then((res)=>{
          setRegion(res.data.region)
          setImg(res.data.img)
          setCity(res.data.city)
          setDiscount(res.data.discount)
          setid(res.data._id)
        })
    }
    const updatedata=((e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/offer/${_id}`,{_id,region,city,discount,img})
        .then((res)=>alert("data updated"))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container p-5'>
  <h1 className='text-center'>INFO's</h1>
  <table className="table table-striped">
            <thead>
                <tr>
                    <th>img</th>

                    <th >region</th>
                    <th >city</th>
                    <th>discount</th>
                    <th>_id</th>
                   
                </tr>
            </thead>
            
                            <tbody>
                            {app.map((user)=>{
                                return(
                                    <tr>
                                        <td><img src={user.img} alt="" className='w-25'/></td>
                                        <td>{user.region}</td>
                                        <td>{user.city}</td>
                                        <td>{user.discount}</td>
                                        <td>{user._id}</td>
                                        
                                        <button className='btn btn-danger me-2'onClick={()=>deletedata(user._id)}>Delete</button>
                                        <button className='btn btn-success' onClick={()=>getonedata(user._id)}
                                        data-bs-target="#update"
                                        data-bs-toggle="modal"
                                        >Edit</button>
                        </tr>
                          )
                        })
        
                        }
        
                    </tbody>
                </table>
                <div className='modal fade'id='update'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <form onSubmit={updatedata}>
                            <input type='text'
                            value={region}
                            placeholder='journey'
                            onChange={(e)=>setRegion(e.target.value)}
                            name='region'
                            className='form-control mb-3 w-100'/>
                            
                            <input type='text'
                            value={city}
                            placeholder='price'
                            onChange={(e)=>setCity(e.target.value)}
                            name='city'
                            className='form-control mb-3 w-100'
                            />
                            <input type='text'
                            value={discount}
                            placeholder='description'
                            onChange={(e)=>setDiscount(e.target.value)}
                            name='discount'
                            className='form-control w-100 mb-3'
                            />

                             <input type='text'
                            value={img}
                            placeholder='image'
                            onChange={(e)=>setImg(e.target.value)}
                            name='img'
                            
                            />
                            

                            <input type='submit'
                            value='update'
                            className='bg-rimary '
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>                    
    </div>
  )
}

export default Info