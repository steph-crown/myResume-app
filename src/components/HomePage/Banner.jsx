import React from 'react';
import './../../css/HomePage/Banner.css';
import { ReactComponent as Misc } from "./../Svgs/miscellaneous/misc1.svg";
import { Link } from "react-router-dom";
import Illustrate from './../Svgs/banner-illustration.svg';


const Banner = () => {
    return (
        <div className="banner">
            <Misc className="bg-svg one" fill="#d6d2e0" />
            <section className="left">
                <h1 className="not-template">Create Your <br /> Resume</h1>
                <b>By employing the best practices and innovative   tech,
                {/* myResume logo starts */}
                <span className="my"> my</span><span className="Resume">Resume </span> 
                {/* Ends */}
                boosts your chances of landing a better job - completely for free.</b>
                <div className="buttons">
                    <Link to="/edit/new/0" className="a">Get Started</Link>
                    <Link className="a banner-signup" to="signup">Sign Up</Link>
                </div>
            </section>
            <section className="right">
                <img src={Illustrate} alt="Three Resumes"/>
            </section>
        </div>
    );
}

export default Banner;
