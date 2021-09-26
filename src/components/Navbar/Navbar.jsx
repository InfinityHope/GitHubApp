import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg p-3">
        <div className="navbar-brand">
            Github Search
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">Information</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navbar
