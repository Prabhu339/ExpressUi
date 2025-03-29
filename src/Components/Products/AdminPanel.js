import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginstatus, signStatus } from '../../App';

const AdminPanel = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [login,setLogin]=useContext(loginstatus)
    const navigate=useNavigate();


    const loginChecks=(e)=>{
        e.preventDefault();
        if (username==="chinni"&password==="1234"){
          setLogin(true)
            navigate('/dashboard')
            
        }
        else{alert("invalid password")}

    }
  return (
    <div className='container shadow-lg col-lg-6 p-5 text-center'>
        
           
                
                    <h4 className="p-2 "><b>Admin Login</b></h4>
                   
                        <form onSubmit={loginChecks}>
                            <input type='text' placeholder='username' value={username} 
                            onChange={(e) => setUsername(e.target.value)} className='form-control mb-3' />
                            <input type='password' placeholder='password' value={password}
                            onChange={(e)=>setPassword(e.target.value)} className='form-control mb-3'/>
                            <button type='submit' className='mb-3 form-control-color w-100'>Login</button>
                        </form>
                    </div>
                
          
        

  )
}

export default AdminPanel