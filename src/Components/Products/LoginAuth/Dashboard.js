import React, { useContext, useEffect, useState } from 'react'
import { loginCheck } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const [token,setToken]=useContext(loginCheck)
  const [data,setData]=useState("")

  useEffect(()=>{
    axios.get(`http://localhost:4000/dashboard`,{
      headers:{"x-token":token}}
    )
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
  },[])

  const navigate=useNavigate();
  if(!token){
    navigate('/')
  } 
  return (
    <div>
      <h2>Dashboard</h2>


   

      <button onClick={()=>setToken("")}>Logout</button>
    </div>
  )
}  

export default Dashboard