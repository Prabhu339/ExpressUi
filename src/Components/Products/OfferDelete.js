import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OfferDelete = () => {
    const [data,setdata]=useState([]);
    const [img,setImg]=useState("");
    const [img1,setImg1]=useState("");
    const [img2,setImg2]=useState("");
    const [region,setRegion]=useState("");
    const [city,setCity]=useState("");
    const [discount,setDiscount]=useState("");
    const [offer,setOffer]=useState("");
    const [_id,setid]=useState("");
     useEffect (()=>{
        
    axios.get(`http://localhost:4000/offer`)
    .then((res)=>setdata(res.data))
    .catch((err)=>console.log(err));

})
const deletedata=(_id)=>{
    axios.delete(`http://localhost:4000/offer/${_id}`)
    .then((res)=>alert("data Deleted"))
    .catch((err)=>console.log(err));
}

const getonedata=(_id)=>{
    axios.get(`http://localhost:4000/offer/${_id}`)
    .then((res)=>{
        setImg(res.data.img);
        setImg1(res.data.img1);
        setImg2(res.data.img2);
        setRegion(res.data.region);
        setCity(res.data.city);
        setDiscount(res.data.discount);
        setOffer(res.data.offer);
        setid(res.data._id);

    })
    .catch((err)=>alert(err))
 }

 const updatedata=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000/offer/${_id}`,{img,img1,img2,region,city,discount,offer})
    .then((res)=>alert("data updated"))
    .catch((err)=>alert(err))
}


  return (
    <div className='container-fluid m-0'>
<div className='tab'>
<h2 className='text-center'><b>view<span className='text-danger'>Offer</span></b></h2>
        <table className="table table-striped ">
            <thead>
                <tr>
                    <th>img</th>
                    <th>region</th>
                    <th>city</th>
                    <th>discount</th>
                    <th>offer</th>
                    <th>Delete </th>
                    <th>Update</th>
                    

                </tr>
            </thead>
            <tbody>
                {data.map((user)=>{
                    return(
                        <tr>
                            <td><img src={user.img} alt="" className='w-50'/></td>
                            <td>{user.region}</td>
                            <td>{user.city}</td>
                            <td>{user.discount}</td>
                            <td>{user.offer}</td>
                           
                           <td> <button className='btn btn-danger me-2 inline'onClick={()=>deletedata(user._id)}>Delete</button></td>
                           <td> <button className='btn btn-success inline' onClick={()=>getonedata(user._id)}
                            data-bs-target="#update"
                            data-bs-toggle="modal"
                                
                                >Edit</button></td>
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
                            placeholder='region name'
                            onChange={(e)=>setRegion(e.target.value)}
                            name='region'
                            />
                            <input type='text'
                            value={city}
                            placeholder='city'
                            onChange={(e)=>setCity(e.target.value)}
                            name='city'
                            />
                            <input type='text'
                            value={discount}
                            placeholder='discount'
                            onChange={(e)=>setDiscount(e.target.value)}
                            name='discount'
                            />

                            <input type='text'
                            value={offer}
                            placeholder='offer'
                            onChange={(e)=>setOffer(e.target.value)}
                            name='offer'
                            />

                            

                            <input type='submit'
                            value='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OfferDelete