import React, { useContext } from 'react'
//import cart from './Pics/cart.png'
import { NavLink } from 'react-router-dom'
import { addCount } from '../App';
//import raj from "./Pics/raj.jpeg"


const Head = () => {
    const [count,setCount]=useContext(addCount)
  return (
   

<header className=''>
        <nav
            className="navbar navbar-expand-sm shadow"
        >   
            <div className="container-fluid">
                <NavLink className="navbar-brand text-danger" to="/">
               
                <h2><b>Express</b></h2>
                </NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item me-2">
                            <NavLink className="nav-link active" to="/offer" aria-current="page"
                                ><b>Offers!</b>
                                <span className="visually-hidden">(current)</span></NavLink>
                            
                        </li>
                       
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/help"><b>Help</b></NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/contact"><b>Contact</b></NavLink>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link" to="/login"><b>Login </b></NavLink>
                        </li>
                        
                       
                        
                        <li className="nav-item me-2">
                            <NavLink className="nav-link mt" to="/cart"><b className='mt'>CART<span className='text-danger big'>{count}</span></b></NavLink>
                            
                        </li>
                        
                            
                        
                    </ul>
                   
                </div>
            </div>
        </nav>
        
    </header>

  
  )
}

export default Head