import React from 'react';
import bannerIllustration from './../../assets/man-typing.svg';
import './../../css/HomePage/Banner.css';
import { ReactComponent as Misc } from "./../Svgs/miscellaneous/misc1.svg";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="banner">
            <Misc className="bg-svg one" fill="#d6d2e0" />
            <section className="left">
                <h1>Create Your <br /> Resume</h1>
                <b>By employing the best practices and innovative   tech,
                {/* myResume logo starts */}
                <span className="my"> my</span><span className="Resume">Resume </span> 
                {/* Ends */}
                boosts your chances of landing a better job - completely for free.</b>
                <div className="buttons">
                    <Link to="/new" className="a">Get Started</Link>
                    <Link className="a banner-signup" to="signup">Sign Up</Link>
                </div>
            </section>
            <section className="right">
                <img src="" alt="A man typing."/>
            </section>
        </div>
    );
}

export default Banner;
