import React from 'react';
import bannerIllustration from './../../assets/man-typing.svg';
import './../../css/HomePage/Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <section className="left">
                <h1>Create Your <br /> Resume</h1>
                <b>By employing the best practices and innovative   tech,
                {/* myResume logo starts */}
                <span className="my"> my</span><span className="Resume">Resume </span> 
                {/* Ends */}
                boosts your chances of landing a better job - completely for free.</b>
                <div className="buttons">
                    <a href="#">Get Started</a>
                    <a href="#">Sign Up</a>
                </div>
            </section>
            <section className="right">
                <img src={bannerIllustration} alt="A man typing."/>
            </section>
        </div>
    );
}

export default Banner;
