import React from 'react';
import './../../css/HomePage/NavBar.css';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <span className="my">my</span>
                <span className="Resume">Resume</span>
            </div>
            <div className="links-at-center">
                <a href="#">Home</a>
                <a href="#">Get Started</a>
                <a href="#">About</a>
                <a href="#">Help</a>
            </div>
            <div className="links-at-end">
                <Link to="/signup" className="signup">Sign Up</Link>   
                <a href="#" className="login">Log In</a>
            </div>
            <div className="menu-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Nav;
