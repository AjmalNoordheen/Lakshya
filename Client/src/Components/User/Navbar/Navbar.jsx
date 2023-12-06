import React from 'react';
import './Navbar.css'
import './Navbar-Responsive.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
    <input type="checkbox" id="active" />
    <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
    {/*menu button*/}
    <div className="wrapper">
      {/*menu button content*/}
      <ul>
        <li><a onClick={()=>navigate('/')}>Home</a></li>
        <li><a onClick={()=>navigate('/eventList')} >Events</a></li>
        <li><a onClick={()=>navigate('/register')}>Register</a></li>
      </ul>
    </div>

    <div className="nav-container">
      {/*navbar content1*/}
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sponsors</a></li>
      </ul>
    </div>

    <div className="nav-container-2">
      {/*Title*/}
      <a href="#">
        {/* <p>LAKSHYA</p> */}
      </a>
    </div>

    <div className="nav-container-3">
      {/*navbar content2*/}
      <div className="nav-container-3">
        <ul>
          <li><a href="event.html">Events</a></li>
          <li><a href="reg.html">Register</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
