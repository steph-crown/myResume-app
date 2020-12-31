import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div className="mobile-menu">
            <Link to="/" className="x">&times;</Link>
            <Link to="/" className="a">Home</Link>
            <Link to="/new" className="a">Get Started</Link>
            <Link to="/about" className="a">About</Link>
            <Link to="/help" className="a">Help</Link>
            <Link to="/signup" className="a">Sign Up </Link>  
            <Link to="/login" className="a">Log In</Link>
        </div>
    );
}

export default index;
