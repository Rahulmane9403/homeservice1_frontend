import React, { useState } from 'react';
import logo from '../../assets/logo.jpg'; 
import './Navbar.css'; // Import your CSS file for styling

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
                <li><a href="/services">Services</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="/Payment">Book a Maid</a></li>
                
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
                            <li><a href="/worker-registration">Worker Registration</a></li>
                            <li><a href="/user-registration">User Registration</a></li>
                            <li><a href="/user-login">User Login</a></li>
                            <li><a href="/admin-login">Admin Login</a></li>
                            <li><a href="/worker-login">Worker Login</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/contact"></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
