import React from 'react';
import links from "./../../db/footer-links";
import { Link } from "react-router-dom";
import { ReactComponent as BentLogo } from "./../Svgs/BentLogo.svg";
import './AbsContainer.css';

const AbsContainer = () => {
    let socials = links.col3.map(link =>
        <a key={link.icon} href={link.link} className={link.icon + " icons"} style={{fontSize: "24px"}}>&nbsp;</a>
    )
    let nav = links.col4.map(link =>
        <Link key={link.link} to={link.link} className="a">{link.name}</Link>
    )

    return (
        <div className="abs-container">
            <Link className="logo" to="/">
                <BentLogo />
            </Link>
            <div className="socials">
                {socials}
            </div>
            <div className="nav">
                {nav}
            </div>
        </div>
    );
}

export default AbsContainer;
