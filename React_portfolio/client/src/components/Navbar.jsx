import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo2.png";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            <NavLink className="nav-link" to="/signup">Sign Us</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            <NavLink className="nav-link" to="/signin">Login</NavLink>
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar