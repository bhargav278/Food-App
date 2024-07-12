import React from 'react'
import './Navmenus.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';

function Navmenus() {

    const [authenticate, setAuthenticate] = useState("Login");

    function authentication() {
        (authenticate === "Login") ? setAuthenticate("Logout") : setAuthenticate("Login");
    }

    return (
      
      <>
          <div className='nav-menu'>
              <ul>
                  <li><Link to="/" className='link'>Home</Link></li>
                  <li><Link to="/about" className='link'>About</Link></li>
                  <li><Link to="/contact" className='link'>Contact us</Link></li>
                  <li><Link className='link'><i className="fa-solid fa-cart-shopping" ></i> Cart</Link></li>
              </ul>
                <button onClick={authentication} className='btn btn-outline-danger  me-5 px-4 font-weight-bold'>{authenticate}</button>
          </div>
          
      </>
  )
}

export default Navmenus
