import React, { useState } from 'react';
import logo from '../../assets/logo.jpg'; 
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <nav className="navbar">
                <img src={logo} alt="Home Helper Logo" style={{ width: '55px' }} />
                {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
                <h1>Online Maid Booking</h1>
          
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#about-us">About Us</a></li>
                <Link to="/book" >Book</Link>
                
                
                <li 
                    className="dropdown"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <a href="/login" className="dropdown-toggle">
                        Login <span className="arrow">&#x25BC;</span>
                    </a>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
       
                            <li><a href="/">User Login</a></li>
                            <li><a href="/">Admin Login</a></li>
                            <li><Link to="/login" >WorkerLogin</Link></li>
                        </ul>
                    )}
                </li>
                <Link to="/contact" >Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
