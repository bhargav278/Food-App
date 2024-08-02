import React from 'react'
import './Navmenus.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';


function Navmenus() {

    const [authenticate, setAuthenticate] = useState("Login");

    function authentication() {
        (authenticate === "Login") ? setAuthenticate("Logout") : setAuthenticate("Login");
    }

    const items = useSelector((store) => store.cart.items)
    // console.log(items);
    


    let status = useOnlineStatus();
    return (
      
      <>
          <div className='nav-menu'>
                <ul>
                    <li>Status : {(status)?"💹(online)":"🔴(offline)" }</li>
                    <li><Link to="/Food-App/" className='link'>Home</Link></li>
                    <li><Link to="/Food-App/about" className='link'>About</Link></li>
                    <li><Link to="/Food-App/contact" className='link'>Contact us</Link></li>
                    <li><Link to={"/Food-App/cart"} className='link'><i className="fa-solid fa-cart-shopping" ></i> (<span className='bg-white text-danger'>{ items.length}</span>)</Link></li>
              </ul>
                <button onClick={authentication} className='btn btn-outline-danger  me-5 px-4 font-weight-bold'>{authenticate}</button>
          </div>
          
      </>
  )
}

export default Navmenus
