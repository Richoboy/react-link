import React, {useState} from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        console.log("clicked");
        setToggle(!toggle);
    }

    return (
        <div className='navig'>
            <a href='' className='logo'>Spencer</a>
            <nav className={toggle ? 'nav-display':"null"}>
            <ul>
                <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
        </ul>

                <button className='btn'>
                Login
                </button>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
            H
            </div>
         </div>


    )
}

export default Navbar