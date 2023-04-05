import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About Us</Link>
                </li>
                <li>
                    <Link to="/Destination">Destination</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/RegistrationForm">Registration Form</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar