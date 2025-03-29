import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Sheader from './Components/S/Sheader';
import Location from './Components/S/SLocation';
import Dress from './Components/Products/Dress';
import AddHotel from './Components/Products/AddHotel';
import ViewHotel from './Components/Products/ViewHotel';
import Login from './Components/Products/Login';
import ViewProduct from './Components/Products/ViewProduct';
import { NavLink } from 'react-router-dom';
import Scan from './Components/Products/Scan';
import Signup from './Components/Products/Signup';
import { createContext, useContext, useState } from 'react';
import Dashboard from './Components/Products/Dashboard';
import Routing from './Components/Products/Routing';

import  * as Icon from 'react-bootstrap-icons';
export const addCount=createContext();
 
export const loginstatus=createContext();
export const loginCheck=createContext();
export const addmenu=createContext();

function App() {
  const [token,setToken]=useState("")
   const [menu,setMenu]=useState([]);
  const [count,setCount]=useState(0);
   const [cart,setcart]=useState([]);
  const [login,setLogin]=useState(false);
  return (
    <div className='App container-fluid'>
    
     <loginCheck.Provider value={[token,setToken]}>
     <loginstatus.Provider value={[login,setLogin]}>
     <addCount.Provider value={[count,setCount]}>
     
    <addmenu.Provider value={[menu,setMenu]}>

    <Header/>
    <Routing/>
    <Footer/>

    </addmenu.Provider>

     </addCount.Provider>
     
    
     </loginstatus.Provider>
     
     </loginCheck.Provider>
     
      
     
     

     

    </div>
    
  )
}

export default App;
