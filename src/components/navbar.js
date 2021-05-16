import React from 'react'
import './componentStyles/navbar.css'
const Navbar = () => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item btn-primary">About Me</li>
            <li className="nav-item btn-primary">Projects</li>
            <li className="nav-item btn-primary">Resume</li>
            <li className="nav-item btn-primary">Contact Info</li>
        </ul>
    </div>
)
export default Navbar