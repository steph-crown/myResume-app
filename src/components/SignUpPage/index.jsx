import React from 'react';
import "./../../css/Sign-Log/index.css";
import { Link } from "react-router-dom";
import { ReactComponent as BentLogo } from "./../Svgs/BentLogo.svg";
import links from "./../../db/footer-links";

const index = () => {
    let socials = links.col3.map(link =>
        <a key={link.icon} href={link.link} className={link.icon + " icons"} style={{fontSize: "24px"}}></a>
    )
    let nav = links.col4.map(link =>
        <Link to={link.link} className="a">{link.name}</Link>
    )

    return (
        <div className="sign-container">
            <Link className="logo" to="/">
                <BentLogo />
            </Link>
            <div className="socials">
                {socials}
            </div>
            <div className="nav">
                {nav}
            </div>

            <div className="left-part">
                <h1>Sign Up for <br /> 
                    <span>my</span>
                    <span>Resume</span>
                </h1>
            </div>
        </div>
    );
}

export default index;
