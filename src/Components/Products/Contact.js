import axios from 'axios';
import React, { useEffect, useState } from 'react'
import contact from "../S/Sassets/contactImg.avif"

const Contact = () => {
  const [subject,setsubject]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");

const sub=(e)=>{
  e.preventDefault();
  axios.post(`https://backend-express-deploy-7cx7.onrender.com/enquiries`,{
    name,email,phone,message,subject
  })
  .then((res)=>alert("posted"))
  .catch((err)=>alert("error"))
}

  const insta=()=>{
    window.open("https://www.instagram.com/")
  }
  const fb=()=>{
    window.open("https://www.facebook.com/")
  }


  return (
    <>
     
     <div className='container-fluid bg-primary-subtle contact'>
      <h1 className='text-center'><b>Contact us</b></h1>
     </div>
      
      <div className='row p-5'>
        <divi className='col-md-6 p-5'>
          <h5 className='text-warning'>General</h5>
         <h1>ENQUIRIES</h1>
         <p>Do you have any questions or just want to say hello?
           We’d love to hear from you!</p>
           
           <p>Express@gmail.com</p>
           <p>Phone: +917337266170</p>
           
           <img src={contact}
           className='w-100'/>
           </divi>


      <div className='col-md-6 p-5'>
        <h2 className='text-center p-4'>Get in Touch!</h2>
        <form onSubmit={sub}>
         <input
         type='text'
         placeholder='Name'
         value={name}
         onChange={(e)=>setName(e.target.value)}
         className='form-control mb-4'

         />
          <input
         type='email'
         placeholder='Email'
         className='form-control mb-4'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         
         />
          <input
         type='text'
         placeholder='Number'
         className='form-control mb-4'
         value={phone}
         onChange={(e)=>setPhone(e.target.value)}
         />
          <input
         type='text'
         placeholder='subject'
         className='form-control mb-4'
         value={subject}
         onChange={(e)=>setsubject(e.target.value)}
         
         />
          <textarea id="message" name="message" rows="6" cols="50" 
          placeholder="Write your message here..."
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>

         <input type='submit'
         value='send Message'
         className='bg-warning'/>
        </form>

      </div>
      </div>

      <div className='text-center fb'>
        <h2>Follow Us </h2>
        <img src='https://img.freepik.com/free-vector/
        instagram-icon_1057-2227.jpg?ga=GA1.1.1539206806.1717778675&semt=ais_hybrid'
        onClick={insta}
        />
        <img src='https://img.freepik.com/free-psd/
        social-media-logo-design_23-2151296987.jpg?ga=GA1.1.1539206806.1717778675&semt=ais_hybrid'
        onClick={fb}
        />
      </div>

     
    </>
  )
}

export default Contact