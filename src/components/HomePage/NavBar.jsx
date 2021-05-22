import React, {useState} from 'react';
import './../../css/HomePage/NavBar.css';
import { Link } from "react-router-dom";
import MobileMenu from './../MobileMenuPage/index';


const Nav = () => {
    const [isMenuOpen, openMenu] = useState(false);

    const navMenu = () => {
        openMenu(true)
    }

    return (
        <nav>
            <Link className="logo" to="/">
                <span className="my">my</span>
                <span className="Resume">Resume</span>
            </Link>
            <div className="links-at-center">
                <Link to="/" className="a">Home</Link>
                <Link to="/edit/new" className="a">Get Started</Link>
                <Link to="/about" className="a">About</Link>
                <Link to="/help" className="a">Help</Link>
            </div>
            <div className="links-at-end">
                <Link to="/signup" className="signup a">Sign Up </Link>  
                <Link to="/login" className="login a">Log In</Link>
            </div>
            <div className="hamburger" onClick={() => {navMenu()}}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={"mobile-menu " + (isMenuOpen ? "open" : "close")} >
                <MobileMenu />
            </div>
        </nav>
    );
}

export default Nav;
