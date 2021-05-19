import React from 'react'
import './componentStyles/navbar.css'
const Navbar = () => (
    <div className="nav-container">
        <h1 className="nav title">My Portfolio</h1>
        <ul className="nav nav-tabs">
            <li className="nav-item btn-secondry">About Me</li>
            <li className="nav-item btn-secondry">Projects</li>
            <li className="nav-item btn-secondry">Resume</li>
            <li className="nav-item btn-primary">Contact Info</li>
        </ul>
    </div>
)
export default Navbar