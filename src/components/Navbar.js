import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./styles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() =>  {
                    setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <span className='links-items'><Link to="/"> Home </Link></span>
            <span className='links-items'><Link to="/projects"> Projects </Link></span>
        </div>
    </div>
  )
}

export default Navbar