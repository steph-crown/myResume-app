import React from 'react';
import './../../css/HomePage/NavBar.css'

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
                <a href="#">Sign Up</a>   
                <a href="#" className="login">Log In</a>
            </div>
        </nav>
    );
}

export default Nav;
